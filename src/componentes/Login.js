import React, { useState } from 'react';
import { setUserSession } from '../utils/Common';
import axios from 'axios';
import { Redirect, withRouter, Link } from 'react-router-dom';

import '../styles/login.css';
import Adm from '../img/imgadmin.svg';
import Footer from './Footer';
import Administrador from './Administrador';

function Login(props) {
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const username = GetInputValue("");
    const password = GetInputValue("");

    const handleLogin = () => {
        setLoading(true);
        axios
            .post("https://gardenergy-back.herokuapp.com/login",
                { username: username.value, password: password.value }).
            then((response) => {
                console.log(response);
                console.log(response.payload);
                if (response.data.payload) {
                    setUserSession(response.data.payload);
                    window.location.href = './Administrador'
                } else {
                    setError("Usuario Invalido");

                }
                setLoading(false);
            }).catch((err)=>{
                setLoading(false);
            });
    };


    return (
        <div>
            <div className="container mt-5 shadow p-3 mb-5 bg-white rounded lcontainer">
                <div className="row">
                    <div className="col-sm mt-5">
                        <img src={Adm} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm mt-5 txtlogin">
                        <h1 className="text-center adm">Administrador</h1>
                        <hr />
                        <h2 className="text-center mt-3">Inicia Sesion</h2>
                        <div className="mb-3 text-center">
                            <label className="form-label">Usuario</label>
                            <input type="text" className="form-control" {...username} aria-describedby="emailHelp" />
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" {...password} />
                            <label>{error}</label>
                            <input type="button" value={Loading ? 'Cargando...' : 'Entrar'}
                                disabled={Loading}
                                className="btn btn-primary mx-auto d-block mt-3" onClick={handleLogin} />
                        </div>
                    </div>
                </div>
            </div>
            <footer className=" text-center text-lg-start">

                <div className="text-center p-3">
                    © 2020 Copyright: Gardenergy
            </div>

            </footer>
        </div>
    );
}

const GetInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

export default Login;