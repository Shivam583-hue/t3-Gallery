import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const images = await db.query.images.findMany(
    { orderBy: (model, { desc }) => desc(model.id) },
  );
  return (
    <main className="min-h-screen bg-black">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images].map((image) => (
          <div key={image.id} className="w-64 h-64 bg-white">
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
    </main>
  );
}
