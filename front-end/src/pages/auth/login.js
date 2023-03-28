import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import {motion} from 'framer-motion';
import '../../sass/pages/auth/_login.scss'

function login () {
    return (
        <React.Fragment>
            <motion.div
                className='login-content'
                initial={{width: 0}}
                animate={{width: '100%'}}
                exit={{x: window.innerWidth, transition:{ duration: 0.3}}}
                >
                <Header />
                <main>
                    <Banner />
                    <div className='top-parent'>
                        <div className='login-signup'>
                            <div className='connect-boxes'>
                                <form action='' >
                                    <h2>LOGIN</h2>
                                    <input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Email"  required />
                                    <input type="password" name="password" placeholder="Password" required />
                                    <input type="submit" className='btn-login' value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </motion.div>
            <Footer />
        </React.Fragment>
    );
};

export default login;