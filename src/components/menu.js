import React from 'react'
import corazon from '../images/Heart.png'
import compartir from '../images/share.png'
import pollo from '../images/Pollo.png'
import elipse3 from '../images/Ellipse3.png'
import elipse4 from '../images/Ellipse4.png'
import './styles/menu.css'

export default function Menu() {
    return (
        <div>
            <div>
                <span className="Home-pollotxt">
                    Pollo a la barbacoa
                </span>
                <img 
                    className="Home-polloimg"
                    src={pollo} 
                />
                <div className="Home-container2">
                    <img 
                        className="Home-crzn"
                        src={corazon} 
                    />
                    <img 
                        className="Home-cmprtr"
                        src={compartir} 
                    />
                </div>
                <img 
                    className="Home-e6"
                    src={elipse3} 
                />
                <img 
                    className="Home-e7"
                    src={elipse4} 
                />
                <img 
                    className="Home-e8"
                    src={elipse4} 
                />
                <p className="Home-slct">
                    ¿Qué desea hacer?
                    <select>
                        <option>Solicitar</option>
                        <option>Cancelar</option>
                    </select>
                </p>
                <button className="Home-btn">
                    Guardar
                </button>
            </div>
        </div>
    )
}
