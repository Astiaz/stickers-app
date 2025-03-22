import { useState } from 'react'

export const InputSearch = ({onNewSearch}) => {

    const [inputValue, setInputValue] = useState('');
  
    const onSubmitEvent = (event) => {
        event.preventDefault();
        const formatSearch = inputValue.trim();
  
        if(formatSearch.length <= 1) return;
  
        onNewSearch(formatSearch);
        setInputValue('');
    }
  
    const onInputChange = (event) => {
      const newSearch = event.target.value;
      setInputValue(newSearch);
    }

  return (
    <div className='searchBar'>
      <form action="#" onSubmit={onSubmitEvent}>
        <input type="text" placeholder="Search something" value={inputValue}  onChange={onInputChange}/>
        <button type="submit">buscar</button>
      </form>
    </div>
  )
}
