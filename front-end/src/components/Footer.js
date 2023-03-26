import Logo from '../assets/images/logo.png';
import '../sass/layout/_footer.scss';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt='icon de notre agence discovery' />
            <p>©2023 Discovery. All rights reserved - KrisCartel HOUSE</p>
        </footer>
    )
}

export default Footer