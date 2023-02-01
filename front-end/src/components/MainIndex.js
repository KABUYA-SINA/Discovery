import React from 'react';
import { indexList } from '../datas/indexList';
import { useState } from 'react';
import '../sass/pages/_mainIndex.scss';


const MainIndex = () => {
    const [ indexlist, setIndexList ] = useState(indexList)

    return (
        <div className='top-parent__modifications'>
            <div className='main-parent'>
                {indexlist.map(({ id, name, image, alt, comment}) => (
                    <article className='childs' key={ id + name} ><img src={image} alt={alt} /><span className='span-text'>{comment.toUpperCase()}</span></article>
                ))}
            </div>
        </div>
    );
};

export default MainIndex;