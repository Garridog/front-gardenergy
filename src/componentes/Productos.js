import React from 'react';
import jardinera from '../img/jardinera.png'
import jardinera2 from '../img/jardinera2.png'
import jardinera3 from '../img/jardinera3.png'
import '../styles/producto.css';
import Footer from './Footer';

function Productos() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={jardinera} class="d-block w-100 img-fluid" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>81 Bolsas</h5>
                                        <p>Esta jardinera colgable tiene capacidad hasta para 81 plantas.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={jardinera2} class="d-block w-100 img-fluid" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>49 Bolsas</h5>
                                        <p>Esta jardinera colgable tiene capacidad hasta para 49 plantas.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={jardinera3} class="d-block w-100 img-fluid" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>25 Bolsas</h5>
                                        <p>Esta jardinera colgable tiene capacidad hasta para 25 plantas.</p>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm shadow p-3 mb-5 bg-white rounded mt-5 txtproductos">
                        <h3>Lo que ofrecemos</h3>
                        <hr />
                        <h2>PRODUCTO</h2>
                        <p>Los porductos de gardenergy ayudan a reducir el impacto ambiental y economico, ya que con ayuda de las
                        jardineras productoras de energia podremos brindar luz electrica a nuestro hogar.
                        Sus investigaciones aspiran a que se pueda producir unos 3,2 watts por metro cuadrado, por lo que una
                        instalación de 100 metros cuadrados podría proveer de energía para una casa que requiera de unos 2.800
                        kilowatts por año. En conclusion podemos afirmar que este producto de verdad reduce el impacto ambiental,
                        nuestra economia y ademas de todo hacen que nuestro hogar luzca tan radiante y natural.
                                </p>
                    </div>
                </div>
            </div>
            <footer class=" text-center text-lg-start">

                <div class="text-center p-3 mt-2">
                © 2020 Copyright: Gardenergy
                </div>

            </footer>
        </div>
    );
}

export default Productos