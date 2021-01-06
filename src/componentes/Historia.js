import React from 'react';
import Footer from './Footer';
//require('../styles/historia.css') ;


function Historia() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm mt-5">
                        <img src="https://media.giphy.com/media/PijMXSd3tCZUHadrG5/giphy.gif" className="img-fluid"></img>
                    </div>
                    <div className="col-sm mt-5 shadow p-3 mb-5 bg-white rounded txthistoria">
                        <br/>
                        <h2>Descubrimiento</h2>
                        <hr/>
                        <h1>Historia</h1>
                        <p>Gardenergy es una empresa dedicada principalmente a generar electricidad por medio de la naturaleza,
                        la cual es producida a través de la descomposicion de sustancias orgánicas por microorganismos en la
                        tierra donde se liberan electrones capturados por nuestro sistema. Nuestro objetivo principal es
                        economizar el gasto en electricidad, cuidando así tanto el patrimonio de nuestro clientes como el
                        medio ambiente, de tal manera que producimos electricidad a través de la fotosíntesis de las
                        plantas.</p>
                    </div>
                </div>
            </div>
            <footer class=" text-center text-lg-start">

                <div class="text-center p-3">
                    © 2020 Copyright: GardenergyMX
                </div>

            </footer>
        </div>
    );
}

export default Historia;