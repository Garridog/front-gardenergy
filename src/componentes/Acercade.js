import React from 'react';
import '../componentes/Footer';
import Footer from '../componentes/Footer';
import '../styles/acercade.css'

function Acercade() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm mt-5">
                        <img className="img-fluid mt-3" src="https://media.giphy.com/media/5tdqXvWgmu5JymwzM0/giphy.gif" alt="" />
                    </div>
                    <div className="col-sm shadow p-3 mb-5 bg-white rounded mt-5 txtacerca">
                        <h2>¿Como Funciona?</h2>
                        <hr/>
                        <h1>Acerca De</h1>
                        <br/>
                        <iframe className="img-fluid" src="https://www.youtube.com/embed/eSTveDOtAb8"></iframe>
                        <br/><br/>
                        <p>Como podemos observar en el video, las plantas son un gran almacenamiento de energia al momento de
                        producir la fotosintesis, toda ese energia que producen nosotros la podemos utilozar como energia
                        electrecia que eso nos brindara mayor utilidad al momento prender bombillas o utilizar algun
                        dispositivo con energia electrica.</p>
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

export default Acercade;