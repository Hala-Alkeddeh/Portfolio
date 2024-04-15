import React from 'react'
import { useTheme } from './../Theme';
import Home from './../Sections/Home';
import About from './../Sections/About';
import Skills from './../Sections/Skills';
import Portfolio from './../Sections/Portfolio';
import Contact from './../Sections/Contact';
import NavBar from './../Components/NavBar/NavBar';
import Footer from './../Components/Footer/Footer';
import Achivments from './../Sections/Achivments';

const PortfolioPage = () => {
    const { darkMode } = useTheme();
     return (
        <div className={darkMode ? 'dark' : 'light'}>
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Achivments/>
            <Contact/>
            <Footer/>
        </div>
     )
}

export default PortfolioPage


