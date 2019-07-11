import React from 'react'
import './styles/dias_semana.css'
import arrowl from '../images/Arrowleft.png'
import arrowr from '../images/Arrowright.png'
import elipse from '../images/Ellipse.png'
import elipse2 from '../images/Ellipse2.png'

export default function DiasSemana() {
    return (
        <div>
            <div className="Home-al">
                    <img src={arrowl} />    
                </div>
                <span className="Home-may1">
                    20 may
                </span>
                <span className="Home-may2">
                    21 may
                </span>
                <span className="Home-may3">
                    22 may
                </span>
                <span className="Home-may4">
                    23 may
                </span>
                <span className="Home-may5">
                    24 may
                </span>
                <div className="Home-ar">
                    <img src={arrowr} />
                </div>
                <img 
                    className="Home-e1"
                    src={elipse} 
                />
                <img 
                    className="Home-e2"
                    src={elipse2} 
                />
                <img 
                    className="Home-e3"
                    src={elipse2} 
                />
                <img 
                    className="Home-e4"
                    src={elipse2} 
                />
                <img 
                    className="Home-e5"
                    src={elipse2} 
                />
        </div>
    )
}
