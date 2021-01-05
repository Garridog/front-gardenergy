import React from 'react';
import { Redirect } from 'react-router';
import { getUser, removeSession } from '../utils/Common'; 
import Logout from './logout';

function Administrador(props){

    if (getUser() == "") {
        window.location.href = '/Administrador'
    }

    return(
        <div className="container mt-5 shadow p-3 mb-5 bg-white rounded">
            <div className="col-sm"><h1>Administración de Gardenergy</h1></div>
            <div className="col-sm"><Logout></Logout></div>
            <hr/>
        </div>
    );
}

export default Administrador;