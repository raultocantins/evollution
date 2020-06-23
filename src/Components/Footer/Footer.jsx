import React from 'react'
import './Footer.css'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
export default function Footer() {
    return (

        <div className="footer container-fluid bg-primary d-flex align-itens-center justify-content-center">

            <p><strong className="mr-1"><b>Evolution </b>© 2020</strong> Todos os direitos reservados. <a className="ml-3" href="/" style={{color:'white'}}> <OpenInNewIcon /></a></p>

        </div>

    );
}