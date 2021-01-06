import React from 'react'
import ContentOne from '../components/InfoSectionContent';
import { SliderData } from '../components/InfoSectionContent/SliderData';

const InfoContentOne = () => {
    return (
        <>
           <ContentOne slides={SliderData}/> 
        </>
    )
}

export default InfoContentOne;
