import React, {useState} from 'react'

export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Para prevenir el comportaminto por defecto del formulario
        console.log('Hecho');
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text" 
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}
