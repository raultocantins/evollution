import React from 'react'
import './Section4.css'
import Seguro from '../../Assets/seguro.svg'
import Seguranca from '../../Assets/seguranca.svg'


export default function section4() {
    return (
        <div className="container-fluid section4">
            <div className="row d-flex justify-content-center carousel">

                <div className="div col-md-5 col-6 ">
                    <h1 className="h1_carousel">Banco de dados e Apis 100% seguros.</h1>
                    <p>Pensando na segurança da aplicação nós da <strong>Evolution</strong> estamos sempre buscando o melhor serviço de hospedagem para proteger não só os dados do seu négocio mais também a extrutura de toda aplicação.</p>
                    <img src={Seguranca} alt="seguranca" className="seguranca" />
                </div>
                <img src={Seguro} alt="seguro" className="col-md-4 img_carousel col-6" />
            </div>
        </div>);
}