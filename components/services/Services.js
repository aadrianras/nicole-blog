import ButtonLinkAnimation from '../buttons/ButtonLinkAnimation';
import { services_c, mg, hand_up, services } from './Services.module.css';

const Services = () => {
    return (
        <div className={`${services_c} ${mg}`}>
            <div className={hand_up}></div>
            <div className={services}>
                <h3>¿Qué servicios ofrezco?</h3>
                <p>Amet laborum amet minim minim magna proident elit do. Non officia sunt ex nulla id. Officia labore proident culpa excepteur ea culpa amet anim pariatur ut incididunt qui. Cupidatat anim incididunt cillum fugiat tempor voluptate fugiat cillum consequat. Eiusmod nulla aliqua ipsum amet occaecat aliquip proident sunt commodo ullamco minim enim.</p>
                <ButtonLinkAnimation text={'Más información'} toURL={'/servicios'} />
            </div>
        </div>
    );
}

export default Services;