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
             <div id="redessociales">
                    <a class="smedia facebook" target="_blank" href="https://www.facebook.com/GardenergyMx-102859605080826/?view_public_for=102859605080826">Uno</a>
                    <a class="smedia twitter" target="_blank" href="https://twitter.com/gardenergy">Dos</a>
                    <a class="smedia instagram" target="_blank" href="https://www.instagram.com/gardenergy.mx/">Tres</a>
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