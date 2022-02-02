/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { container, hero, big_text, icon, hero_content, line, paragraph, subtitle, treatments, treatment, treatment_img, treatment_content, team_c, team_title, team, card, card_content, small } from './tratamiento-reductor.module.css';



const reductorTreatment = () => {
    return (
        <div className={container}>
            <div className={hero}>
                <h1 className={big_text}>Alcanzar tus metas es posible</h1>
                <div className={hero_content}>
                    <p>Comparte en</p>
                    <FontAwesomeIcon className={icon} icon={faWhatsapp} />
                    <FontAwesomeIcon className={icon} icon={faFacebookSquare} />
                    <div className={line}></div>
                </div>
            </div>

            <div className={paragraph}>
                <h2 className={subtitle}>Cambiemos la forma en la que cuidas tu figura</h2>
                <p>Ofrecemos un tratamiento completo para reducir esa acumulación de grasa que tanto te cuesta eliminar y asi llegar a la figura que tanto deseas. Con este tratamiento es posible reducir entre 5 a 10 centímetros en el área abdominal en 1 mes.</p>
            </div>

            <div className={treatments}>
                <h2>¿Qué técnicas utilizamos?</h2>
                <div className={treatment}>
                    <div className={treatment_img}>
                        <img src='/images/landings/r1.jpg' alt='Electroestimulación' />
                    </div>
                    <div className={treatment_content}>
                        <h2>Electro - Estimulación</h2>
                        <p>Esta técnica es utilizada en el ámbito del fitness y estética. Esta técnica utiliza equipos que emiten impulsos eléctricos que cuando son enfocados en la zona abdominal remueven los adipocitos y ayudan al fortalecimiento de la musculatura abdominal.</p>
                        <p>Cada tratamiento dura entre 15 a 20 minutos.</p>
                    </div>
                </div>
                <div className={treatment}>
                    <div className={treatment_img}>
                        <img src='/images/landings/r3.jpg' alt='Masajes reductores' />
                    </div>
                    <div className={treatment_content}>
                        <h2>Masajes Reductores</h2>
                        <p>Eliminan la acumulación de grasa localizada y estiliza el contorno de tu figura, es decir, forma una figura más estética. Esta tratamiento se basa en la aplicación de presión que genera calor sobre los tejidos ayudando a disolver la grasa corporal que se desea eliminar durante la sesión. Los resultados son visible entre la tercera a quinta sesión.</p>
                        <p>Cada tratamiento dura entre 40 a 45 minutos.</p>
                    </div>
                </div>
                <div className={treatment}>
                    <div className={treatment_img}>
                        <img src='/images/landings/r4.jpg' alt='Mesoterapia Fitness' />
                    </div>
                    <div className={treatment_content}>
                        <h2>Mesoterapia Fitness</h2>
                        <p>Consite en la aplicación de inyecciones de pequeñas cantidades de fármacos, extractos naturales y/o vitaminas en la zona abdominal. Estos compuestos disuelven los adipocitos que generan la grasa abdominal.</p>
                        <p>Cada tratamiento se basa en una ampolla del compuesto. En nuestro caso, el compuesto es Lipostabil.</p>
                    </div>
                </div>
                <div className={treatment}>
                    <div className={treatment_img}>
                        <img src='/images/landings/r2.jpg' alt='Maderoterapia' />
                    </div>
                    <div className={treatment_content}>
                        <h2>Maderoterapia</h2>
                        <p>Esta técnica se distingue por ser intensa y efectiva. La maderoterapia utiliza herramientas de madera con las que se aplica un masaje profundo al área abdominal para tonificar y eliminar la grasa.</p>
                        <p>El tratamiento dura entre 40 a 45 minutos.</p>
                    </div>
                </div>

                <div className={paragraph}>
                    <h2 className={subtitle}>¿Para qué problemas son efectivos?</h2>
                    <p>Todos los tratamientos anteriormente mencionados son utilizados para:
                        Eliminar la acumulación de grasa en los tejidos, disminuir la celulítis, reafirmar y rejuvener de la piel, y mejorar el flujo sanguíneo.</p>
                </div>

                <div className={team_c}>
                    <h2 className={team_title}>Equipo</h2>
                    <div className={team}>
                        <div className={card}>
                            <img src='/images/nicole2.jpg' alt='Nicole Azurduy' />
                            <div className={card_content}>
                                <h3>Lic. Nicole Azurduy</h3>
                                <p className={small}>Fisioterapeuta y Kinesiologa</p>
                                <p className={small}>Nostrud incididunt in pariatur aute amet culpa qui nulla.</p>
                            </div>
                        </div>
                        <div className={card}>
                            <div className={card_content}>
                                <h3>Lic. Nicole Azurduy</h3>
                                <p className={small}>Fisioterapeuta y Kinesiologa</p>
                                <p className={small}>Nostrud incididunt in pariatur aute amet culpa qui nulla.</p>
                            </div>
                            <img src='/images/mauricio.jpg' alt='Nicole Azurduy' />
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Precios</h2>
                    <div>
                        <div>
                            <div>
                                <h4>Sesión</h4>
                                <p>Precio regular</p>
                            </div>
                            <p>Bs. 150</p>
                            <p>Tratamiento de masajes reductores y electroestimulación</p>
                        </div>
                        <div>
                            <h4>Promociones</h4>
                            <div>
                                <p>1 x Bs.1000</p>
                                <p>2 x Bs.1500</p>
                            </div>
                            <ul>
                                <li>Por persona:</li>
                                <li>8 sesiones de masajes reductores.</li>
                                <li>4 sesiones de mesoterapa fitness con Lipostabil.</li>
                                <li>8 sesiones de electroestimulación.</li>
                                <li>2 sesiones de maderoterapia.</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h4>Tratamiento completo</h4>
                                <p>Precio regular</p>
                            </div>
                            <p>Bs. 1700</p>
                            <ul>
                                <li>Por persona:</li>
                                <li>8 sesiones de masajes reductores.</li>
                                <li>4 sesiones de mesoterapa fitness con Lipostabil.</li>
                                <li>8 sesiones de electroestimulación.</li>
                                <li>2 sesiones de maderoterapia.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Contacto</h2>
                    <div>

                        {/* Map here */}
                        <div>
                            <p><b>Dirección:</b></p>
                            <p>Oficina 3 - Piso 8</p>
                            <p>San Miguel</p>
                            <p>Edificio Centro Comercial Monroy y Velez # 8350</p>
                            <p><b>Contact:</b></p>
                            <p>76536268</p>
                            <p>78916557</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default reductorTreatment;