/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ButtonLinkAnimation from '../components/buttons/ButtonLinkAnimation';
import BlogPostCard from '../components/cards/BlogPostCard';
import ContactBox from '../components/contact/ContactBox';
import Testimonials from '../components/testimonials/Testimonials';
import Services from '../components/services/Services';
import Step from '../components/cards/Step';

import { container, header_s, phrase, whatsapp, greeting, about, nicole_bg, nicole, how_info, title, blog_info, blog_grid, grid, grid_steps, mg, max_width, map_c, contact_c, contact_content, contact_info } from './index.module.css';

const index = ({ data: { clientsOpinion, posts } }) => {
  return (
    <div className={container}>

      {/* SEO */}
      <NextSeo
        title="Fisioterapeuta Nicole Azurduy | Inicio"
        description="Página oficial de la profesional en fisioterapia y kinesiología Nicole Azurduy. Ubicada en la ciudad de La Paz, Bolivia."
        canonical="https://www.nicoleazurduy.com/"
        openGraph={{
          url: 'https://www.nicoleazurduy.com/',
          title: 'Fisioterapeuta Nicole Azurduy | Inicio',
          description: 'Página oficial de la profesional en fisioterapia y kinesiología Nicole Azurduy. Ubicada en la ciudad de La Paz, Bolivia.',
          images: [
            {
              url: 'https://www.nicoleazurduy.com/images/website-card.jpg',
              width: 800,
              height: 418,
              alt: 'Fisioterapeuta Nicole Azurduy',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Fisioterapeuta Nicole Azurduy',
        }}
      />


      <header className={header_s}>
        <p className={phrase}>La felicidad y el bienestar empiezan con una buena salud.</p>
        <a
          className={whatsapp}
          href='https://wa.me/+59178916557'
          target='_blank'
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          Haz una cita
        </a>
      </header>
      {/* <HomeHero /> This component has an animated background*/}

      <div className={greeting}>
        <h2>¡Hola! Qué bueno que estes aquí.</h2>
        <p>Te doy la bienvenida a mi consultorio virtual de Fisioterapia. Si deseas conocer mi información personal y profesional puedes visitar la página "Sobre mí". Por otra parte, si deseas conocer sobre mi trabajo puedes visitar la página "Servicios". Además, en la página "Blog" encontrarás artículos que podrían ayudarte a resolver alguna duda. Finalmente, si no encuentras lo que estas buscando no dudes en contactarme y te ayudare con mucho gusto.</p>
      </div>


      <div className={`${grid} ${mg} ${max_width}`}>
        <div className={nicole_bg}>
          <img className={nicole} src='/images/nicole.jpg' alt='Nicole Azurduy Fisioterapeuta' />
        </div>
        <div className={about}>
          <h3>Mi pasión es ayudar</h3>
          <p>Para mi cada paciente y su familia son especiales y tienen necesidades únicas. Por lo tanto, los planes de tratamiento son diseñados de manera personalizada, basado en diferentes técnicas profesionales que permiten obtener resultados en el menor plazo posible mientras se genera bienestar y calidad de vida.</p>
          <ButtonLinkAnimation text={'Ir a Sobre Mí'} toURL={'/sobre-mi'} />
        </div>
      </div>


      <div className={`${mg} ${max_width}`}>
        <div className={how_info}>
          <h3>¿Cómo trabajo?</h3>
          <p>Usualmente sigo estos tres pasos al atender a un paciente.</p>
        </div>
        <div className={`${grid} ${grid_steps}`}>
          <Step
            image='step1.png'
            alt='Evaluación del paciente'
            number='1.'
            title='Evaluación del paciente'
            desc='Realizo una exploración física general para determinar si existen alteraciones y el grado de las mismas.'
          />
          <Step
            image='step2.png'
            alt='Planificación del tratamiento'
            number='2.'
            title='Planificación del tratamiento'
            desc='Cada paciente es un ser único, por lo tanto, planifico un tratamiento efectivo a corto, mediano y largo plazo que se adapte a sus necesidades.'
          />
          <Step
            image='step3.png'
            alt='Rehabilitación del paciente'
            number='3.'
            title='Rehabilitación del paciente'
            desc='Realizo las sesiones planificadas, en cada una de ellas hago una evaluación de progreso para reestructurar el tratamiento si es necesario.'
          />
        </div>
      </div>


      <Services />


      <div className={`${mg} ${max_width}`}>
        <div className={title}>
          <h3>Blog</h3>
          <p className={blog_info}>Estos son mis últimos artículos.</p>
        </div>
        {
          posts.length > 0
            ?
            <div className={blog_grid}>
              {posts.map(post => <BlogPostCard post={post} key={post.id} />)}
            </div>
            :
            <p>Oops... No encontramos los artículos, intentalos mas tarde por favor.</p>
        }
      </div>


      <Testimonials clientsOpinion={clientsOpinion} />

      <div className={contact_c}>
        <h3>Consultorio</h3>
        <div className={contact_content}>
          <div className={contact_info}>
            <p><b>Dirección:</b></p>
            <p>Oficina 3 - Piso 8</p>
            <p>San Miguel</p>
            <p>Edificio Centro Comercial Monroy y Velez # 8350</p>
            <br />
          </div>
          <div className={map_c}>
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.7129280853162!2d-68.07746273475776!3d-16.54248475567715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21131fdcbe63%3A0x7efd00803d883f20!2sEdif.%20Monroy%20y%20velez!5e0!3m2!1sen!2sbo!4v1643825458108!5m2!1sen!2sbo" width="100%" height="300" style={{ border: 0 }} allowFullScreen={false} loading="lazy"></iframe>
          </div>
        </div >
      </div >

      < ContactBox />


    </div >
  );
}

export const getStaticProps = async (ctx) => {

  const clientsOpinion = [
    {
      name: 'Roberto Aguilar G.',
      picture: 'roberto.jpg',
      testimonial: 'Excelente profesional, obtuvimos los resultados deseados en el tiempo acordado. Totalmente recomendada.',
    },
    {
      name: 'Gabriela Carranza S.',
      picture: 'gaby.jpg',
      testimonial: 'Llevo un tiempo realizando la terapia y siento que me ha ayudado mucho para poder realizar mis actividades diarias y ser mas independiente, ahora siento mucha más seguridad al caminar.',
    },
    {
      name: 'Eduardo Blanco',
      picture: 'eduardo.jpg',
      testimonial: 'Antes de los tratamientos y los ejercicios no soportaba el dolor. Ahora puedo decir que siento paz nuevamente. Gracias doctorita!',
    },
    {
      name: 'Gabriela Azurduy A.',
      picture: 'gabriela.jpg',
      testimonial: 'Gracias a Nicole ahora me veo mejor y me siento mucho mejor con relación a mi postura y dolor lumbar.',
    },
    {
      name: 'Daro Venegas V.',
      picture: 'daro.jpg',
      testimonial: 'El dolor de espalda que tenia era insoportable, no me permitia realizar mis actividades cotidianas. La licenciada no solo alivio mi dolor de espalda sino que mejoro mi postura y ahora me veo mucho mejor.',
    }

  ];

  try {
    const res1 = await fetch(`${process.env.BASE_API_URL}/nicole-blog/post/pagination?offset=0&limit=3`);
    const posts = await res1.json();

    return {
      props: {
        data: {
          clientsOpinion,
          posts: posts.posts
        }
      }
    }
  } catch (error) {
    return {
      props: {
        data: {
          clientsOpinion,
          posts: []
        }
      }
    }
  }
}

export default index;