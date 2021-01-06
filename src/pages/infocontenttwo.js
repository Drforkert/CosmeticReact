import React from 'react';
import ContentTwo from '../components/InfoSectionContent2';
import { infoObjOne } from '../components/InfoSectionContent2/ContentData';

const infocontenttwo = () => {
    return (
        <>
         <ContentTwo {...infoObjOne}/>
        </>
    )
}

export default infocontenttwo;
