import React from 'react'
import './Section5.css'
import Angular from '../../Assets/angular.svg'
import Js from '../../Assets/js.svg'
import Node from '../../Assets/node.svg'
import Python from '../../Assets/python (1).svg'
import Reagir from '../../Assets/react.svg'
import Vue from '../../Assets/vue.svg'

export default function section4() {
    return (
        <div className="container section5 bg-light mb-5">
            <h1 className="text-center mb-5 ">Utilizamos os melhores frameworks e blibiotecas para desenvolvimento web.</h1>
            <div className="row justify-content-between  ">
                <div className="col-md-3 col-12 mr-1 ml-1 mb-md-5 mb-2 circle ">
                    <img src={Angular} alt="angular" className="frameworks" />

                </div>
                <div className="col-md-3 col-12 mr-1 ml-1 mb-md-5 mb-2 circle">
                    <img src={Reagir} alt="react" className="frameworks" />

                </div>
                <div className="col-md-3 col-12 mr-1 ml-1 mb-md-5 mb-2 circle">
                    <img src={Vue} alt="vuejs" className="frameworks" />

                </div>
                <div className="col-md-3 col-12 mr-1 ml-1 mb-md-5 mb-2 circle">
                    <img src={Node} alt="nodejs" className="frameworks" />

                </div>
                <div className="col-md-3 col-12 mr-1 ml-1 mb-md-5 mb-2 circle">
                    <img src={Js} alt="js" className="frameworks" />

                </div>
                <div className="col-md-3 col-12 mr-1 ml-1 mb-sm-5 circle">
                    <img src={Python} alt="python" className="frameworks" />

                </div>

            </div>

        </div>);
}