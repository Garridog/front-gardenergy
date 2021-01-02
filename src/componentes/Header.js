import React from 'react';
import {Link} from "react-router-dom";
import '../styles/header.css'

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/Login" className="navbar-brand font1">
          Gardenergy
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Historia" className="nav-link">
                Historia
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Productos" className="nav-link" >
                Productos
                </Link>                
              </li>
              <li className="nav-item">
                <Link to="/Costos" className="nav-link">
                Costos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Acercade" className="nav-link">
                Acerca de
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Catalogo" className="nav-link">
                Catalogo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Ubicacion" className="nav-link">
                  Ubicación
                </Link>
              </li>
            </ul>
            <Link to="/Contacto">
            <button type="button" className="btn btn-outline-primary">Contacto</button>
            </Link>
          </div>
        </div>
      </nav>
      
    );
}

export default Header;