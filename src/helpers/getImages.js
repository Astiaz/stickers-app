
export const getImages = async(category) => {

    const APIKEY = import.meta.env.VITE_GIF_API_KEY;

    const url = `https://api.giphy.com/v1/stickers/search?api_key=${APIKEY}&q=${category}&limit=30`;
    const getImagesPromise = await fetch(url);
    const { data } = await getImagesPromise.json();

    const imagesList = data.map( element => ({
        id: element.id,
        title: element.title,
        url: element.images.downsized_medium.url,
    }));

    return imagesList;
}