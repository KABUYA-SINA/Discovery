import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer'

import '../../sass/pages/auth/_login.scss'

function login () {
    return (
        <React.Fragment>
            <div className='login-content'>
                <Header />
                <main>
                    <Banner />
                    <div className='top-parent__modifications'>
                        <div className='login-signup main-parent'>
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
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default login;