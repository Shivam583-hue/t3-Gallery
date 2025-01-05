import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages()
  console.log("images", images);
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="w-64 h-64 bg-white">
          <Link href={`/img/${image.id}`}>
            <img src={image.url} alt={image.name} />
          </Link>
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
