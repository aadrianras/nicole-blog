/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { container, title, content, image_s, name_s } from './Testimonials.module.css';

const Testimonials = ({ clientsOpinion }) => {
    return (
        <div className={container}>
            <div className={title}>
                <h3>Testimonios</h3>
                <p>Officia exercitation dolor aute velit ex commodo sit voluptate aliquip.</p>
            </div>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={true}
            >
                {
                    clientsOpinion.map(({ name, testimonial }) => {
                        return (
                            <div className={content} key={name.replace(' ', '')}>
                                <img className={image_s} src='/images/nicole.jpg' alt='example' />
                                <h5 className={name_s}>{name}</h5>
                                <p>{testimonial}</p>
                            </div>
                        )
                    }
                    )
                }
            </Carousel>
        </div>
    );
}

export default Testimonials;