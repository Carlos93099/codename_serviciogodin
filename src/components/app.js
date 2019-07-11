import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FinalizarPedido from '../pages/FinalizarPedido';
import Pago from '../pages/Pago';
import VerPedido from '../pages/VerPedido'
import ListaMenu from '../pages/ListaMenu';
import Home from '../pages/Home';
import RegistroSesion from '../pages/RegistroSesion';
import Inicio from '../pages/Inicio';
import InicioSesion from '../pages/InicioSesion';
import Configuraciones from '../pages/Configuraciones'
import Configuraciones2 from '../pages/Configuraciones2'

export default function App() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/iniciosesion" component={InicioSesion} />
                <Route exact path="/registro" component={RegistroSesion} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/home/listamenu" component={ListaMenu} />
                <Route exact path="/home/pedido" component={VerPedido} />
                <Route exact path="/home/pago" component={Pago} />
                <Route exact path="/home/finalizar" component={FinalizarPedido} />
                <Route exact path="/configuraciones" component={Configuraciones} />
                <Route exact path="/configuraciones/cuenta" component={Configuraciones2} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}
