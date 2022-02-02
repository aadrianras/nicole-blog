/* eslint-disable @next/next/no-img-element */
import ContactBox from '../components/contact/ContactBox';
import Testimonials from '../components/testimonials/Testimonials';

import { hero, hero_text, common, title, masotherapy, description, kinesitherapy, electrotherapy, respiratory, lymphatic, geriatric, neurological, treatment, division } from './servicios.module.css';


const servicios = ({ data: { clientsOpinion } }) => {
    return (
        <main>
            <div className={`${hero}`}>
                <div className={hero_text}>
                    <h1 >Mis servicios</h1>
                    <p>Est ullamco deserunt voluptate irure deserunt commodo deserunt proident. Dolor ut eiusmod non magna proident est qui sunt fugiat incididunt.</p>
                </div>
                <img src='/images/hands-flowers.jpg' alt='Mano con flores' />
            </div>


            <div className={common}>
                <h6 >Los más esenciales</h6>
            </div>


            <div className={`${masotherapy} ${treatment}`}>
                <h2 className={title}>Fisioterapia manual</h2>
            </div>
            <p className={description}><b>La Fisioterapia Manual</b> se basa en técnicas específicas para el tratamiento del dolor y otros sintomas de disfunción neuro-músculo-esquelética en la columna vertebral y/o extremidades. Estas técnicas son aplicadas manualmente basándose en <b>movilizaciones, manipulaciones, masajes terapéuticos, masajes relajantes y/o masajes para estimular el riego sanguíneo.</b></p>


            <div className={`${kinesitherapy} ${treatment}`}>
                <h2 className={title}>Cinesiterapia</h2>
            </div>
            <p className={description}><b>La Cinesiterapia</b> se aplica mediante técnicas y procedimientos basados en el movimiento cinético, cinemático y dinámico trato distintas patologías o alteraciones músculo-esqueléticas, mayormente encontradas en el adulto mayor.</p>


            <div className={`${electrotherapy} ${treatment}`}>
                <h2 className={title}>Electroterapia</h2>
            </div>
            <p className={description}><b>La Electroterapia</b> es la técnica comunmente utilizada para la rehabilitación terapéutica, es decir, mediante la aplicación profesional de corriente eléctrica se estimula el fortalecimiento de la masa muscular, articular u otros. Asimismo, se utiliza como un medio de recuperación en todo tipo de afecciones.</p>


            <div className={`${respiratory} ${treatment}`}>
                <h2 className={title}>Terapia Respiratoria</h2>
            </div>
            <p className={description}><b>La Terapia Respiratoria</b> se basa en el conjunto de técnicas que tratan las diferentes patologías cardio-respiratorias. </p>


            <div className={`${lymphatic} ${treatment}`}>
                <h2 className={title}>Drenaje Linfático</h2>
            </div>
            <p className={description}><b>El Drenaje Linfático</b> se basa en un método de masajes específicos con maniobras precisas, suaves, superficiales y ritmicas. Esté tratamiento se aplica sobre el sistema cirtulatorio, su objetivo es movilizar los liquidos del organismo para favorecer la eliminación de sustancias de desecho que se acumulan en la sangre. Este tratamiento se aplica en edemas localizados y generalizados, celulítis, problemas de cirulación, piernas cansadas, procesos de cicatrización, etc...</p>


            <div className={`${geriatric} ${treatment}`}>
                <h2 className={title}>Terapia Geriátrica</h2>
            </div>
            <p className={description}><b>La Terapia Geriátrica</b> ofrece una alternativa no farmacológica preventiva y de mantenimiento, especialmente diseñada para personas mayores de 65 años, con el objetivo de mejorar la capacidad fisica del adulto mayor, evitando el deterioro progresivo y mejorando su calidad de vida.</p>


            <div className={`${neurological} ${treatment}`}>
                <h2 className={title}>Terapia Neurológica</h2>
            </div>
            <p className={description}><b>La Terapia Neurológica</b> se dedica al tratamiento de lesiones ocasionadas por la afección del sistema nervioso. El objetivo es mejorar las capacidades fisicas y alteraciones estructurales del paciente neurológico, para así poder mejorar la calidad y efectividad del movimiento en cuanto a su postura.</p>


            <ContactBox />
        </main>
    );
}

export const getStaticProps = async (ctx) => {

    const clientsOpinion = [
        {
            name: 'Adrian Aguilar',
            testimonial: 'Cillum occaecat incididunt cupidatat fugiat occaecat proident culpa excepteur ut sunt sunt irure ut. Aliquip minim aute enim ex. Sunt cillum ipsum minim est dolor. Nisi proident qui laboris exercitation laboris do dolore aliquip. Occaecat fugiat aliqua anim culpa ea et duis reprehenderit.',
        },
        {
            name: 'Gemma Sandic',
            testimonial: 'Ad mollit dolore nostrud culpa. Quis consectetur incididunt consequat irure magna eu laborum ullamco aliquip quis laborum. Qui duis esse nisi proident minim voluptate laboris fugiat duis nostrud ut cupidatat mollit. Excepteur sint tempor dolore velit sint consequat id irure.',
        },
        {
            name: 'Oscar Fernandez',
            testimonial: 'Nostrud minim in consectetur ex cillum cupidatat adipisicing id aliquip voluptate consectetur Lorem.',
        }
    ]

    return {
        props: {
            data: {
                clientsOpinion
            }
        }
    }
}

export default servicios;