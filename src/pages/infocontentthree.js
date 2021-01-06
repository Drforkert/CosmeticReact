import React from 'react';
import ContentTwo from '../components/InfoSectionContent2';
import { infoObjOne, infoObjTwo } from '../components/InfoSectionContent2/ContentData';
import ContentThree from '../components/InfoSectionContent3'

const infocontentthree = () => {
    return (
        <>
         <ContentTwo {...infoObjTwo}/>   
        </>
    )
}

export default infocontentthree
