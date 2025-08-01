import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//Se crea el comopnente principal de la aplicacion
export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory=( newCategory ) =>{
        console.log(newCategory);
        if(categories.includes(newCategory)) return false;
        //categories.push(newCatagory);
        setCategories([newCategory, ...categories]);
    };


    return(
        <div>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={ event => onAddCategory(event)}
            />
            
            <ol>
                {
                    categories.map(cat => (
                        (
                           <GifGrid key={cat} category={cat}/>
                        )
                    ))
                }
                
            </ol>
        </div>
    );
}