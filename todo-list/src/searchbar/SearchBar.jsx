import './searchbar.css'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <input className="input-searchbar" type="search" placeholder="Adicionar tarefa"/>
      <button className="btn add-btn">Add</button>
    </div>
  )
}
export default SearchBar