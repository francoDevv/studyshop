import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Information from './components/Information/Information'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ItemListContainer></ItemListContainer>}> 
        </Route>

        <Route path='/categoria/:categoriaId'>
        </Route>

        <Route path='/informacion' element={<Information></Information>}>
        </Route>

        <Route path='/contacto' element={<Contact></Contact>}>
        </Route> 
      </Routes>
    </div>
  )
}

export default App