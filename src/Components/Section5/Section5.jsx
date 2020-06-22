import React from 'react'
import './Section5.css'
import Angular from '../../Assets/angular.svg'
import Css from '../../Assets/css.svg'
import Js from '../../Assets/js.svg'
import Node from '../../Assets/node.svg'
import Python from '../../Assets/python.svg'
import Reagir from '../../Assets/react.svg'
import Vue from '../../Assets/vue.svg'

export default function section4() {
    return (
        <div className="container section5 bg-light mb-5">
            <h1 className="text-center mb-5">Utilizamos os melhores frameworks e blibiotecas para desenvolvimento web.</h1>
            <div className="row justify-content-between  ">
                <div className="col-3 mr-1 mb-5 circle ">
                    <img src={Angular} alt="angular" className="frameworks" />

                </div>
                <div className="col-3 mr-1 mb-5 circle">
                    <img src={Reagir} alt="angular" className="frameworks" />

                </div>
                <div className="col-3 mr-1 mb-5 circle">
                    <img src={Vue} alt="angular" className="frameworks" />

                </div>
                <div className="col-3 mr-1 mb-5 circle">
                    <img src={Node} alt="angular" className="frameworks" />

                </div>
                <div className="col-3 mr-1 mb-5 circle">
                    <img src={Js} alt="angular" className="frameworks" />

                </div>
                <div className="col-3 mr-1 mb-5 circle">
                    <img src={Css} alt="angular" className="frameworks" />

                </div>

            </div>

        </div>);
}