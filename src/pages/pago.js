import React, { Component } from 'react'
import Navbar2 from '../components/Navbar2';
import MenuFooter2 from '../components/MenuFooter2';
import SeleccionarPago from '../components/SeleccionarPago';

export default class Pago extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
                <SeleccionarPago />
                <MenuFooter2 />
            </div>
        )
    }
}
