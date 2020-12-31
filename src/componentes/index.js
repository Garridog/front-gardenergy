import React from 'react';
import logo from '../img/logo.png';
import '../styles/index.css';


function Index(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm mt-5">
                    <img src={logo} className="img-fluid mt-2 rounded-circle position-relative top-50 start-50 translate-middle"/>
                </div>
            </div>
        </div>
    );
}

export default Index;