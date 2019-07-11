import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import MenuFooter from '../components/MenuFooter';
import DiasSemana from '../components/DiasSemana'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <DiasSemana />
                <Menu />
                <MenuFooter />
            </div>
        )
    }
}
