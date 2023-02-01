import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../sass/pages/_error.scss';

function ErrorBoundary  () {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate.push('/')
   }
    return (
         <div className='parent'>
            <div className='content'>
                <main>
                    <div className='top-parent__modifications'>
                        <div className='main-error main-about'>
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
        </div>
    );
};

export default ErrorBoundary;