import React from 'react'
import arrow from '../images/Arrow.png'
import menu from '../images/mmenublanco.png'
import user from '../images/Group 7.png'
import './styles/navbar4.css'

export default function Navbar4() {
    return (
        <div>
            <div className="Navbar">
                <img
                    className="Navbar_arrow"
                    src={arrow} 
                    alt="logo menu hamburguesa"
                />

                <img
                    className="Navbar_mimenu"
                    src={menu} 
                    alt="logo mimenu" 
                    width="128px"
                    height="45px"
                />

                <img
                    className="Navbar_user"
                    src={user} 
                    alt="logo usuario" 
                />
            </div>
        </div>
    )
}

