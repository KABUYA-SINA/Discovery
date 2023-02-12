import React from 'react';
import BannerIntroduction from './BannerIntroduction';
import BannerImage from './BannerImage';
import '../sass/pages/_banner.scss'


const Banner = ({ firstchild=true, secondchild=false}) => {

    if(firstchild){
       return <BannerIntroduction />
    }else if(!secondchild){
        return <BannerImage />
    }else{
        return (
            <React.Fragment>
                <BannerIntroduction />
                <BannerImage />
            </React.Fragment>
        )
    }
};

export default Banner;