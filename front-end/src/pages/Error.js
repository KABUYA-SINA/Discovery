import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import {motion} from 'framer-motion';
import '../sass/pages/_error.scss';


function Error () {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/', {replace: true});
   }
    return (
        <motion.div
            className='top-parent'
            initial={{translateY: -50, opacity: 0}}
            animate={{translateY: 0, opacity: 1}}
            transition={{duration: .4, delay: .2, ease: "easeInOut" , translateY:{type: "spring",
                damping: 5,
                stiffness: 50,
                restSpeed: 0.5,
                restDelta: 0.001}}
            }
            >
            <div className='content'>
                <Header />
                <main>
                    <Banner />
                    <div className='main-error'>
                        <div className='main-error__pages'>
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
        </motion.div>
    );
};

export default Error;