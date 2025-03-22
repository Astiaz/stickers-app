import { downloadImage } from "./helpers/downloadImage"

export const ImageItem = ({title, url}) => {

  const onClickDownload = () => {
    downloadImage({title, url});
  }

  return (
    <div className="stickerItem">
        <h4>{title}</h4>
        <img src={url} alt={title} />
        <button className="downloadButton" onClick={onClickDownload}>Download</button>
    </div>
  )
}
