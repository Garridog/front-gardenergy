import React from "react";
import {removeSession, getUser} from '../utils/Common';
import { Redirect } from 'react-router-dom';

function Logout(props) {

    if(getUser() === ""){
        return <div></div>;
    }

    const handleLogout = () =>{
        removeSession();
        window.location.href = '/Index'
    }

    return (
        <button className="btn btn-danger"  onClick={handleLogout} value="salir">Cerrar Sesión</button>
    );
}

export default Logout;