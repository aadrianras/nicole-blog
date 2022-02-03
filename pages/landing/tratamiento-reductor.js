/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FacebookShareButton, WhatsappShareButton, } from "react-share";

import {
    container, hero, big_text, icon, hero_content, line, paragraph, subtitle, treatments, treatment, treatment_img, treatment_content, team_c, team_title, team, card, card_content, small, prices_container, prices_content, prices_regular, discount_c, discount_title, discount_prices, prices_regular_title, discount_bg, contact_c, contact_content, contact_info, map_c, button
} from './tratamiento-reductor.module.css';



const ReductorTreatment = () => {
    const [baseUrl, setBaseUrl] = useState('');
    useEffect(() => typeof window !== 'undefined' ? setBaseUrl(window.location.host) : null, []);
    const router = useRouter();
    const shareUrl = `${baseUrl}${router.pathname}`;

    return (
        <div className={container}>
            <Head>
                <title>Promoción para reducir la grasa acumulada - Nicole Azurduy</title>
                <meta property="og:url" content="nicoleazurduy.com" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="465134355201418" />
                {/* <meta property="fb:app_id" content="your fb id" /> */}
                <meta property="og:title" content='Aprovecha nuestra promoción para reducir grasa acumulada.' />
                <meta
                    property="og:description"
                    content="Ofrecemos un tratamiento completo para reducir esa acumulación de grasa que tanto te cuesta eliminar y asi llegar a la figura que tanto deseas. Con este tratamiento es posible reducir entre 5 a 10 centímetros en el área abdominal en 1 mes."
                />
                <meta property="og:image" content='https://res.cloudinary.com/holos73/image/upload/v1643907459/forLandings/reduccion_fb_dnfgu0.jpg' />
                <meta property="og:image:alt" content='Despídete de los rollitos' />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="1080" />
            </Head>

            <div className={hero}>
                <h1 className={big_text}>Alcanzar tus metas es posible</h1>
                <div className={hero_content}>
                    <p>Comparte en</p>
                    <WhatsappShareButton url={shareUrl}>
                        <FontAwesomeIcon className={icon} icon={faWhatsapp} />
                    </WhatsappShareButton>
                    <FacebookShareButton url={shareUrl} >
                        <FontAwesomeIcon className={icon} icon={faFacebookSquare} />
                    </FacebookShareButton>
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
                        <p>Eliminan la acumulación de grasa localizada y estiliza el contorno de tu figura, es decir, forma una figura más estética. Esta tratamiento se basa en la aplicación de cremas termicas y criogénicas, además de masajes con presión que generan calor sobre los tejidos ayudando a disolver la grasa corporal que se desea eliminar durante la sesión. Los resultados son visible entre la tercera a quinta sesión.</p>
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
                                <p className={small}>&quot; Que la belleza sea consecuencia de tu buena salud.&quot;</p>
                            </div>
                        </div>
                        <div className={card}>
                            <div className={card_content}>
                                <h3>Lic. Mauricio Alave</h3>
                                <p className={small}>Fisioterapeuta y Kinesiologo</p>
                                <p className={small}>&quot;La única persona a la que puedes cambiar eres tu mismo.&quot;</p>
                            </div>
                            <img src='/images/mauricio.jpg' alt='Nicole Azurduy' />
                        </div>
                    </div>
                </div>

                <div className={prices_container}>
                    <h2>Precios</h2>
                    <div className={prices_content}>
                        <div className={prices_regular}>
                            <div>
                                <h4 className={prices_regular_title}>Sesión</h4>
                                <p>Precio regular</p>
                            </div>
                            <p>Bs. 150</p>
                            <p>Tratamiento de masajes reductores y electroestimulación</p>
                        </div>

                        <div className={prices_regular}>
                            <div>
                                <h4 className={prices_regular_title}>Tratamiento completo</h4>
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

                        <div className={discount_bg}>
                            <div className={discount_c}>
                                <h4 className={discount_title}>Promoción</h4>
                                <div className={discount_prices}>
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
                        </div>
                    </div>
                </div>

                <div className={contact_c}>
                    <h2>Contacto</h2>
                    <div className={contact_content}>
                        <div className={contact_info}>
                            <p><b>Dirección:</b></p>
                            <p>Oficina 3 - Piso 8</p>
                            <p>San Miguel</p>
                            <p>Edificio Centro Comercial Monroy y Velez # 8350</p>
                            <br />
                            <p><b>Contacto:</b></p>

                            <a
                                className={button}
                                href="https://wa.me/+59178916557"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <span>78916557</span>
                            </a>

                            <a
                                className={button}
                                href="https://wa.me/+59176536268"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <span>76536268</span>
                            </a>
                        </div>
                        <div className={map_c}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.7129280853162!2d-68.07746273475776!3d-16.54248475567715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21131fdcbe63%3A0x7efd00803d883f20!2sEdif.%20Monroy%20y%20velez!5e0!3m2!1sen!2sbo!4v1643825458108!5m2!1sen!2sbo" width="100%" height="300" style={{ border: 0 }} allowFullScreen={false} loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReductorTreatment;