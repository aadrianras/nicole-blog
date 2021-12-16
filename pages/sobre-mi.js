/* eslint-disable @next/next/no-img-element */
import ValueCard from '../components/cards/ValueCard';
import ContactBox from '../components/contact/ContactBox';
import Services from '../components/services/Services';

import { grid, grid_top, mg_bottom, mg_center, greeting, collage, hi, history, hands, values, objective, stethoscope } from './sobre-mi.module.css';

const sobreMi = () => {
    return (
        <main>

            <div className={`${grid} ${greeting} ${mg_bottom}`}>
                <div className={hi}>
                    <h2>¡Hola!</h2>
                    <p>Amet cupidatat non commodo cillum aliqua voluptate eiusmod nostrud deserunt et eiusmod quis Lorem ut. Sit duis exercitation culpa Lorem aute laborum deserunt anim magna id aliquip. Esse magna ex in dolor commodo est excepteur.</p>
                </div>
                <div className={collage}>
                    <img className={mg_center} src='/images/collage.png' alt='Collage Nicole Azurduy Fisioterapeuta' />
                </div>
            </div>


            <div className={`${grid} ${mg_bottom}`}>
                <div className={history}>
                    <h2>Mi historia</h2>
                    <p>Voluptate reprehenderit pariatur laboris sunt magna eiusmod est do cupidatat occaecat nisi enim. Do elit id anim aliqua laborum eu sit laborum velit adipisicing labore esse. Dolore eiusmod exercitation duis cillum qui deserunt commodo eu nisi magna duis mollit. Aute exercitation exercitation exercitation et laboris magna ullamco tempor. Aliquip qui tempor amet occaecat exercitation aliqua ea fugiat velit commodo aliqua velit.</p>
                </div>
                <div className={hands}></div>
            </div>


            <div className={`${values} ${mg_bottom}`}>
                <h2>Mis valores</h2>
                <div className={`${grid} ${grid_top}`}>
                    <ValueCard
                        image='f1.png'
                        title='Profesionalismo'
                        text='Incididunt sunt minim nostrud irure. Id velit nostrud dolor incididunt. Amet ex reprehenderit voluptate nisi do consequat voluptate. Aliqua proident non ex commodo tempor mollit velit amet.'
                    />
                    <ValueCard
                        image='f2.png'
                        title='Honestidad'
                        text='Occaecat do laborum exercitation laborum dolor incididunt culpa in sint laboris veniam laborum amet fugiat. Non ea est deserunt nulla id eu proident. Cillum magna occaecat nostrud ut id dolore irure non esse reprehenderit voluptate. Veniam in irure labore enim est veniam.'
                    />
                    <ValueCard
                        image='f3.png'
                        title='Empatia'
                        text='Occaecat sint commodo officia deserunt nulla. Occaecat cillum adipisicing labore amet ad cillum consectetur consectetur culpa occaecat dolore reprehenderit laboris enim. Anim laboris aliquip esse culpa consectetur ipsum nulla.'
                    />
                </div>
            </div>

            <div className={`${grid}`}>
                <div className={objective}>
                    <h2>Mi objetivo</h2>
                    <p>Reprehenderit qui proident officia officia et veniam do cupidatat adipisicing nostrud commodo ad. Fugiat mollit ullamco pariatur non. Nulla aliqua est consectetur minim aute tempor dolore excepteur non in est. Ex sint aute eu nisi eiusmod id ut adipisicing amet aliqua minim irure. Incididunt ullamco veniam ullamco voluptate fugiat. Ut reprehenderit deserunt nisi mollit ullamco nulla laboris aliqua nulla do officia cillum consectetur culpa.</p>
                </div>
                <img className={`${mg_center} ${stethoscope}`} src='/images/stethoscope.png' alt='Stethoscope' />
            </div>


            <Services />
            <ContactBox />
        </main>
    );
}

export default sobreMi;