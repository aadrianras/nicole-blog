/* eslint-disable @next/next/no-img-element */
import ValueCard from '../components/cards/ValueCard';
import ContactBox from '../components/contact/ContactBox';
import Services from '../components/services/Services';
import Lottie from "lottie-react";
import doctorLottie from '../public/lotties/doctor.json';

import { grid, grid_top, mg_bottom, mg_center, greeting, collage, hi, history, hands, values, objective, lottie } from './sobre-mi.module.css';
import { NextSeo } from 'next-seo';


const sobreMi = () => {
    return (
        <main>
            {/* SEO */}
            <NextSeo
                title="Fisioterapeuta Nicole Azurduy | Sobre mi"
                description="Servicios profesionales en fisioterapia y kinesiología Nicole Azurduy. Ubicada en la ciudad de La Paz, Bolivia."
                canonical="https://www.nicoleazurduy.com/sobre-mi"
                openGraph={{
                    url: 'https://www.nicoleazurduy.com/sobre-mi',
                    title: 'Fisioterapeuta Nicole Azurduy | Sobre mi',
                    description: 'Conoce a la fisioterapeuta y kinesiologa Nicole Azurduy. Ubicada en la ciudad de La Paz, Bolivia.',
                }}
            />

            <div className={`${grid} ${greeting} ${mg_bottom}`}>
                <div className={hi}>
                    <h2>¡Hola!</h2>
                    <p>Qué bueno que desees conocerme. Soy Fisioterapeuta y Kinesióloga, además me encuentro cursado la carrera de Medicina. Estoy casada y soy madre. En mi tiempo libre, me encanta escuchar música ranchera mientras conduzco mi motocicleta o jugar a las cartas con mi familia. Finalmente, lo que más felicidad me otorga es poder trabajar en lo que me apasiona, ayudando a las personas.</p>
                </div>
                <div className={collage}>
                    <img className={mg_center} src='/images/collage.png' alt='Collage Nicole Azurduy Fisioterapeuta' />
                </div>
            </div>


            <div className={`${grid} ${mg_bottom}`}>
                <div className={history}>
                    <h2>Mi historia</h2>
                    <p>Nací y vivo en La Paz, Bolivia. Estudie Fisioterapia y Kinesiología en la Universidad Central y estoy cursando la carrera de Medicina en la Universidad Nuestra Señora de La Paz. He trabajado en el Centro Integral Mary Andrea y en el Centro de Rehabilitación Vida Nueva. Actualmente, trabajo en mi consultorio y a domicilio, lo cual me permite brindar una atención personalizada de acuerdo a la necesidad de cada paciente.</p>
                </div>
                <div className={hands}></div>
            </div>


            <div className={`${values} ${mg_bottom}`}>
                <h2>Mis valores</h2>
                <div className={`${grid} ${grid_top}`}>
                    <ValueCard
                        image='f1.png'
                        title='Compromiso'
                        text='No considero mi trabajo un acto obligatorio que debo realizar, sino una actividad personal que me permite mejorar día a día.'
                    />
                    <ValueCard
                        image='f2.png'
                        title='Motivación'
                        text='Realizo mi trabajo con mucha pasión porque me emociona cuando un paciente se rehabilita por completo.'
                    />
                    <ValueCard
                        image='f3.png'
                        title='Empatia'
                        text='Siempre estoy consciente sobre los sentimientos y deseos de mis pacientes.'
                    />
                </div>
            </div>

            <div className={`${grid} ${mg_bottom}`}>
                <div className={objective}>
                    <h2>Mi objetivo</h2>
                    <p>Mi objetivo principal es el crecimiento profesional, mediante constantes capacitaciones, especializaciones y experiencias, tanto en Fisioterapia como en Medicína. Todo con la finalidad de poder aplicar estos conocimientos y técnicas en beneficio de los pacientes.</p>
                </div>

                <Lottie
                    animationData={doctorLottie}
                    className={lottie}
                    loop={true}
                    autoplay={true}
                />
            </div>


            <Services />
            <ContactBox />
        </main>
    );
}

export default sobreMi;