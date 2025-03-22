import { ImageItem } from './ImageItem';
import { useFetchImages } from './hooks/useFetchImages';

export const ImagesGrid = ({category}) => {

  const { images } = useFetchImages(category);

  return (
    <div className='stickersGrid'>
        {
            images.map(sticker => (
                <ImageItem key={sticker.id} {...sticker}/>
            ))
        }
    </div>
  )
}
