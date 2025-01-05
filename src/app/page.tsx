import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {

  const images = await getImages()
  console.log("images", images);
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-64 h-64 bg-white">
          <img src={image.url} alt={image.name} />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <SignedOut>
        <div className="text-white text-center w-full h-full text-2xl">
          Please sign in above.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
