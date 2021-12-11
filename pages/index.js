/* eslint-disable @next/next/no-img-element */
import ButtonLinkAnimation from '../components/buttons/ButtonLinkAnimation';
import BlogPostCard from '../components/cards/BlogPostCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Step from '../components/cards/Step';
import ContactBox from '../components/contact/ContactBox';
import Testimonials from '../components/testimonials/Testimonials';

import { container, header_s, phrase, whatsapp, greeting, about, nicole_bg, nicole, how, how_info, services_c, services, hand_up, title, blog_c, blog_info, grid, mg, max_width } from './index.module.css';

const index = ({ data: { clientsOpinion } }) => {
  return (
    <div className={container}>


      <header className={header_s}>
        <p className={phrase}>Mantener una buena salud debería ser el objetivo principal de todos nosotros.
        </p>
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


      <div className={greeting}>
        <h2>¡Hola! Que bueno que estes aquí.</h2>
        <p>Qui magna cillum irure amet culpa deserunt excepteur magna nostrud esse voluptate labore quis. Eiusmod ut nulla consequat irure est. Tempor pariatur commodo ex irure culpa ad officia laborum irure incididunt commodo velit adipisicing. Id fugiat enim irure fugiat nulla excepteur minim nisi.</p>
      </div>


      <div className={`${grid} ${mg} ${max_width}`}>
        <div className={nicole_bg}>
          <img className={nicole} src='/images/nicole.jpg' alt='Nicole Azurduy Fisioterapeuta' />
        </div>
        <div className={about}>
          <h3>Mi pasión es ayudar</h3>
          <p>Qui magna cillum irure amet culpa deserunt excepteur magna nostrud esse voluptate labore quis. Eiusmod ut nulla consequat irure est. Tempor pariatur commodo ex irure culpa ad officia laborum irure incididunt commodo velit adipisicing. Id fugiat enim irure fugiat nulla excepteur minim nisi.</p>
          <ButtonLinkAnimation text={'Conóceme'} toURL={'/'} />
        </div>
      </div>


      <div className={`${how} ${mg} ${max_width}`}>
        <div className={how_info}>
          <h4>¿Cómo trabajo?</h4>
          <p>Dolor qui duis Lorem labore velit.</p>
        </div>
        <div className={grid}>
          <Step
            image='step1.png'
            alt='Evaluación fisica'
            number='1.'
            title='Realizo una evaluación'
            desc='Lorem ipsum dolor sit amet consectetur adipiscing elit, laoreet ultrices natoque interdum torquent netus iaculis eu, sollicitudin varius suscipit lob.'
          />
          <Step
            image='step2.png'
            alt='Planifico un tratamiento'
            number='2.'
            title='Planifico un tratamiento'
            desc='Lorem ipsum dolor sit amet consectetur adipiscing elit, laoreet ultrices natoque interdum torquent netus iaculis eu, sollicitudin varius suscipit lob.'
          />
          <Step
            image='step3.png'
            alt='Rehabilito al paciente'
            number='3.'
            title='Rehabilito al paciente'
            desc='Lorem ipsum dolor sit amet consectetur adipiscing elit, laoreet ultrices natoque interdum torquent netus iaculis eu, sollicitudin varius suscipit lob.'
          />
        </div>
      </div>


      <div className={`${services_c} ${mg}`}>
        <div className={hand_up}></div>
        <div className={services}>
          <h3>¿Qué servicios ofrezco?</h3>
          <p>Amet laborum amet minim minim magna proident elit do. Non officia sunt ex nulla id. Officia labore proident culpa excepteur ea culpa amet anim pariatur ut incididunt qui. Cupidatat anim incididunt cillum fugiat tempor voluptate fugiat cillum consequat. Eiusmod nulla aliqua ipsum amet occaecat aliquip proident sunt commodo ullamco minim enim.</p>
          <ButtonLinkAnimation text={'Más información'} toURL={'/'} />
        </div>
      </div>


      <div className={`${blog_c} ${mg} ${max_width}`}>
        <div className={title}>
          <h3>Blog</h3>
          <p className={blog_info}>Elit consectetur dolore nostrud duis reprehenderit.</p>
        </div>
        <div className={grid}>
          {/* We should slice the summary */}
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


      <Testimonials clientsOpinion={clientsOpinion} />
      <ContactBox />
    </div>
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

export default index;