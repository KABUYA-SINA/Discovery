import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer'
import '../../sass/pages/auth/_signup.scss'




function signup () {
    return (
        <React.Fragment>
            <div className='parent-connect'>
                <Header />
                <main>
                    <Banner />
                     <div className='top-parent'>
                        <div className='login-signup'>
                            <div className='connect-boxes'>
                                <form action='' >
                                    <h2>SIGNUP</h2>
                                    <input type="text" name="username" placeholder="Username" required />
                                    <input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Email"  required />
                                    <input type="password" name="password" placeholder="Password" required />
                                    <input type="submit" className='btn-signup' value="Signup" />
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

export default signup;