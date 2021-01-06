import React from 'react';
import { AlignInfo, ColumnX, ContentContainer, ContentWrapper, Icon, Description, ProductWrapper, HeadingSec, PlayerWrap, ColumnY, UpLine, Title } from './ContentTwoElements';
import ReactPlayer from 'react-player';
 
const ContentTwo = ({headline, topLine, imgStart, description, titleText, url, width, height}) => {

    return (
        <>
          <ContentContainer>
          <Icon to="/">Kamin</Icon>
          <Title>{titleText}</Title>
           <ContentWrapper>
           <AlignInfo imgStart={imgStart}>
            <ColumnX>
              <ProductWrapper>
               <UpLine>{topLine}</UpLine>
               <HeadingSec>{headline}</HeadingSec>
               <Description>{description}</Description> 
              </ProductWrapper>
            </ColumnX>
            <ColumnY>
              <PlayerWrap>
              <ReactPlayer url={url} width={width}
              height={height} controls={true}/>
              </PlayerWrap>            
            </ColumnY>
           </AlignInfo>
           </ContentWrapper> 
          </ContentContainer>  
        </>
    )
}

export default ContentTwo;
