import React from 'react';
import BannerIntroduction from './BannerIntroduction';
import { bannerList } from '../datas/bannerList';
import '../sass/pages/_banner.scss'
import Slider from './Slider';



function Banner(){
    return(
        <div className='banner-parent'>
            <BannerIntroduction />
            <Slider images={bannerList} />
        </div>
    )
}

export default Banner;