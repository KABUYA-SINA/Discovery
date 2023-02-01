import React from 'react';
import {useNavigate} from 'react-router-dom';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import '../sass/pages/_error.scss';




function Error () {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/', {replace: true});
   }
    return (
        <div className='parent'>
            <div className='content'>
                <Header />
                <main>
                    <Banner />
                    <div className='top-parent__modifications'>
                        <div className='main-error main-about'>
                                <h1>404</h1>
                                <p>
                                    Oups! This is not the web page you are lookinf for.
                                </p>
                                <a href='/' onClick={handleClick}>
                                    <span className='btn-error'> Please return to Home page</span>
                                </a>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Error;