import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";




export const useFetchGifs=( categorias )=>{

    const [imagenes, setimagenes]=useState([]);
    const [isLoading, setIsLoading]=useState( true );

    const getImages = async()=>{
        const newImages =await getGifs( categorias );
        setimagenes( newImages );
        setIsLoading( false )
        
    }

    
    useEffect( ()=>{
        getImages();
    },[ ] )

return{
    imagenes,
    isLoading,
}

};