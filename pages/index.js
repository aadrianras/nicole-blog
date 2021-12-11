/* eslint-disable @next/next/no-img-element */
import ButtonLinkAnimation from '../components/buttons/ButtonLinkAnimation';
import BlogPostCard from '../components/cards/BlogPostCard';
import Step from '../components/cards/Step';
import ContactBox from '../components/contact/ContactBox';

import { container, header_s, phrase, whatsapp, greeting, about_c, about, nicole_bg, nicole, how, how_info, how_steps, services_c, services, hand_up, title, blog_c, blog_info, blog_cards, testimonials_c } from './index.module.css';

const index = () => {
  return (
    <div className={container}>


      <header className={header_s}>
        <p className={phrase}>Mantener una buena salud debería ser el objetivo principal de todos nosotros.
        </p>
        <a className={whatsapp} href='https://wa.me/+59178916557' target='_blank' rel="noreferrer">Haz una cita</a>
      </header>


      <div className={greeting}>
        <h2>¡Hola! Que bueno que estes aquí.</h2>
        <p>Qui magna cillum irure amet culpa deserunt excepteur magna nostrud esse voluptate labore quis. Eiusmod ut nulla consequat irure est. Tempor pariatur commodo ex irure culpa ad officia laborum irure incididunt commodo velit adipisicing. Id fugiat enim irure fugiat nulla excepteur minim nisi.</p>
      </div>


      <div className={about_c}>
        <div className={nicole_bg}>
          <img className={nicole} src='/images/nicole.png' alt='Nicole Azurduy Fisioterapeuta' />
        </div>
        <div className={about}>
          <h3>Mi pasión es ayudar</h3>
          <p>Qui magna cillum irure amet culpa deserunt excepteur magna nostrud esse voluptate labore quis. Eiusmod ut nulla consequat irure est. Tempor pariatur commodo ex irure culpa ad officia laborum irure incididunt commodo velit adipisicing. Id fugiat enim irure fugiat nulla excepteur minim nisi.</p>
          <ButtonLinkAnimation text={'Conóceme'} toURL={'/'} />
        </div>
      </div>


      <div className={how}>
        <div className={how_info}>
          <h4>¿Cómo trabajo?</h4>
          <p>Dolor qui duis Lorem labore velit.</p>
        </div>
        <div className={how_steps}>
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


      <div className={services_c}>
        <div className={hand_up}></div>
        <div className={services}>
          <h3>¿Qué servicios ofrezco?</h3>
          <p>Amet laborum amet minim minim magna proident elit do. Non officia sunt ex nulla id. Officia labore proident culpa excepteur ea culpa amet anim pariatur ut incididunt qui. Cupidatat anim incididunt cillum fugiat tempor voluptate fugiat cillum consequat. Eiusmod nulla aliqua ipsum amet occaecat aliquip proident sunt commodo ullamco minim enim.</p>
          <ButtonLinkAnimation text={'Más información'} toURL={'/'} />
        </div>
      </div>


      <div className={blog_c}>
        <div className={title}>
          <h3>Blog</h3>
          <p className={blog_info}>Elit consectetur dolore nostrud duis reprehenderit.</p>
        </div>
        <div className={blog_cards}>
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


      <div className={testimonials_c}>
        <div className={title}>
          <h3>Testimonios</h3>
          <p>Officia exercitation dolor aute velit ex commodo sit voluptate aliquip.</p>
        </div>
        {/* Slider here */}
      </div>


      <ContactBox />
    </div>
  );
}

export const getStaticProps = async (ctx) => {


  return {
    props: {
      data: null
    }
  }
}

export default index;