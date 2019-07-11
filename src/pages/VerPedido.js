import React, { Component } from 'react'
import Navbar2 from '../components/Navbar2'
import MenuFooter2 from '../components/MenuFooter2';
import MostrarPedido from '../components/MostrarPedido'

export default class VerPedido extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
                <MostrarPedido />
                <MenuFooter2 />
            </div>
        )
    }
}
