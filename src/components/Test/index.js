import React, {useState, useRef, useEffect} from 'react';
import { SliderDatas } from './TestData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './index.css';

const Slider = ({slides}) => {
    
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 6000)
        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])


    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };
    
    return (
        <>
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            <a href="/" className="Logo">Kamin</a>
            {SliderDatas.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<h1 className="titles">{slide.title}</h1>)}
                {index === current && (<img src={slide.image} alt={slide.alt} className="image"/>)}
                </div>
                )
                 
            })}
        </div>
        </>
    )
}

export default Slider;
