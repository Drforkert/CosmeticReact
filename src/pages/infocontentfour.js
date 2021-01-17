import React from 'react'
import ContentTwo from '../components/InfoSectionContent2'
import { infoObjThree } from '../components/InfoSectionContent2/ContentData'


const infocontentfour = () => {
    return (
        <>
        <ContentTwo {... infoObjThree}/>  
        </>
    )
}

export default infocontentfour
