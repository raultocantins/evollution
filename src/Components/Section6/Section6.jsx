import React from 'react'

import './Section6.css'
import Youtube from '../../Assets/youtube (1).svg'

import Podcasts from '../../Assets/podcast.svg'
import Forum from '../../Assets/falando.svg'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
export default function section6() {



    return (

        <div className="container section6 ">
            <div className="row d-flex justify-content-center ">

                <div className="div col-md-8 col-12 row ">
                    <h1 className="h1_carousel col-12 text-center">Quer aprender a desenvolver para web?</h1>
                    <p className="col-12 text-left">Se você assim como a gente é apaixonado pelo mundo do desenvolvimento e ainda não sabe programar, acesse a nossa área de conhecimento totalmente gratuita para tornar isso possível.<EmojiEmotionsIcon style={{fontSize:30 ,color:"#28a745"}} className="ml-1"/></p>
                    <a className="btn btn-success col-12 started" href="/">Começar</a>
                </div>

                <div className=" col-md-4 row justify-content-center col-12 classroom">
                    <a href="/" className="col-md-12 mb-1 col-4 d-flex justify-content-start">
                    <img src={Youtube} alt="youtube" className="imgyoutube" />
                    </a>
                    <a href="/" className="col-md-12 mb-3 col-4 d-flex justify-content-center">
                    <img src={Podcasts} alt="podcasts" className="imgyoutube" />
                    </a>
                    <a href="/" className="col-md-12 mb-1 col-4 d-flex justify-content-end">
                    <img src={Forum} alt="forum" className="imgyoutube" />
                    </a>
                  
                </div>
            </div>

        </div>);
}