import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import RegistroFormulario from '../components/RegistroFormulario';

export default class InicioSesion extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <RegistroFormulario />
            </div>
        )
    }
}
