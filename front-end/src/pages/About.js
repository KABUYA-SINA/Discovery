import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import '../sass/pages/_about.scss'

function About ()  {
    return (
        <React.Fragment>
            <div className='content'>
                <Header />
                <main>
                    <Banner />
                    <div className='top-parent__modifications'>
                        <div className='main-about'>
                            <h2>ABOUT US</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima doloremque incidunt. Iste aspernatur voluptatibus velit? Quae, enim similique, non corrupti itaque quidem repudiandae provident nemo quasi, perferendis fugit. Odio perferendis facere minima exercitationem consequatur laudantium nulla voluptas ut eius deserunt, quas reprehenderit, a atque voluptatem doloremque ad, tenetur mollitia animi quidem! Debitis sit minus minima eum architecto est reprehenderit ipsum iure corporis, assumenda optio, alias facilis iusto id pariatur, saepe quibusdam distinctio quam quia fugit deserunt? Tempore, praesentium doloribus 
                                netc
                                aliquam ab dolores dolorum omnis accusamus quam. Cum sunt nisi quisquam voluptas ipsa vitae eos soluta, maxime quod sapiente fugit!</p>
                                <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima doloremque incidunt. Iste aspernatur voluptatibus velit? Quae, enim similique, non corrupti itaque quidem repudiandae provident nemo quasi, perferendis fugit. Odio perferendis facere minima exercitationem consequatur laudantium nulla voluptas ut eius deserunt, quas reprehenderit, a atque voluptatem doloremque ad, tenetur mollitia animi quidem! Debitis sit minus minima eum architecto est reprehenderit ipsum iure corporis, assumenda optio, alias facilis iusto id pariatur, saepe quibusdam distinctio quam quia fugit deserunt? Tempore, praesentium doloribus 
                                netc
                                aliquam ab dolores dolorum omnis accusamus quam. Cum sunt nisi quisquam voluptas ipsa vitae eos soluta, maxime quod sapiente fugit!</p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default About;