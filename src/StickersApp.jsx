import { useState } from "react";
import { ImagesGrid } from "./ImagesGrid";
import { InputSearch } from "./inputSearch";

export const StickersApp = () => {

  const [searchCategory, setSearchCategory] = useState('Studio Ghibli');

  const onAddNewSearch = (newSearch) => {

    setSearchCategory(newSearch);
  }

  return (
    <div>
      <h1>Stickers App</h1>
      <InputSearch onNewSearch = { onAddNewSearch }/>
      <h2>{searchCategory} results</h2>
      <ImagesGrid category={searchCategory}/>
    </div>
  )
}
