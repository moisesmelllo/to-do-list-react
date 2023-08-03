import './searchbar.css'
import { useState } from 'react'
import IconButton from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  }

  return (
    <div className="searchbar">
      <input
        className="input-searchbar"
        type="text"
        placeholder="Adicionar tarefa"
        value={inputValue}
        maxLength={25}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
      />
      <IconButton onClick={handleButtonClick} className="add-btn" aria-label="add" size="large">
        <AddIcon className="add-btn" />
      </IconButton>
    </div>
  )
}
export default SearchBar