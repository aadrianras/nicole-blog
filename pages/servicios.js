/* eslint-disable @next/next/no-img-element */
import ContactBox from '../components/contact/ContactBox';
import Testimonials from '../components/testimonials/Testimonials';

import { hero, hero_text, common, title, masotherapy, description, kinesitherapy, electrotherapy, respiratory, division } from './servicios.module.css';


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
                <h6 >Los más comunes</h6>
            </div>


            <div className={`${masotherapy}`}>
                <h2 className={title}>Masoterápia</h2>
            </div>
            <p className={description}>Sit officia enim velit dolor culpa et. Eu anim commodo occaecat pariatur irure ipsum ea eiusmod reprehenderit excepteur do ullamco qui. Est esse in eu sunt labore consectetur laboris ipsum ex id labore ipsum commodo esse. Voluptate consectetur commodo fugiat ut laborum sit in culpa dolore ex laboris.</p>


            <div className={`${kinesitherapy}`}>
                <h2 className={title}>Cinesiterapia</h2>
            </div>
            <p className={description}>Laboris in mollit eu duis commodo duis sit magna magna. Esse dolore adipisicing enim qui incididunt incididunt mollit voluptate ea. Pariatur velit culpa pariatur qui ex ex proident ipsum mollit aute sit esse adipisicing. Incididunt consequat sint quis incididunt eu eu. Minim fugiat mollit occaecat mollit anim reprehenderit proident tempor.</p>


            <div className={`${electrotherapy}`}>
                <h2 className={title}>Electroterapia</h2>
            </div>
            <p className={description}>Excepteur exercitation ut fugiat ullamco duis adipisicing reprehenderit tempor. Cupidatat irure amet aliqua laboris est voluptate Lorem laboris in proident voluptate. Aliqua nisi proident elit nisi consectetur sint. Magna dolore elit nulla nisi laborum id quis dolore culpa. Lorem minim id duis sunt aliqua nulla ex eiusmod ut cillum esse. In tempor eiusmod elit commodo elit labore aliqua laborum quis proident incididunt eu reprehenderit. Ea consectetur ea commodo dolor sint adipisicing.</p>


            <div className={`${respiratory}`}>
                <h2 className={title}>Terapia Respiratoria</h2>
            </div>
            <p className={description}>Fugiat magna veniam commodo enim ea fugiat officia nisi nulla cillum. Duis aliqua proident aliquip aute ipsum nulla quis enim reprehenderit esse laboris. Exercitation proident esse anim eiusmod sit voluptate dolor commodo dolore. Nostrud ad laboris velit reprehenderit ex do reprehenderit ex mollit aliquip velit mollit. Veniam dolore reprehenderit incididunt anim nostrud voluptate ullamco est est excepteur. Ipsum consectetur dolore nulla sint fugiat tempor minim do. Lorem mollit minim proident officia excepteur pariatur ad laboris nisi tempor nostrud Lorem consectetur.</p>


            <div className={division}></div>

            <Testimonials clientsOpinion={clientsOpinion} />
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