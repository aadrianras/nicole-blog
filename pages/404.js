import Link from "next/link";
import { container } from './404.module.css';

const Page404 = () => {
    return (
        <div className={container}>
            <h1>Error 404</h1>
            <h2>Oops... no pudimos encontrar lo que buscas</h2>
            <Link href='/'>
                <a>
                    Ir al inicio
                </a>
            </Link>
        </div>
    );
}

export default Page404;