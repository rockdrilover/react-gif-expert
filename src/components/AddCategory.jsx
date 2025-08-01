import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputvalue] = useState('');

    const  onInputChange= ({target})=>{
        setInputvalue(target.value);
    };

    const OnSubmit= (event) =>{
        if (inputValue.trim().length <=1) return;
        event.preventDefault();
        //setCategories(categories =>[inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputvalue('');
    }
  return (
    <form onSubmit={OnSubmit}>
        <input type='text' placeholder='Busca Gifs' value={inputValue} 
        onChange={(event) => onInputChange(event)}></input>
        <br></br>
    </form>
  )
};
