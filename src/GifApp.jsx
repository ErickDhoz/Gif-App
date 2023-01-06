import { useState } from "react";
import AddCategory from "./component/AddCategory";
import GifGrid from "./component/GifGrid";


function GifApp(){

    const [categorias, setCategorias]=useState(['Dragon Ball']);
   
    const onAddCategory=(newCategory)=>{
        if(categorias.includes(newCategory))return;
        setCategorias([newCategory,...categorias]);
    }

    return(
        <>
        <h1 className="titulo">Gif-App</h1>
        <AddCategory        
        onNewcategory={onAddCategory}       
        />
         
            {categorias.map(categorias=>
                (
                  <GifGrid
                  key={categorias}
                  categorias={categorias}
                  />  
                )
            )}            
        
              
        </>
    )
};
export default GifApp;