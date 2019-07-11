import React from 'react'
import linea from '../images/Line.png'
import './styles/configuracion2.css'

export default function Configuracion2() {
    return (
        <div>
            <span className="Configuracion-c">
                Configuración
            </span>
            <span className="Configuracion-mc">
                Mi Cuenta
            </span>
            <img
                className="Configuracion-l1" 
                src={linea} 
            />
            <span className="Configuracion-msc">
                Mis Consumos
            </span>
            <img 
                className="Configuracion-l2"
                src={linea} 
            />
            <span className="Configuracion-mm">
                Acerca de Mi Menú
            </span>
            <img
                className="Configuracion-l3" 
                src={linea} 
            />
            <span className="Configuracion-cs">
                Cerrar Sesión
            </span>
            <img
                className="Configuracion-l4" 
                src={linea} 
            />
        </div>
    )
}
