import  { useState } from 'react';

export default function AddCategory( { addCategory } ) {
    
    const [inputValue, setInputValue] = useState('');
    

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length <= 1 ) return;
        addCategory( inputValue );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
    <input
        type="text" 
        placeholder="busca un gif"
        onChange={ handleChange }
    />
    <button type='submit'>Add Category</button> 
    </form>
    )
}
