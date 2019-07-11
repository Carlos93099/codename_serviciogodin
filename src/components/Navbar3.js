import React from 'react';
import menu from '../images/mmenublanco.png'
import arrow from '../images/Arrow.png'
import './styles/navbar3.css'

export default function Navbar3() {
    return (
        <div>
            <div className="navbar3">
                <img
                    className="navbar3_arrow"
                    src={arrow}
                    alt="logo flecha"
                />

                <img
                    className="navbar3_mimenu"
                    src={menu}
                    alt="logo mimenu" 
                    width="128px"
                    height="45px"
                />
            </div>
        </div>
    )
}
