import { useState } from "react";

function AddCategory({ onNewcategory }){

    const[inputValue, setInputValue]=useState('')

    const onChangeHandle=(e)=>{
      setInputValue(e.target.value);     
    }

    const onSubmit=(e)=>{
      e.preventDefault();  
      
      if(inputValue.trim().length<=1)return;    
      onNewcategory(inputValue.trim());        
      setInputValue('');
      
    }

    return(
        
        <form onSubmit={onSubmit}>
          <input 
            type={'text'} 
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={onChangeHandle}
          />
        </form>        
        
    )
};
export default AddCategory;