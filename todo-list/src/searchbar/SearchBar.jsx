import './searchbar.css'
import { useState } from 'react'

const SearchBar = ({onAddTask}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue)
  }

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      onAddTask(inputValue);
      setInputValue('')
    }
  }

  return (
    <div className='searchbar'>
      <input 
      className="input-searchbar" 
      type="search" 
      placeholder="Adicionar tarefa"
      value={inputValue}
      onChange={handleInputChange}/>
      <button className="btn add-btn" onClick={handleButtonClick}>Add</button>
    </div>
  )
}
export default SearchBar