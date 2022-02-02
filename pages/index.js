/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import ButtonLinkAnimation from '../components/buttons/ButtonLinkAnimation';
import BlogPostCard from '../components/cards/BlogPostCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Step from '../components/cards/Step';
import ContactBox from '../components/contact/ContactBox';
import Testimonials from '../components/testimonials/Testimonials';
import Services from '../components/services/Services';
import HomeHero from '../components/Heros/HomeHero';

import { container, header_s, phrase, whatsapp, greeting, about, nicole_bg, nicole, how, how_info, title, blog_c, blog_info, grid, grid_steps, mg, max_width } from './index.module.css';

const index = ({ data: { clientsOpinion } }) => {
  return (
    <div className={container}>


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
        <h2>¡Hola! Que bueno que estes aquí.</h2>
        <p>Te doy la bienvenida a mi consultorio virtual de Fisioterapia. Si deseas conocer mi información personal y profesional puedes visitar la página "Sobre mí". Por otra parte, si deseas conocer sobre mi trabajo puedes visitar la página "Servicios". Además, en la página "Blog" encontrarás artículos que podrían ayudarte a resolver alguna duda. Finalmente, si no encuentras lo que estas buscando no dudes en contactarme y te ayudare con mucho gusto.</p>
      </div>


      <div className={`${grid} ${mg} ${max_width}`}>
        <div className={nicole_bg}>
          <img className={nicole} src='/images/nicole.jpg' alt='Nicole Azurduy Fisioterapeuta' />
        </div>
        <div className={about}>
          <h3>Mi pasión es ayudar</h3>
          <p>Para mi cada paciente y su familia son especiales y tienen necesidades unicas. Por lo tanto, los planes de tratamiento son diseñados de manera personalizada, basado en diferentes técnicas profesionales que permiten obtener resultados en el menor plazo posible mientras se genera bienestar y calidad de vida.</p>
          <ButtonLinkAnimation text={'Conóceme'} toURL={'/sobre-mi'} />
        </div>
      </div>


      <div className={`${how} ${mg} ${max_width}`}>
        <div className={how_info}>
          <h4>¿Cómo trabajo?</h4>
          <p>Usualmente sigo estos tres pasos al atender a un paciente.</p>
        </div>
        <div className={`${grid} ${grid_steps}`}>
          <Step
            image='step1.png'
            alt='Evaluación del paciente'
            number='1.'
            title='Evaluación del paciente'
            desc='Realizo una exploración fisica general para determinar si existen alteraciones y el grado de las mismas.'
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

      {/* 
      <div className={`${blog_c} ${mg} ${max_width}`}>
        <div className={title}>
          <h3>Blog</h3>
          <p className={blog_info}>Elit consectetur dolore nostrud duis reprehenderit.</p>
        </div>
        <div className={grid}>
           We should slice the summary (This line is a commentary)
          <BlogPostCard
            title='Secuela del COVID-19 en la respiración y ejercicios para realizar en casa'
            summary='Irure nulla laborum voluptate proident sit cupidatat fugiat ipsum nulla ullamco mollit et magna. Occaecat aute quis qui ea adipisicing eiusmod consectetur cupidatat consequat. Esse quis pariatur et laborum reprehenderit ad ut ex laboris ad incididunt consectetur aute. Ullamco dolore culpa commodo dolore mollit mollit incididunt sint ut esse do non ex. Incididunt mollit officia tempor ad enim ea esse. Exercitation sunt aliquip incididunt ea deserunt minim non velit dolor sunt do.'
          />
          <BlogPostCard
            title='Secuela del COVID-19 en la respiración y ejercicios para realizar en casa'
            summary='Irure nulla laborum voluptate proident sit cupidatat fugiat ipsum nulla ullamco mollit et magna. Occaecat aute quis qui ea adipisicing eiusmod consectetur cupidatat consequat. Esse quis pariatur et laborum reprehenderit ad ut ex laboris ad incididunt consectetur aute. Ullamco dolore culpa commodo dolore mollit mollit incididunt sint ut esse do non ex. Incididunt mollit officia tempor ad enim ea esse. Exercitation sunt aliquip incididunt ea deserunt minim non velit dolor sunt do.'
          />
          <BlogPostCard
            title='Secuela del COVID-19 en la respiración y ejercicios para realizar en casa'
            summary='Irure nulla laborum voluptate proident sit cupidatat fugiat ipsum nulla ullamco mollit et magna. Occaecat aute quis qui ea adipisicing eiusmod consectetur cupidatat consequat. Esse quis pariatur et laborum reprehenderit ad ut ex laboris ad incididunt consectetur aute. Ullamco dolore culpa commodo dolore mollit mollit incididunt sint ut esse do non ex. Incididunt mollit officia tempor ad enim ea esse. Exercitation sunt aliquip incididunt ea deserunt minim non velit dolor sunt do.'
          />
        </div>
      </div> 
    */}


      <Testimonials clientsOpinion={clientsOpinion} />
      <ContactBox />
    </div>
  );
}

export const getStaticProps = async (ctx) => {

  const clientsOpinion = [
    {
      name: 'Roberto Aguilar G.',
      picture: 'roberto.jpg',
      testimonial: 'Cillum occaecat incididunt cupidatat fugiat occaecat proident culpa excepteur ut sunt sunt irure ut. Aliquip minim aute enim ex. Sunt cillum ipsum minim est dolor. Nisi proident qui laboris exercitation laboris do dolore aliquip. Occaecat fugiat aliqua anim culpa ea et duis reprehenderit.',
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

  ]

  return {
    props: {
      data: {
        clientsOpinion
      }
    }
  }
}

export default index;