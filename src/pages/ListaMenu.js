import React, { Component } from 'react'
import Navbar2 from '../components/Navbar2'
import VerListaMenu from '../components/VerListaMenu'
import MenuFooter2 from '../components/MenuFooter2'

export default class ListaMenu extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
                <VerListaMenu />
                <MenuFooter2 />
            </div>
        )
    }
}
