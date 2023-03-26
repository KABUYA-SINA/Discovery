import React from 'react';
import BannerIntroduction from './BannerIntroduction';
import { bannerList } from '../datas/bannerList';
import Slider from './Slider';
import '../sass/pages/_banner.scss';




function Banner(){
    return(
        <div className='banner-parent'>
            <BannerIntroduction />
            <Slider images={bannerList} />
        </div>
    )
}

export default Banner;