import React from 'react';
import Footer from './Footer';
//import '../styles/costos.css';

function Costos(){
    return(
        <div>
        <div className="container">
            <div className="row">
                <div className="col-12 shadow p-3 mb-5 bg-white rounded mt-5 txtcostos">
                    <h2>Características</h2>
                    <hr/>
                    <h1>Costos</h1>
                        <div className="row align-items-start">
                            <div className="col border ps-3 pt-2">
                            <h2>81 Bolsas</h2>
                            <p>Tiene capacidad para 81 plantas, de las cuales depende mucho el tipo de planta que se utilice
                            pero el estimado de productividad electrica es de 8 a 10 bombillas.</p>
                            <br/>
                            <h3>Precio: $1800.00</h3>
                            <br/>
                            <img src="https://media.giphy.com/media/Sv8gc0ip22BdMWBemO/giphy.gif" alt="" class="img-fluid"/>
                        </div>
                        <div className="col border ps-3 pt-2">
                            <h2>49 Bolsas</h2>
                            <p>Tiene capacidad para 49 plantas, de las cuales depende mucho el tipo de planta que se utilice
                            pero el estimado de productividad electrica es de 4 a 6 bombillas.</p>
                            <br/>
                            <h3>Precio: $1500.00</h3>
                            <br/>
                            <img src="https://media.giphy.com/media/Sv8gc0ip22BdMWBemO/giphy.gif" alt="" class="img-fluid"/>
                        </div>
                        <div className="col border ps-3 pt-2">
                        <h2>25 Bolsas</h2>
                        <p>Tiene capacidad para 25 plantas, de las cuales depende mucho el tipo de planta que se utilice
                            pero el estimado de productividad electrica es de 1 a 2 bombillas.</p>
                        <br/>
                        <h3>Precio: $1200.00</h3>
                        <br/>
                        <img src="https://media.giphy.com/media/Sv8gc0ip22BdMWBemO/giphy.gif" alt="" class="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
}

export default Costos;