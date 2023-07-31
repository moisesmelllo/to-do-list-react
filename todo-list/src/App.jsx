import { useState } from 'react'
import NavbarComponent from './navbar/NavbarComponent'
import SearchBar from './searchbar/SearchBar'
import './app.css'


function App() {


  return (
    <div className='background'>
      <div className="flexbox">
        <section>
          <NavbarComponent />
          <SearchBar />
          <div style={{ background: 'red' }}>
            <h1>corpo</h1>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
