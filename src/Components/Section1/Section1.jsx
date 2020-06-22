import React from 'react'
import './Section1.css'
import Multi from '../../Assets/plataforma-cruzada.svg'
import Api from '../../Assets/api.svg'
import Grafic from '../../Assets/estatisticas.svg'
import Programador from '../../Assets/jogador.svg'
import Coder from '../../Assets/designer-de-web.svg'
import Metas from '../../Assets/missao.svg'
export default function section1() {
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