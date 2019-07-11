import React, { Component } from 'react'
import MenuFooter3 from '../components/MenuFooter3';
import Navbar2 from '../components/Navbar2'
import PedidoFinalizado from '../components/PedidoFinalizado'

export default class FinalizarPedido extends Component {
    render() {
        return (
            <div>
               <Navbar2 />
               <PedidoFinalizado />
               <MenuFooter3 /> 
            </div>
        )
    }
}
