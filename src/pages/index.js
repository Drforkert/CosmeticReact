import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import { Productdata } from '../components/Services/ServicesData';
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HeroSection />
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <InfoSection {...homeObjThree}/>
         <InfoSection {...homeObjFour}/>
         <InfoSection {...homeObjFive}/>
         <InfoSection {...homeObjSix}/>
         <Services data={Productdata} />
         <Footer />
        </>
    )
}

export default Home;
