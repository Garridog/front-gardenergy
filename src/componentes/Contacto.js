import React from 'react';
import Imgcon from '../img/imgcontact.svg';
import Footer from './Footer';

function Contacto(){
    return(
        <div>
        <div class="container">
        <div class="row">
            <div class="col-sm mt-5">
                <img src={Imgcon} alt="" class="img-fluid mt-5"/>
            </div>
            <div class="col-sm shadow p-3 mb-5 bg-white rounded mt-5 txtcontacto">
                <h3>Contacto</h3>
                <hr/>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre Completo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Introduzca Nombre Completo"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Introduzca Telefono"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Introduzca Correo"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Solicitud</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </div>
                  <button class="btn btn-primary">Enviar</button>
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

export default Contacto;