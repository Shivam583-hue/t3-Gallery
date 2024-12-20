import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/JlVSqIfB1I6EKypnvMaQ2UbQrN5fXkocSuzaB9tP48piEdYI",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.url} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
