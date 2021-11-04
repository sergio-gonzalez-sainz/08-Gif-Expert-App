import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch','Samurai','Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories (cats => ['HunterXHunter',...categories]);
    // }



    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory/>
            <hr/>
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
