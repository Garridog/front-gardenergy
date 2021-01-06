import React from 'react';
import logo from '../img/logo.png';
//import '../styles/index.css';


function Index() {
    return (
        <div className="container">
            <div class="icon-bar">
                <a href="https://www.facebook.com/GardenergyMx-102859605080826/?view_public_for=102859605080826" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/gardenergy" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/gardenergy.mx/" target="_blank" class="youtube"><i class="fa fa-instagram"></i></a>
            </div>

            <div className="row">
                <div className="col-sm mt-5">
                    <img src={logo} className="img-fluid mt-2 rounded-circle position-relative top-50 start-50 translate-middle" />
                </div>
            </div>
        </div>
    );
}

export default Index;