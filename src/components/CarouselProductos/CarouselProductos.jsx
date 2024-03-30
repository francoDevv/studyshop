import React from 'react'
import foto_1 from '../../../public/ezequiel.png'
import foto_2 from '../../../public/banner_moni.png'
import foto_3 from '../../../public/logo-studyshop.jpg'
import { Carousel, Col, Row } from 'react-bootstrap'
import './CarouselProductos.css'

const CarouselProductos = () => {
  return (
    <div className='carousel_contenedor'>
        <Carousel data-bs-theme="dark" className='carousel'>
            <Carousel.Item className='carousel_item'>
                <Row>
                    <Col>
                        <img className="carousel_prod" src={foto_1} alt="First slide" />
                    </Col>
                    <Col>
                        <img className="carousel_prod" src={foto_1} alt="First slide" />
                    </Col>
                    <Col>
                        <img className="carousel_prod" src={foto_1} alt="First slide" />
                    </Col>
                    <Carousel.Caption>
                    {/* <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Row>
            </Carousel.Item>
            <Carousel.Item className='carousel_item'>
                <img className="carousel_img" src={foto_2} alt="Second slide" />
                <Carousel.Caption>
                {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel_item'>
                <img className="carousel_img" src={foto_2} alt="Third slide" />
                <Carousel.Caption>
                {/* <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselProductos