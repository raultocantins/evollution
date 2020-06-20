import './Main.css'
import React from 'react'
import Brand from '../Assets/codigo.svg'
import Js from '../Assets/script-java.svg'
import Perfil from '../Assets/perfil.jpg'
import Coder from '../Assets/designer-de-web.svg'
import Grafic from '../Assets/estatisticas.svg'
import Programador from '../Assets/jogador.svg'
import Metas from '../Assets/missao.svg'
import Home from '../Assets/casa.svg'
import Multi from '../Assets/plataforma-cruzada.svg'
import Api from '../Assets/api.svg'
import HomeIcon from '@material-ui/icons/Home';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import Store from '../Assets/store.svg'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import Foguete from '../Assets/foguete.svg'
import Seguro from '../Assets/seguro.svg'
import Seguranca from '../Assets/seguranca.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default class Main extends React.Component {
    state = {
        text_perfil: "Meu nome é alex, sou desenvolvedor Fullstack para web,atualmente tenho alguns projetos em desenvolvimento que estão disponiveisno github que você pode dar uma conferida na seção meus projetos"
    }
    constructor(props) {
        super(props)
        this.header = this.header.bind(this)
        this.section1 = this.section1.bind(this)
        this.section2 = this.section2.bind(this)
        this.carousel = this.carousel.bind(this)
    }

    header() {
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
                        <a href="/" style={{color:'white'}} className="p-3"><FacebookIcon/></a>
                        <a href="/" style={{color:'white'}} className="p-3">< WhatsAppIcon/></a>
                        <a href="/" style={{color:'white'}} className="p-3"><InstagramIcon/></a>
                        <a href="/" style={{color:'white'}} className="p-3"><LinkedInIcon/></a>
                       
                    </div>
                 

                </div>
            </div>
        );
    }
    section1() {
        return (
            <div className=" container-fluid section1 d-flex justify-content-center ">

                <div className="container  d-flex justify-content-between row">

                    <div className="cards  ">
                        <div className="row justify-content-around  ">
                            <div className="card col-md-3 col-5 mr-1 mb-5  "   >
                                <a >
                                    <img className="card-img-top" src={Coder} alt="Card image cap" />
                                </a>
                                <h1 className="text-center">Desenvolvimento limpo e responsivo.</h1>
                                <div>
                                </div>
                            </div>
                            <div className="card col-md-3 col-5 mr-1 mb-5 " >
                                <a >
                                    <img className="card-img-top" src={Grafic} alt="Card image cap" />
                                </a>
                                <h1 className="text-center">Aplicações modernas para evoluir o seu négocio.
            </h1>
                            </div>
                            <div className="card col-md-3 col-5 mr-1 mb-5 " >
                                <a >
                                    <img className="card-img-top" src={Programador} alt="Card image cap" />
                                </a>
                                <h1 className="text-center">Equipe de programadores especialistas em desenvolvimento web.</h1>
                            </div>
                            <div className="card col-md-3  col-5 mr-1 mb-5 " >
                                <a >
                                    <img className="card-img-top" src={Metas} alt="Card image cap" />
                                </a>
                                <h1 className="text-center">Trabalhamos com metas para entregar o projeto no tempo certo para o cliente.</h1>
                            </div>
                            <div className="card col-md-3  col-5 mr-1 mb-5" >
                                <a >
                                    <img className="card-img-top" src={Multi} alt="Card image cap" />
                                </a>
                                <h1 className="text-center">Aplicações multi-plataformas (Mobile, Desktop, Web).</h1>
                            </div>
                            <div className="card col-md-3  col-5 mr-1 mb-5" >
                                <a >
                                    <img className="card-img-top" src={Api} alt="Card image cap" />
                                </a>
                                <h1 className="text-center">Apis e Banco de dados seguros.</h1>
                            </div>

                        </div>



                    </div>
                </div>
            </div>


        );
    }
    section2() {
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
EzJzM3LjAiUyA0OMKwMTknMTAuNiJX!5e0!3m2!1spt-BR!2sbr!4v1592566279300!5m2!1spt-BR!2sbr"  className="map ml-5 mt-5 ">
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
                            <button className="btn btn-success" id="enviar">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    carousel() {
        return (
            <div className="container-fluid ">
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="4000">
                            <div className="row d-flex justify-content-center carousel">
                                <img src={Store} alt="casa" className="col-md-6 img_carousel col-6 " />
                                <div className="div col-md-3 col-6 ">
                                    <h1 className="h1_carousel ">Sabe aquela ideia que você teve para seu négocio?<EmojiObjectsOutlinedIcon className="ml-2" style={{ fontSize: 40 }} color="secondary" /></h1>
                                    <p>A <strong>Evolution</strong> com a sua equipe de programadores estão a mil para trazer para ao mundo real e garantir que o seu negócio cresça acompanhando o mundo da tecnologia.</p>
                                    <img src={Foguete} alt="foguete" className="foguete" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="4000">
                            <div className="row d-flex justify-content-center carousel">
                                <img src={Seguro} alt="seguro" className="col-md-6 img_carousel col-6" />
                                <div className="div col-md-3 col-6 ">
                                    <h1 className="h1_carousel">Banco de dados e Apis 100% seguros.<EmojiObjectsOutlinedIcon className="ml-2" style={{ fontSize: 40 }} color="secondary" /></h1>
                                    <p>Pensando na segurança da aplicação nós da <strong>Evolution</strong> estamos sempre buscando o melhor serviço de hospedagem para proteger não só os dados do seu négocio mais também a extrutura de toda aplicação.</p>
                                    <img src={Seguranca} alt="seguranca" className="foguete" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="3000">
                            <div className="row d-flex justify-content-center carousel">
                                <img src={Store} alt="casa" className="col-md-6 img_carousel col-6" />
                                <div className="div col-md-3 col-6 ">
                                    <h1 className="h1_carousel">Sabe aquela ideia que você teve para seu négocio?<EmojiObjectsOutlinedIcon className="ml-2" style={{ fontSize: 40 }} color="secondary" /></h1>
                                    <p>A <strong>evollution</strong> com a sua equipe de programadores estão a mil para trazer para ao mundo real e garantir que o seu negócio cresça acompanhando o mundo da tecnologia.</p>
                                    <img src={Foguete} alt="foguete" className="foguete" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon setas" aria-hidden="true"></span>
                        <span className="sr-only  ">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon setas" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment >
                {this.header()}
                {this.carousel()}
                {this.section1()}
                {this.section2()}

            </React.Fragment>
        );
    }
}