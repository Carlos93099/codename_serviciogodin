import React from 'react'
import './styles/pedido_finalizado.css'

export default function PedidoFinalizado() {
    return (
        <div>
            <div className="Pedido_finalizado-container">
                <div className="Pedido_finalizado-gracias">
                    <p>
                        ¡Gracias!
                    </p> 
                    <p>
                        Tu pedido se ha realizado con éxito
                    </p>
                </div>
            </div>
        </div>
    )
}
