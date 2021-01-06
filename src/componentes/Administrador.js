import React from 'react';
import { Redirect } from 'react-router';
import { getUser, removeSession } from '../utils/Common';
import Logout from './logout';
import '../styles/administrador.css';

function Administrador(props) {

    if (getUser() == "") {
        window.location.href = './Index'
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="container mt-5 shadow p-3 mb-5 bg-white rounded font">
                        <div className="col-sm text-center mt-2"><h1>Administración de Gardenergy</h1></div>
                        <hr />
                        <h2>Ganacias</h2>
                        <br />
                        <h3>Jardinera de Pared 81 Bolsas</h3>
                        <p>ROI = (1200 - 888.32)/888.32 = 0.35</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success bar1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        <br />
                        <h3>Jardinera de Pared 36 Bolsas</h3>
                        <p>ROI = (1500-1025.32)/1025.32 = 0.46</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning bar2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        <br />
                        <h3>Jardinera de Pared 25 Bolsas</h3>
                        <p>ROI = (1800-1148.32)/1148.32 = 0.56</p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger bar3 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>

                        <hr />

                        <div class="row">
                            <div class="col-sm-6">
                                <div className="col-sm proceso"><h2>Proceso de Negocio</h2></div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Entradas</h5>
                                        <p class="card-text">
                                            <ul>
                                                <li>Jardinera de Pared (25, 36, 81 Bolsas)</li>
                                                <li>Plantas</li>
                                                <li>Flores</li>
                                                <li>Tierra</li>
                                                <li>Agua</li>
                                                <li>8 Pijas</li>
                                                <li>8 Tornillos</li>
                                                <li>Broca</li>
                                                <li>Taladro</li>
                                                <li>Bombilla LED</li>
                                                <li>Cable de Cobre</li>
                                                <li>Malla de Metal o Aluminio</li>
                                                <li>Cautin</li>
                                                <li>Soldadura</li>
                                                <li>Socket</li>
                                            </ul></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mt-5">
                                    <div class="card-body">
                                        <h5 class="card-title">Proceso</h5>
                                        <p class="card-text">Iniciamos colocando la jardinera de pared en el cuarto donde queremos que se produzca la energía a través de la bombilla. Para colocar la jardinera de pared debemos colocar 8 pijas con tornillos, los cuales primero tenemos que poner en la pared taladrándola con la medida de los espacios entre los orificios de la jardinera, proseguiremos a colocar la jardinera en la pared atornillando cada uno de los orificios en la pared. En cada bolsa dentro de la jardinera colocaremos una malla de metal a la medida de la bolsa que únicamente cubra la parte de abajo de la bolsa, para eso tenemos que cortar la malla metálica de aproximadamente 5cm x 5cm, después conectamos el cable de cobre a la malla y cubrimos toda la malla con tierra para plantar la planta que deseamos y ese proceso se realizará en todos los bolsillos dependiendo el tamaño de la jardinera. Cada cable irá conectado a un socket modificado para poder hacer la combinación del cable de cobre al socket y al final podemos colocar la bombilla de nuestro gusto. De esta manera nos brindará la luz necesaria para iluminar un cuarto, todo dependiendo del tipo y consumo de la bombilla.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mt-5">
                                    <div class="card-body">
                                        <h5 class="card-title">Salida</h5>
                                        <p class="card-text">Jardinera ecológica que produce energía luminosa de Gardenergy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <h2>Lista de Estrategias</h2>
                        <div class="card">
                            <div class="card-header">
                                Estrategia y Listado
                        </div>
                            <div class="card-body">
                                <p class="card-text">Las estrategias que voy a crear para dar a conocer mi página serán mediante redes sociales. Las redes sociales utilizadas serán Twitter, Facebook e Instagram, de haber alguna duda mayor añadiré un código QR que los llevará a una conversación mediante WhatsApp. Se utilizará una publicación en las redes sociales donde se indique el uso principal, el cual es crear energía eléctrica con plantas. Posteriormente podría agregarse una alguna promoción por primer compra o dependiendo el número de jardineras que se adquieran se adjunte algún descuento; Un ejemplo podría ser que si adquieren una jardinera de 81 bolsas puedan llevarse una de 25 bolsas a mitad de precio, utilizando las palabras perfectas dentro de la publicación se puede llamar la atención de muchísimas personas y se dará a conocer.</p>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Email</li>
                                </ul>
                            </div>
                        </div>

                        <hr />

                        <h2>Lista/Costo de Materiales de Gardenergy</h2>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-primary">Jardinera de Pared (25, 36, 81 Bolsas) - $649 (81 bolsas), $389 (25 bolsas), $526 (36 bolsas).</li>
                            <li class="list-group-item">Plantas - $60</li>
                            <li class="list-group-item list-group-item-primary">Flores - 40 semillas ($28) - $56</li>
                            <li class="list-group-item">Tierra - 2 kg ($50)</li>
                            <li class="list-group-item list-group-item-primary">Agua - $0</li>
                            <li class="list-group-item">8 Pijas - 100 pzas ($84) - $6.72</li>
                            <li class="list-group-item list-group-item-primary">1 Broca -  $6</li>
                            <li class="list-group-item">2 Bombillas Led - $22 c/uno - $44</li>
                            <li class="list-group-item list-group-item-primary">10m Cable de Cobre - 100 m ($204) - $4.90 </li>
                            <li class="list-group-item">Malla de metal o aluminio - $182.70</li>
                            <li class="list-group-item list-group-item-primary">Cautin - $50</li>
                            <li class="list-group-item">Soldadura - $39</li>
                        </ul>

                        <hr />

                        <h2>Aliados</h2>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Fundación La Planta</h5>
                                        <p class="card-text">Fundación La Planta es una Organización de la Sociedad Civil, sin fines de lucro, que desde el año 2003 promueve la cultura de la sustentabilidad ambiental bajo el principio de educar para actuar y apoya la concientización de diversos grupos sociales sobre la necesidad de preservar los recursos naturales y la diversidad biológica.</p>
                                        <a href="www.fundacionlaplanta.org.mx/" target="_blank" class="btn btn-success">Fundación La Planta</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Yosoo</h5>
                                        <p class="card-text">La marca Yosso que es la marca encargada de producir las jardineras colgantes para la pared con la mejor calidad posible y así mismo dejarlas a un precio accesible por asociación, asi mismo cuenta con una grande galeria de accesorios para jardineria y otras herraientas para el hogar.</p>
                                        <a href="https://www.amazon.com.mx/s?k=Yosoo&ref=bl_dp_s_web_19605197011" target="_blank" class="btn btn-success">Yosoo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div class="card border-success mb-3 al1">
                        <div class="card-header bg-transparent border-success">Yosoo</div>
                        <div class="card-body text-success">
                            <p class="card-text">La marca Yosso que es la marca encargada de producir las jardineras colgantes para la pared con la mejor calidad posible y así mismo dejarlas a un precio accesible por asociación</p>
                        </div>
                        <div class="card-footer bg-transparent border-success">www.yosoo.com</div>
                    </div>

                    <div class="card border-success mb-3 al1">
                        <div class="card-header bg-transparent border-success">Fundacion La Planta</div>
                        <div class="card-body text-success">
                            <p class="card-text">Fundación La Planta es una Organización de la Sociedad Civil, sin fines de lucro, que desde el año 2003 promueve la cultura de la sustentabilidad ambiental bajo el principio de educar para actuar y apoya la concientización de diversos grupos sociales sobre la necesidad de preservar los recursos naturales y la diversidad biológica.</p>
                        </div>
                        <div class="card-footer bg-transparent border-success">www.fundacionlaplanta.org.mx/</div>
                    </div> */}

                    </div>
                    <div className="col-sm text-right mb-5"><Logout></Logout></div>
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

export default Administrador;