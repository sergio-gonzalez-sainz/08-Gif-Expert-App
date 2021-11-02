import React, {useState} from 'react'

export const GifExpertApp = () => {
    
    // const categories =['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch','Samurai','Dragon Ball']);

    const handleAdd = () => {
        setCategories (cats => ['HunterXHunter',...categories]);
    }

    return (
        <div>
            <h1>GifExpertApp</h1>
            <hr/>
            <button  onClick = { handleAdd } >Agregar</button>
            {
                <ol>
                    {
                        categories.map( (category, i) => {
                            return <li key = { category } >{ category }</li>
                        } )
                    }
                </ol>
            }
        </div>
    )
}
