import React from 'react'
import CarouselInicio from '../Carousel/Carousel'
import MainTitle from '../MainTitle/MainTitle'
import CarouselProductos from '../CarouselProductos/CarouselProductos'
import Subtitle from '../Subtitle/Subtitle'

const ItemListContainer = () => {
  return (
    <div>
        <CarouselInicio></CarouselInicio>
        <MainTitle></MainTitle>
        <CarouselProductos></CarouselProductos>
        <Subtitle></Subtitle>
    </div>
  )
}

export default ItemListContainer