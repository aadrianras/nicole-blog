/* eslint-disable @next/next/no-img-element */
import { NextSeo } from 'next-seo';
import ContactBox from '../components/contact/ContactBox';


import { hero, hero_text, common, title, masotherapy, description, kinesitherapy, electrotherapy, respiratory, lymphatic, geriatric, neurological, treatment, division } from './servicios.module.css';


const servicios = () => {
    return (
        <main>

            {/* SEO */}
            <NextSeo
                title="Fisioterapeuta Nicole Azurduy | Servicios"
                description="Servicios profesionales en fisioterapia y kinesiología Nicole Azurduy. Ubicada en la ciudad de La Paz, Bolivia."
                canonical="https://www.nicoleazurduy.com/servicios"
                openGraph={{
                    url: 'https://www.nicoleazurduy.com/servicios',
                    title: 'Fisioterapeuta Nicole Azurduy | Servicios',
                    description: 'Servicios profesionales en fisioterapia y kinesiología Nicole Azurduy. Ubicada en la ciudad de La Paz, Bolivia.',
                }}
            />



            <div className={`${hero}`}>
                <div className={hero_text}>
                    <h1 >Mis servicios</h1>
                    <p>Existen una amplia variedad de tratamientos para los diversos problemas que pueda presentar una persona, aquí me gustaría mencionar algunos de los más comunes y/o esenciales.</p>
                </div>
                <img src='/images/hands-flowers.jpg' alt='Mano con flores' />
            </div>


            <div className={common}>
                <h2>Tipos de terapias</h2>
            </div>


            <div className={`${masotherapy} ${treatment}`}>
                <h3 className={title}>Terapia manual</h3>
            </div>
            <p className={description}><b>La Terapia Manual</b> se basa en técnicas específicas para el tratamiento del dolor y otros sintomas de disfunción neuro-músculo-esquelética en la columna vertebral y/o extremidades. Estas técnicas son aplicadas manualmente basándose en <b>movilizaciones, manipulaciones, masajes terapéuticos, masajes relajantes y/o masajes para estimular el riego sanguíneo.</b></p>


            <div className={`${kinesitherapy} ${treatment}`}>
                <h3 className={title}>Cinesiterapia</h3>
            </div>
            <p className={description}><b>La Cinesiterapia</b> se aplica mediante técnicas y procedimientos basados en el movimiento cinético, cinemático y dinámico trato distintas patologías o alteraciones músculo-esqueléticas, mayormente encontradas en el adulto mayor.</p>


            <div className={`${electrotherapy} ${treatment}`}>
                <h3 className={title}>Electroterapia</h3>
            </div>
            <p className={description}><b>La Electroterapia</b> es la técnica comunmente utilizada para la rehabilitación terapéutica, es decir, mediante la aplicación profesional de corriente eléctrica se estimula el fortalecimiento de la masa muscular, articular u otros. Asimismo, se utiliza como un medio de recuperación en todo tipo de afecciones.</p>


            <div className={`${respiratory} ${treatment}`}>
                <h3 className={title}>Terapia Respiratoria</h3>
            </div>
            <p className={description}><b>La Terapia Respiratoria</b> se basa en el conjunto de técnicas que tratan las diferentes patologías cardio-respiratorias buscando restaurar y preservar el normal funcionamiento de este sistema. Se realizan evaluaciones constantes y diversos tratamientos como <b>Oxigenoterapia, Movilización de secreciones, Ventilación dirigida, Drenaje postural, ETGOL</b> y otro más hasta que el paciente logre una recuperación completa y que perdure en el tiempo.</p>


            <div className={`${lymphatic} ${treatment}`}>
                <h3 className={title}>Drenaje Linfático</h3>
            </div>
            <p className={description}><b>El Drenaje Linfático</b> se basa en un método de masajes específicos con maniobras precisas, suaves, superficiales y ritmicas. Esté tratamiento se aplica sobre el sistema cirtulatorio, su objetivo es movilizar los liquidos del organismo para favorecer la eliminación de sustancias de desecho que se acumulan en la sangre. Este tratamiento se aplica en edemas localizados y generalizados, celulítis, problemas de cirulación, piernas cansadas, procesos de cicatrización, etc...</p>


            <div className={`${geriatric} ${treatment}`}>
                <h3 className={title}>Terapia Geriátrica</h3>
            </div>
            <p className={description}><b>La Terapia Geriátrica</b> ofrece una alternativa no farmacológica preventiva y de mantenimiento, especialmente diseñada para personas mayores de 65 años, con el objetivo de mejorar la capacidad física del adulto mayor, evitando el deterioro progresivo y mejorando su calidad de vida.</p>


            <div className={`${neurological} ${treatment}`}>
                <h3 className={title}>Terapia Neurológica</h3>
            </div>
            <p className={description}><b>La Terapia Neurológica</b> se dedica al tratamiento de lesiones ocasionadas por la afección del sistema nervioso. El objetivo es mejorar las capacidades físicas y alteraciones estructurales del paciente neurológico, para así poder mejorar la calidad y efectividad del movimiento en cuanto a su postura.</p>


            <ContactBox />
        </main>
    );
}


export default servicios;