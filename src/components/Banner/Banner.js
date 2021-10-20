import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className='text-danger fw-bold fs-1'>Your Most Trusted Health Partner</h2>
                            <p className='fw-bold text-info'>Health is a state of complete physical, mental, <br /> and social well-being and not merely the absence of disease or infirmity.

                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-danger fw-bold fs-1">Health Care </h2>
                            <h3 className="text-primary fw-bold fs-1" >For Whole Family</h3>
                            <p className="text-info fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 className='fw-bold fs-1 text-primary'>Making Health Care Better Together</h2>
                            <p className="text-info fw-bold">Where is the art of medicine is respected <br /> There is also respect for humanity</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;