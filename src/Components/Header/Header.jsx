import React from 'react'
import './Header.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Brand from '../../Assets/codigo.svg'
export default function header() {
    return (

        <div className="navbar bg-primary d-flex justify-content-center ">
            <div className="container   navbar-container row d-flex justify-content-left">
                <a className="navbar-brand" href="/" id="brand" className="col-md-2 col-2">
                    <img src={Brand} alt="brand" id="imgbrand" />
                </a>
                <div className="col-md-7 col-8">
                    <ul className="navbar-nav  ">
                        <li className="nav-item active">
                            <a className="nav-link" href="projetos">Características</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="contato">Contato</a>
                        </li>
                    </ul>

                </div>
                <div className="col-md-3 col-2">
                    <a href="/" style={{ color: 'white' }} className="p-3"><FacebookIcon /></a>
                    <a href="/" style={{ color: 'white' }} className="p-3">< WhatsAppIcon /></a>
                    <a href="/" style={{ color: 'white' }} className="p-3"><InstagramIcon /></a>
                    <a href="/" style={{ color: 'white' }} className="p-3"><LinkedInIcon /></a>

                </div>


            </div>
        </div>
    );
}