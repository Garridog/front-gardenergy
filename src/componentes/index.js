import React from 'react';
import logo from '../img/logo.png';
import '../styles/index.css';
import Facebook from '../img/facebook-logo.png';
import Twitter from '../img/twitter.png';
import Instagram from '../img/instagram-logo.png';
import Whatsapp from '../img/whatsapp.png';


function Index(){
    return(
        <div className="container">
            <div className="Redes">
                    <a href="https://www.facebook.com/GardenergyMx-102859605080826/?view_public_for=102859605080826"_target="_blank"><img src={Facebook} className="img-fluid " /></a>
                    <a href="https://twitter.com/gardenergy" target="_blank"><img src={Twitter} className="img-fluid ms-4" /></a>
                    <a href="https://www.instagram.com/gardenergy.mx/" target="_blank"><img src={Instagram} className="img-fluid ms-4" /></a>
                    <a href="https://wa.me/5587959303" target="_blank"><img src={Whatsapp} className="img-fluid ms-4" /></a>
                </div>
            <div className="row">
                <div className="col-sm mt-5">
                    <img src={logo} className="img-fluid mt-2 rounded-circle position-relative top-50 start-50 translate-middle"/>
                </div>
            </div>
        </div>
    );
}

export default Index;