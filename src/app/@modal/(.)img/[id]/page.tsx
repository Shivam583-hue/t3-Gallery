import { getImage } from "~/server/queries"

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  const idAsNumber = parseInt(photoId)
  const image = await getImage(idAsNumber)
  return <div className="bg-black text-white h-screen w-screen">
    <img src={image.url} alt={image.name} />
  </div>
}
