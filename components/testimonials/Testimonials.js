/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-responsive-carousel';
import { container, title, content, image_s, name_s } from './Testimonials.module.css';

const Testimonials = ({ clientsOpinion }) => {
    return (
        <div className={container}>
            <div className={title}>
                <h3>Testimonios</h3>
                <p>Lo más importante para mí, son las opiniones de mis clientes.</p>
            </div>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={true}
            >
                {
                    clientsOpinion.map(({ name, testimonial, picture }) => {
                        return (
                            <div className={content} key={name.replace(' ', '')}>
                                <img className={image_s} src={`/images/testimonials/${picture}`} alt='example' />
                                <h4 className={name_s}>{name}</h4>
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