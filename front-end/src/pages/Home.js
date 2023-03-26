import React from 'react';
import {motion} from 'framer-motion';

function Home () {
    return (
        <motion.div 
            className=''
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            
        </motion.div>
    );
};

export default Home;