import React from 'react';
import Imgcon from '../img/imgcontact.svg';
import Footer from './Footer';
import '../styles/contacto.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


function Contacto(){

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_x3f2wqm', e.target, 'user_e31HuwieRY9fbIeMTMXD5')
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });
    }

    const mostrarAlerta=()=>{
        swal("Datos enviados correctamente");
    }


    return(
        <div>
        <div className="container">
        <div className="row">
            <div className="col-sm mt-5">
                <img src={Imgcon} alt="" className="img-fluid mt-5"/>
            </div>
            <div className="col-sm shadow p-3 mb-5 bg-white rounded mt-5 txtcontacto">
                <h3>Contacto</h3>
                <hr/>
                <form onSubmit={sendEmail} id="contacto" className="form-control">
                <div className="mb-3 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" name="name" id="exampleFormControlInput1" placeholder="Introduzca Nombre Completo"/>
                </div>
                <div className="mb-3 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Telefono</label>
                    <input type="text" className="form-control" name="number" id="exampleFormControlInput1" placeholder="Introduzca Telefono"/>
                </div>
                <div className="mb-3 mx-auto">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Introduzca Correo"/>
                  </div>
                  <div className="mb-3 mx-auto">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Solicitud</label>
                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </div>
                  <button className="btn btn-success" onClick={()=>mostrarAlerta()}>Enviar</button>
                </form>
            </div>
        </div>
    </div>
    <footer className=" text-center text-lg-start">

        <div className="text-center p-3">
            © 2020 Copyright: Gardenergy
        </div>

    </footer>
    </div>
    );
}





export default Contacto;