import React, {useState, useRef, useEffect} from 'react'
import { ContentWrapper, ContentSection, ImageSlide, Logo, ImageSlider, ContentImage, PageContent, Arrow, PrevArrow, NextArrow, SliderButtons } from './ContentOneElements';
import {Button} from '../ButtonElements';



const ContentOne = ({ slides }) => {

  const [current, setCurrent] = useState(0)
  const length = slides.length 
  const timeout = useRef(null)

  // useEffect(() => {

  //   const nextSlide = () => {
  //     setCurrent(current => (current === length - 1 ? 0 : current + 1))
  //   }
  //   timeout.current = setTimeout(nextSlide, 5000)

  //   return function () {
  //     if(timeout.current) {
  //       clearTimeout(timeout.current)
  //     }
  //   }
  // }, [current, length])

  const nextSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
  };
  const prevSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)

    console.log(current);
  };
  
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


    return (
        <ContentSection>
        <Logo to="/">Kamin</Logo>
          <ContentWrapper>
            {slides.map((slide, index) => {
              return (
                <ImageSlide key={index}>
                 {index === current && (

                  <ImageSlider>
                    <ContentImage src={slide.image} alt={slide.alt} activeClass="active" />
                    <PageContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <Button primary="true" to={slide.path}
                      css={`
                            color: #000;
                            
                            `}
                          >
                      {slide.label}
                       <Arrow/>
                      </Button>
                    </PageContent>
                  </ImageSlider>
                 )}
                </ImageSlide>
                );
            })}
            <SliderButtons>
              <PrevArrow onClick={prevSlide}/>
              <NextArrow onClick={nextSlide} />
            </SliderButtons>
          </ContentWrapper>   
        </ContentSection>
    )
}

export default ContentOne;
