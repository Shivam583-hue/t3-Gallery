import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {
  const user = await auth();

  if (!user?.userId) {
    throw new Error("Unauthorized");
  }

  const id = user.userId;
  console.log("id", id);

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, id),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}
