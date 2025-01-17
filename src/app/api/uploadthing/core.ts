import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();


export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 40,
    },
  })
    .middleware(async ({ req }) => {

      const user = auth();

      if (!(await user).userId) throw new UploadThingError("Unauthorized");

      return { userId: (await user).userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      await db.insert(images).values({ name: file.name, url: file.url, userId: metadata.userId });

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
