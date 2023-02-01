import React from 'react';
import { useState } from 'react';

function Text  ( { title, comment })  {
    const [ text, setText ] = useState(true)
    const AllText = (<div className='text'><h2>{ title }</h2> <p>{ comment }</p></div>)
    return (
        <React.Fragment>
            { text && AllText}
        </React.Fragment>
    );
};

export default Text;