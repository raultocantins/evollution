import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Brand from '../../Assets/codigo.svg'
import DehazeSharpIcon from '@material-ui/icons/DehazeSharp';
export default function header() {

function toggler(){
var navbar=document.getElementsByClassName('navbar-nav')
if(navbar[0].classList.contains('show')){
    navbar[0].classList.remove('show')
}else{
 navbar[0].className='navbar-nav show'
}
}
    return (

        <div className="navbar bg-primary d-flex justify-content-center">


            <div className="container navbar-container row d-flex justify-content-around" >
               
                <a className="navbar-brand" href="/" id="brand" className="col-md-2 col-6 mb-3 " >
                    <img src={Brand} alt="brand" id="imgbrand"/>
                </a>
                <div className="col-6 row justify-content-end btn-toggler">
                    <button className="mr-3 btn-light " onClick={toggler} >
          < DehazeSharpIcon id="toggle-icon"/>
                    </button>
                </div>

                <div className="col-md-7 ">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link activeClass="active" className="nav-link " href="/" to="section5R" spy={true} smooth={true} duration={500} >Tecnologias</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link " href="/" to="section6R" spy={true} smooth={true} duration={500} >Aprenda a programar</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link " href="/" to="section3R" spy={true} smooth={true} duration={500} >Sobre</Link>
                        </li>
                        <li className="nav-item  mb-3">
                            <Link activeClass="active" className="nav-link " href="/" to="section2R" spy={true} smooth={true} duration={500} >Contato</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-2 redes_sociais">
                    <a href="https://www.facebook.com/alex.raul.940" style={{ color: 'white' }} className="p-3"><FacebookIcon /></a>
                    <a href="/" style={{ color: 'white' }} className="p-3">< WhatsAppIcon /></a>
                    <a href="https://www.instagram.com/raull_sant/" style={{ color: 'white' }} className="p-3"><InstagramIcon /></a>
                    <a href="https://www.linkedin.com/in/alex-raul-39bb53166/" style={{ color: 'white' }} className="p-3"><LinkedInIcon /></a>
                </div>
            </div>

        </div>
    );
}