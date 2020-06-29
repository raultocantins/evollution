import React from 'react'
import Axios from 'axios'
import './Section2.css'
import HomeIcon from '@material-ui/icons/Home';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';


export default class section2 extends React.Component {

    state = {
        nome: '',
        sobrenome: '',
        assunto: '',
        mensagem: '',
        email: ''

    }
    constructor(props) {
        super(props)
        this.enviar = this.enviar.bind(this)
        this.Onchange = this.Onchange.bind(this)
    }
    enviar() {
        if (this.state.email !== '' && this.state.mensagem !== '' && this.state.assunto !== '' && this.state.name !== '') {
            Axios.post('url', this.state)
                .then(res => {
                    console.log(res)
                })

            this.setState({
                nome: '',
                sobrenome: '',
                assunto: '',
                mensagem: '',
                email: ''
            })
        } else {
            alert('Por favor preenchar todos os campos!')
        }

    }
    Onchange(e) {
        var name = e.target.name
        if (name === 'firstName') {
            this.setState({
                nome: e.target.value
            })

        } else if (name === 'lastName') {
            this.setState({
                sobrenome: e.target.value
            })
        } else if (name === 'assunto') {
            this.setState({
                assunto: e.target.value
            })

        } else if (name === 'email') {
            this.setState({
                email: e.target.value
            })

        } else if (name === 'mensagem') {
            this.setState({
                mensagem: e.target.value
            })

        } else {
            alert('Por favor preenchar todos os campos!')
        }


    }


    render() {
        return (
            <div className=" container-fluid section2  d-flex justify-content-center ">

                <div className="container  row">
                    <div className="col-md-6 col-12 ">
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
                    
                    <div className="col-md-6 contact col-12 ">
                        <h1 className="text-center mt-5">Enviar uma mensagem</h1>
                        <div className="row mt-5">
                            <div className="col-md-6 mb-3">
                                <label >Nome</label>
                                <input type="text" className="form-control" name="firstName" value={this.state.nome} onChange={this.Onchange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label >Sobrenome</label>
                                <input type="text" className="form-control" name="lastName" value={this.state.sobrenome} onChange={this.Onchange} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label >Seu email</label>
                                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.Onchange} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label >Assunto</label>
                                <input type="text" className="form-control" name="assunto" value={this.state.assunto} onChange={this.Onchange} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label >Mensagem</label>
                                <textarea type="text" className="form-control" name="mensagem" value={this.state.mensagem} onChange={this.Onchange} />
                            </div>
                            <button className="btn btn-success enviar" name="enviar" id="enviar" onClick={this.enviar}>
                                Enviar
                        </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}