import { useState } from 'react';
import '../sass/pages/_text.scss'

function Text ({title, comment})  {
    const [text, setText ] = useState(true)
    const TextTitle = title ?(<h2>{title}</h2>) : ''
    return (
        <div className='text'>
            {text && TextTitle}
            <p>{ comment }</p>
        </div>
    );
};

export default Text;