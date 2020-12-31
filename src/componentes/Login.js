import React from 'react';
import Adm from '../img/imgadmin.svg';
import '../styles/login.css';
import Footer from './Footer';

function Login(){
    return(
        <div>
        <div className="container mt-5 shadow p-3 mb-5 bg-white rounded lcontainer">
            <div className="row">
                <div className="col-sm mt-5">
                    <img src={Adm} alt="" className="img-fluid"/>
                </div>
                <div className="col-sm mt-5 txtlogin">
                    <h1 className="text-center adm">Administrador</h1>
                    <hr/>
                    <h2 className="text-center mt-3">Inicia Sesion</h2>
                    <div className="mb-3 text-center">
                        <label for="exampleInputEmail1" className="form-label">Usuario</label>
                        <input type="text" className="form-control" name="usuario" aria-describedby="emailHelp"/>
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" name="password"/>
                        <button type="submit" value="send" className="btn btn-primary mx-auto d-block mt-3">Inicia Sesion</button>
                    </div>
                </div>
            </div>
        </div>
        <footer class=" text-center text-lg-start">

            <div class="text-center p-3">
                © 2020 Copyright: Gardenergy
            </div>

        </footer>
        </div>
    );
}

export default Login;