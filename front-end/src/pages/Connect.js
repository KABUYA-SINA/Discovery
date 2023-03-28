import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import {motion} from 'framer-motion';
import '../sass/pages/_connect.scss';

function connect () {
    return (
        <React.Fragment>
            <motion.div
                className='connect'
                initial={{translateY: -50, opacity: 0}}
                animate={{translateY: 0, opacity: 1}}
                transition={{duration: .5, delay: .2, ease: "easeInOut" , translateY:{type: "spring",
                    damping: 5,
                    stiffness: 50,
                    restSpeed: 0.5,
                    restDelta: 0.001}}
                }
                >
                <Header />
                <main>
                    <Banner />
                    <div className='main-connect'>
                        <div className='connect-boxes'>
                            <Link  to={'/login'}>
                                <span className='btn-connect'>LOGIN</span>
                            </Link>
                            <p>OR</p>
                                <Link  to={'/signup'}>
                                <span className='btn-connect'>SIGNUP</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </motion.div>
            <Footer />
        </React.Fragment>
    );
};

export default connect;