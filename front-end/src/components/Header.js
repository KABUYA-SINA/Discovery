import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import '../sass/layout/_header.scss';
import '../sass/base/_header_typography.scss';

const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <img src={Logo} alt="logo de l'agence discovery" />
            </Link>
            <nav>
                <ul>
                    <NavLink href='../pages/Connect.js' to='/connect'>
                        <li className='first-child'>Login</li>
                    </NavLink>
                    <NavLink href='../pages/About.js' to="/about">
                        <li className='second-child'>About</li>
                    </NavLink>
                </ul>
            </nav>

        </header>
    )
}

export default Header