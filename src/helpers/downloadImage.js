export const downloadImage = async({title, url}) => {
    try {
        const resp = await fetch(`${url}`);
        //Convertir img en archivo binario
        const blob = await resp.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        //dar nombre al archivo y simular un click
        link.download = `${title}.gif`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // Limpiar memoria del archivo binario
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error(error);
    }

  return null;
}
