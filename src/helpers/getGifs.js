const getGifs =async( categorias )=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=46kF3IYS5sDetdyZx3de6oFl8tCx3JKU&q=${categorias}&limit=10`;
    const resp =await fetch( url );
    const{ data }= await resp.json();
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }));
    
    return gifs;
    
};
export default getGifs;