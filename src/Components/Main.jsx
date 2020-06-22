import './Main.css'
import React from 'react'

import Js from '../Assets/script-java.svg'
import Perfil from '../Assets/perfil.jpg'








import Header from '../Components/Header/Header'
import Section1 from '../Components/Section1/Section1'
import Section2 from '../Components/Section2/Section2'
import Section3 from '../Components/Section3/Section3'
import Section4 from '../Components/Section4/Section4'
import Section5 from '../Components/Section5/Section5'


export default class Main extends React.Component {
   
    constructor(props) {
        super(props)
      
    }
  
    
  

    render() {
        return (
            <React.Fragment >
           <Header/>
           <Section3/>
           <Section4/>
           <Section5/>
           <Section1/>
           <Section2/>

             

            </React.Fragment>
        );
    }
}