
import { container, logo, menu } from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={container}>
            <h2 className={logo}>Nicole Azurduy</h2>
            <p>Menu</p>
        </nav>
    );
}

export default NavBar;