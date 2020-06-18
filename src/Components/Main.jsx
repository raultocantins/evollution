import './Main.css'
import React from 'react'
import Brand from '../Assets/codigo.svg'
import Js from '../Assets/script-java.svg'
import Perfil from '../Assets/perfil.jpg'
import Coder from '../Assets/designer-de-web.svg'
import Grafic from '../Assets/estatisticas.svg'
import Programador from '../Assets/jogador.svg'
import Metas from '../Assets/missao.svg'
import Multi from '../Assets/plataforma-cruzada.svg'
import Api from '../Assets/api.svg'
export default class Main extends React.Component {
    state = {
        text_perfil: "Meu nome é alex, sou desenvolvedor Fullstack para web,atualmente tenho alguns projetos em desenvolvimento que estão disponiveisno github que você pode dar uma conferida na seção meus projetos"
    }
    constructor(props) {
        super(props)
        this.header = this.header.bind(this)
        this.section1 = this.section1.bind(this)

    }

    header() {
        return (
            <div className="navbar bg-light d-flex flex-column ">
                <a className="navbar-brand" href="/" id="brand">
                    <img src={Brand} alt="brand" id="imgbrand" />
                </a>
                <ul className="navbar-nav  text-center ">
                    <li className="nav-item active ">
                        <a className="nav-link" href="projetos">Projetos </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="contato">Contato</a>
                    </li>
                </ul>
            </div>
        );
    }
    section1() {
        return (

            <div className="section1 container-fluid bg-light d-flex justify-content-between row">
<h1 className="text-center col-12">Características</h1>
                <div className="cards  ">
                    <div className="row justify-content-around py-3 ">
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

        );
    }


    render() {
        return (
            <React.Fragment>
                {this.header()}
                {this.section1()}

            </React.Fragment>
        );
    }
}