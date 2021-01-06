import React from 'react';
//import '../styles/ubicacion.css';


function Ubicacion() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm mt-5 shadow p-3 mb-5 bg-white rounded txtubicacion">
                        <h1>Ubicación</h1>
                        <hr />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.907544840398!2d-99.16172878509353!3d19.416400286893474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3ba7378057%3A0x2863c0e368b4750e!2sPlaza%20Luis%20Cabrera%2C%20Roma%20Nte.%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1609618583373!5m2!1ses!2smx" width="100%" height="600"></iframe>
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

export default Ubicacion;