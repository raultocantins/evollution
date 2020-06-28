import React from 'react'

import './Section3.css'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import Foguete from '../../Assets/foguete.svg'
import Store from '../../Assets/store.svg'
export default function section3() {


    return (
        <div className="container-fluid section3">
            <div className="row d-flex justify-content-center carousel">
                <img src={Store} alt="casa" className="col-md-6 store col-12 " />
                <div className=" col-md-3 col-12 row ">
                    <h1 className="text-center">Sabe aquela ideia que você teve para seu négocio?<EmojiObjectsOutlinedIcon className="ml-2" style={{ fontSize: 40 }} color="secondary" /></h1>
                    <p >A <strong>Evolution</strong> com a sua equipe de programadores estão a mil para trazer para ao mundo real e garantir que o seu negócio cresça acompanhando o mundo da tecnologia.</p>
                    <img src={Foguete} alt="foguete" className="foguete col-12" />
                </div>
            </div>
        </div>);
}