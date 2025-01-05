import { getImage } from "~/server/queries"
import { Modal } from "./modal"

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  const idAsNumber = parseInt(photoId)
  const image = await getImage(idAsNumber)
  return <Modal>
    <img src={image.url} alt={image.name} />
  </Modal>
}
