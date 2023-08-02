import { useState } from 'react'
import NavbarComponent from './navbar/NavbarComponent'
import SearchBar from './searchbar/SearchBar'
import Body from './body/Body'
import './App.css'


function App() {


  return (
    <div className='background'>
      <div className="flexbox">
        <section>
          <NavbarComponent />

          <Body />
        </section>
      </div>
    </div>
  )
}

export default App
