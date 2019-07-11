import React, { Component } from 'react'
import MenuFooter3 from '../components/MenuFooter3'
import Navbar3 from '../components/Navbar3'
import Configuracion from '../components/Configuracion'

export default class Configuraciones extends Component {
    render() {
        return (
            <div>
                <Navbar3 />
                <Configuracion />
                <MenuFooter3 />
            </div>
        )
    }
}
