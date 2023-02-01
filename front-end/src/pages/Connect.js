import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer'

import '../sass/pages/_connect.scss'

function connect () {
    return (
        <React.Fragment>
            <div className='connect'>
                <Header />
                <main>
                    <Banner />
                    <div className='top-parent__modifications'>
                        <div className='main-connect main-parent'>
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
                    </div>
                </main>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default connect;