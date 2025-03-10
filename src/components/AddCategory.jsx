import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length <= 1) return;

    // console.log(inputValue);
    // setCategories( categories => [ trimmedValue, ...categories ]);
    onNewCategory(trimmedValue.toLowerCase());
    setInputValue('');
    
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>        
  )
}


