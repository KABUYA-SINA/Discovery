import React from 'react';
import {motion} from 'framer-motion';

function Singlepage  () {
    return (
        <motion.div 
            className=''
            initial={{translateY: -50, opacity: 0}}
            animate={{translateY: 0, opacity: 1}}
            transition={{duration: .5, delay: .2, ease: "easeInOut" , translateY:{type: "spring",
                damping: 5,
                stiffness: 50,
                restSpeed: 0.5,
                restDelta: 0.001}}
            }
            >
            
        </motion.div>
    );
};

export default Singlepage;