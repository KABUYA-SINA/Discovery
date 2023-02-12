import React from 'react';
import { bannerList } from '../datas/bannerList';
import { useState  } from 'react';
import '../sass/pages/_banner.scss'

function BannerImage ()  {
    const [ bannerlist, setBannerList ] = useState(bannerList);
    return (
        <div className='banner-parent'>
            <div className='banner-first__childs'>
                <div className='first-child'>
                    <img src={ bannerlist[1].image} alt={bannerList[1].alt} />
                </div>
                <div className='second-child'>
                    <img src={ bannerlist[0].image} alt={bannerList[0].alt} />
                </div>
            </div>
            <div className='banner-seond__childs'>
                <div className='third-child'>
                    <img src={ bannerlist[2].image} alt={bannerList[2].alt} />
                </div>
                <div className='fourth-child'>
                    <img src={ bannerlist[3].image} alt={bannerList[3].alt} />
                </div>
            </div>
            <button className='btn'>FEATURED POSTS</button>
        </div>
    );
};

export default BannerImage;