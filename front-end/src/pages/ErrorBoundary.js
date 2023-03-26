import React from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../sass/pages/_error.scss';

function ErrorBoundary  () {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate.push('/')
   }
    return (
         <motion.div
            className='top-parent'
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition:{ duration: 0.3}}}
            >
            <div className='content'>
                <main>
                    <div className='main-error'>
                        <div className='main-error__pages'>
                                <h1>500</h1>
                                <p>
                                   Something went wrong with the server.
                                </p>
                                <a href='/' onClick={handleClick}>
                                    <span className='btn-error'> Please return to Home page</span>
                                </a>
                        </div>
                    </div>
                </main>
            </div>
        </motion.div>
    );
};

export default ErrorBoundary;