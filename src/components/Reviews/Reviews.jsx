import './Reviews.css';
import logoRev1 from './../../assets/image_reviews_1.jpg';
import logo2 from './../../assets/image_reviews_2.jpg';
import logo3 from './../../assets/image_reviews_3.jpg';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Reviews extends Component {
    render() {
        return (
            <div >
                <div className='title-news' data-aos-duration="1000">
                    <h3>Reviews</h3>
                </div>
                <Carousel className='carousel-container' >

                    <div data-aos="fade-right" data-aos-duration="1000">
                        <img className='logo-rev' src={logoRev1} />
                        <p className="legend">Los-Angeles</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <img className='logo-rev' src={logo2} />
                        <p className="legend">New-York</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <img className='logo-rev' src={logo3} />
                        <p className="legend">Los-Angeles</p>
                    </div>
                </Carousel>
            </div>

        );
    }
};

export default Reviews;