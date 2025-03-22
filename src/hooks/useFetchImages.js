import { useEffect, useState } from "react";
import { getImages } from "../helpers/getImages";

export const useFetchImages = (category) => {

      const [images, setImages] = useState(['']);
  
      const newStickersList = async() => {
          const stickerList = await getImages(category);
  
          setImages(stickerList);
      }
  
      useEffect(()=> {
          newStickersList();
      }, [category]);
  
    return {
        images
    }
}
