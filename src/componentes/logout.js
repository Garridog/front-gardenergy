import React from "react";
import {removeSession, getUser} from '../utils/Common';
import { Redirect } from 'react-router-dom';

function Logout(props) {

    if(getUser() == ""){
        return <div></div>;
    }

    const handleLogout = () =>{
        removeSession();
        return <Redirect to="/Login" />
    }

    return <div><input className="logout" type="button" onClick={handleLogout} value="salir" /></div>
}

export default Logout;