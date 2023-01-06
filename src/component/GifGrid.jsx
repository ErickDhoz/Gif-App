import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid ({ categorias }){

    const { imagenes, isLoading } =useFetchGifs( categorias )
       
    return(
        <>
        <h3>{categorias}</h3>   
        {
        isLoading && (<h2>Cargando...</h2>)
        }
        

        <div className="card-grid">
            {
                imagenes.map(( imagenes )=>(
                    <GifItem
                    key={ imagenes.id }
                    { ...imagenes }
                    />
                ))
            }
        </div>  

        </>
    )
};

export default GifGrid