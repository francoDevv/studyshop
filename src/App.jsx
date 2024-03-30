import React from 'react'
import Navegar from './components/Navegar/Navegar'
import "./App.css"
import CarouselInicio from './components/Carousel/Carousel'
import TituloPrincipal from './components/Title/TituloPrincipal'
import CarouselProductos from './components/CarouselProductos/CarouselProductos'

function App() {
  return (
    <div className='App'>
      <Navegar></Navegar>
      <CarouselInicio></CarouselInicio>
      <TituloPrincipal></TituloPrincipal>
      <CarouselProductos></CarouselProductos>
    </div>
  )
}

export default App