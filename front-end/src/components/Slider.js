import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../sass/pages/_slider.scss';

function Slider ({images})  {
    const [currentIndex, SetCurrentIndex] = useState(0)
    const [autoPlay, SetAutoPlay] = useState(true)
    const timerRef = useRef(null)

    const goToprevious = () =>{
        SetCurrentIndex( currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }
    const goToNext = useCallback(() =>{
        SetCurrentIndex( currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }, [currentIndex, images])

    useEffect(() =>{
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = autoPlay && setTimeout(() => {
        goToNext()
        }, 3500)
        return () => clearTimeout(timerRef.current)
    }, [goToNext, autoPlay])


    return (
        <div className="slider-show" onMouseEnter={() => {SetAutoPlay(false)}} onMouseLeave={() =>{SetAutoPlay(true)}}>
            <div className="slider--wrapper">
                {images.map((image, index) =>{
                    return (
                        <div key={image.name}
                            className={
                                index === currentIndex ? "slider slider-active" : "slider"
                            }
                        >
                            <img src={image.image} alt={image.alt} />
                            <div className="slider_overlay">
                                <h2 className='slider_title'>{image.name}</h2>
                            </div>
                        </div>
                    )
                })}
                <div className="slider_arrow--left" onClick={goToprevious}>
                    &lsaquo;
                </div>
                <div className="slider_arrow--right" onClick={goToNext}>
                    &rsaquo;
                </div>
                <div className="slider_pagination">
                    {images.map((_,index) => {
                        return(
                            <div
                                key={index}
                                className={
                                    index === currentIndex ? "pagination-dot pagination-dot--active" : "pagination-dot"
                                }
                                onClick={() => SetCurrentIndex(index)}
                            >
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Slider;