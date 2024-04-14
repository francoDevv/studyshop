import Carousel from 'react-bootstrap/Carousel';
import banner_1 from '../../../public/ezequiel.png'
import banner_2 from '../../../public/banner_moni.png'
import banner_3 from '../../../public/logo-studyshop.jpg'
import styles from './Carousel.module.css'

function CarouselInicio() {
  return (
    <div className={styles.carousel_container}>
        <Carousel data-bs-theme="dark" className={styles.carousel}>
            <Carousel.Item className={styles.carousel_item}>
                <img className={styles.carousel_img} src={banner_2} alt="First slide" />
                <Carousel.Caption>
                {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carousel_item}>
                <img className={styles.carousel_img} src={banner_2} alt="Second slide" />
                <Carousel.Caption>
                {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carousel_item}>
                <img className={styles.carousel_img} src={banner_2} alt="Third slide" />
                <Carousel.Caption>
                {/* <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselInicio;