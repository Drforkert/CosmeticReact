import React, {useState} from 'react';
import { SliderDatas } from './TestData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './index.css';

const Slider = ({slides, title}) => {
    
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    
    return (
        <section className="Background">
        <h1 className="section-title">Unsere Bilder Gallerie</h1>  
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderDatas.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<h1 className="titles">{slide.title}</h1>)}
                {index === current && (<img src={slide.image} alt={slide.alt} className="image"/>)}
                </div>
                )
                 
            })}
        </div>
        </section>
    )
}

export default Slider;
