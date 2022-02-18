import Image from "next/image";
import Link from "next/link";
import ButtonLinkAnimation from "../components/buttons/ButtonLinkAnimation";
import { container, img_c } from './404.module.css';

const Page404 = () => {
    return (
        <div className={container}>
            <div className={img_c}>
                <Image src='/images/f3.png' alt='Flor' layout="fill" objectFit="contain" />
            </div>
            <h1>Error 404</h1>
            <h2>Oops... no pudimos encontrar lo que buscas</h2>
            <ButtonLinkAnimation text='Ir al inicio' toURL='/' />
        </div>
    );
}

export default Page404;