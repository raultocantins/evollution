import './Main.css'
import React from 'react'
import { Element } from 'react-scroll'

import Header from '../Components/Header/Header'
import Section2 from '../Components/Section2/Section2'
import Section3 from '../Components/Section3/Section3'
import Section4 from '../Components/Section4/Section4'
import Section5 from '../Components/Section5/Section5'
import Section6 from '../Components/Section6/Section6'
import Footer from '../Components/Footer/Footer'

export default class Main extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <React.Fragment >
                <Element name="header" className="headerR">
                    <Header></Header>
                </Element>
                <Element name="section3" className="section3R">
                    <Section3 />
                </Element>
                <Element name="section4" className="section4R">
                    <Section4 />
                </Element>
                <Element name="section5" className="section5R">
                    <Section5 />
                </Element>
                <Element name="section6" className="section6R">
                    <Section6 />
                </Element>
                <Element name="section2" className="section2R">
                    <Section2 />
                </Element>
                <Footer />
            </React.Fragment>
        );
    }
}