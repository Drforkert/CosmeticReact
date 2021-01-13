import React from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductDesc, ProductQuote, ProductInfo, ProductTitle} from './ServicesElements';


const Services = ({data}) => {
    return (
      <ProductsContainer id="offers">
        <ProductsHeading>Kundenzitat</ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductQuote>{product.quote}</ProductQuote>
                </ProductInfo> 
              </ProductCard>)
          })}
        </ProductWrapper>
      </ProductsContainer>
    )
}

export default Services
