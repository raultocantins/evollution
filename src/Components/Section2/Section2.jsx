import React from 'react'
import './Section2.css'
import HomeIcon from '@material-ui/icons/Home';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';

export default function section2() {
    return (
        <div className=" container-fluid section2  d-flex justify-content-center ">

            <div className="container  row">

                <div className="col-md-6  ">
                    <div className="endereco mt-5">
                        <div className="col-12 ">
                            <div className="d-flex mb-3 ">
                                <HomeIcon className="mr-5 ml-5 icon" ></HomeIcon>
                                <h1 >Quadra 706 sul alameda 12 lote 12</h1>
                                <hr />
                            </div>
                            <div className="d-flex mb-3">
                                <EditLocationIcon className="mr-5 ml-5 icon"></EditLocationIcon>
                                <h1 >Plano diretor sul</h1>
                                <hr />
                            </div>
                            <div className="d-flex mb-3">
                                <LocationCityIcon className="mr-5 ml-5 icon"></LocationCityIcon>
                                <h1 >Palmas do Tocantins (TO)</h1>
                                <hr />
                            </div>
                            <div className="d-flex mb-3">
                                <PhoneAndroidIcon className="mr-5 ml-5 icon"></PhoneAndroidIcon>
                                <h1 >(63) 99213-5111</h1>

                                <hr />
                            </div>
                            <div className="d-flex mb-3">
                                <PhoneIcon className="mr-5 ml-5 icon"></PhoneIcon>
                                <h1 >(63) 3430-0000</h1>
                                <hr />
                            </div>

                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.429116176212!2d-48.
32178868520811!3d-10.226932713499842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsD
EzJzM3LjAiUyA0OMKwMTknMTAuNiJX!5e0!3m2!1spt-BR!2sbr!4v1592566279300!5m2!1spt-BR!2sbr"  className="map ml-5 mt-5 " title="map google">
                        </iframe>
                    </div>
                </div>
                <div className="col-md-6 contact ">
                    <h1 className="text-center mt-5">Enviar uma mensagem</h1>
                    <div className="row mt-5">
                        <div className="col-md-6 mb-3">
                            <label >Nome</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label >Sobrenome</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label >Seu email</label>
                            <input type="text" className="form-control" id="email" />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label >Assunto</label>
                            <input type="text" className="form-control" id="assunto" />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label >Mensagem</label>
                            <textarea type="text" className="form-control" id="mensagem" />
                        </div>
                        <button className="btn btn-success enviar" id="enviar">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}