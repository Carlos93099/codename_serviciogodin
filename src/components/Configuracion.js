import React from 'react'
import linea from '../images/Line.png'
import './styles/configuracion.css'

export default function Configuracion() {
    return (
        <div>
            <span className="Configuracion-i">
                Inicio
            </span>
            <img
                className="Configuracion-l1" 
                src={linea} 
            />
            <span className="Configuracion-c">
                Configuración
            </span>
            <img 
                className="Configuracion-l2"
                src={linea} 
            />
            <span className="Configuracion-mf">
                Mis Favoritos
            </span>
            <img
                className="Configuracion-l3" 
                src={linea} 
            />
            <span className="Configuracion-mc">
                Mi Carrito
            </span>
            <img
                className="Configuracion-l4" 
                src={linea} 
            />
        </div>
    )
}
