import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Header from './componentes/Header';
import Index from './componentes/index';
import Historia from './componentes/Historia';
import Productos from './componentes/Productos';
import Costos from './componentes/Costos';
import Acercade from './componentes/Acercade';
import Catalogo from './componentes/Catalogo';
import Login from './componentes/Login';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import Ubicacion from './componentes/Ubicacion';
import Administrador from './componentes/Administrador';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/Administrador">
            <Administrador></Administrador>
          </Route>
          <Route path="/Ubicacion">
            <Ubicacion></Ubicacion>
          </Route>
          <Route path="/Contacto">
            <Contacto></Contacto>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Catalogo">
            <Catalogo></Catalogo>
          </Route>
          <Route path="/Acercade">
            <Acercade></Acercade>
          </Route>
          <Route path="/Costos">
            <Costos></Costos>
          </Route>
          <Route path="/Productos">
            <Productos></Productos>
          </Route>
          <Route path="/Historia">
            <Historia></Historia>
          </Route>
          <Route path="/">
            <Index></Index>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
