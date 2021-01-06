import React from 'react';
import Violeta from '../img/violetaafricana.jpg';
import Costilla from '../img/costillaadan.jpg';
import Anturio from '../img/anturiorojo.jpg';
import Ficus from '../img/ficus.jpg';
import Cactus from '../img/cactus.jpg';
import Potus from '../img/potus.jpg';
import Cintas from '../img/cintas.jpg';
import Peperomia from '../img/peperomia.jpg';
import Espatifilo from '../img/espatifilo.jpg';
import Espina from '../img/espina.jpg';
import Footer from './Footer';
//import '../styles/catalogo.css';

function Catalogo() {
    return (
        <div>
        <div className="container">
            <div className="form">
                <div class="col-sm shadow p-3 mb-5 bg-white rounded mt-5 txtcat">
                    <h2>Plantas</h2>
                    <hr />
                    <h1>Catálogo</h1>
                    <br />
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={Violeta} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Violeta Africana</h5>
                                    <p class="card-text">La violeta africana (Saintpaulia) no solo es una de las plantas de
                                    interior más resistentes, sino también está en el top ten de las más agradecidas. Si
                                    la pones en un lugar protegido y expuesto al sol es más que probable que florezca
                                    más de una vez al año. Al ser una planta originaria del desierto, no se debe regar
                                    mucho y nunca mojándola por encima. Se pone agua en el plato de debajo y se deja que
                                    absorba.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Costilla} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Costilla de Adana</h5>
                                    <p class="card-text">Popularmente conocida como Costilla de Adán por sus hojas en forma
                                    de costilla, la Monstera deliciosa es una planta trepadora que resulta ideal para
                                    ambientes con poca luz. Originaria de la frondosa selva, puede sobrevivir con muy
                                    poca luz, motivo por que también se la suele ver a menudo en muchas porterías. Pero
                                    eso sí, le gusta la humedad (aunque no el encharcamiento). </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Anturio} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Anturio Rojo</h5>
                                    <p class="card-text">El anturio (Anthurium), además de ser una de las flores más
                                    utilizadas en los ramos y centros flores que se hacen hoy en día, es una de las
                                    plantas de interior más resistentes, fáciles de mantener y agradecidas. Y es que
                                    florece prácticamente todo el año y siempre está bonito. Para ello, requiere luz
                                    indirecta, mantener la tierra humedecida (no encharcada), y pulverizar agua sobre
                                    las hojas para que no se sequen. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Ficus} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ficus Benjamina</h5>
                                    <p class="card-text">El ficus benjamina y todas las variedades de ficus reinan en las
                                    casas desde hace años. ¿Por qué? Pues porque con poquísimos cuidados y cero
                                    habilidad para cuidar las plantas tienes un frondoso rincón verde en casa. Solo
                                    regar cuando la tierra deje de estar humedecida y sin encharcar.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Cactus} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Cactus y Crasas</h5>
                                    <p class="card-text">Tanto los cactus como las plantas crasas o suculentas son las
                                    reinas de las plantas resistentes. Al ser originarias de desiertos y zonas con
                                    condiciones extremas, requieren poquísimos cuidado por no decir casi nulos. Lo único
                                    que requieren es estar ubicadas en zonas soleadas o con la mayor exposición solar, y
                                    mejor regarlas poco o nada que mucho. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Potus} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Potus</h5>
                                    <p class="card-text">El potus o photos (Epipremnum aureum) es una de las plantas de
                                    interior más agradecidas que existen. No solo no requiere casi cuidados, sino que
                                    incluso puede sobrevivir solo con agua. Pon un tallo con uno de los extremos dentro
                                    de un recipiente con agua y verás como, poco a poco, va desarrollando raíces y
                                    creciendo como si nada. Y puede sobrevivir así meses y meses. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Cintas} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Cintas</h5>
                                    <p class="card-text">Las cintas (Chlorophytum comosum), conocidas antiguamente como las
                                    malas madres porque sacan a sus retoños en unos tallos colgantes como si los
                                    expulsaran de la maceta, son una de esas plantas que hay en casi todas las casas de
                                    las abuelas. La variedades con las hojas ribeteadas requieren más luz que las que
                                    son totalmente verdes. Pero aguantan en casi cualquier ubicación, desde las más
                                    soleadas a las más sombreadas. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Peperomia} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Peperomia</h5>
                                    <p class="card-text">Desde hace algún tiempo se han puesto muy de moda las peperomias.
                                    Hay muchísimas variedades con infinidad de aspectos distintos, pero todas tienen
                                    como denominador común su resistencia. Necesitan algo más de agua que las plantas
                                    crasas o suculentas, pero no mucha tampoco. Y aguantan bien en ambientes en los que
                                    no tengan mucho sol directo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Espatifilo} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Espatifilo</h5>
                                    <p class="card-text">Los espatifilos (Spathiphyllum), esta planta de brillantes hojas
                                    verdes y flores blancas que recuerdan a las calas o lirios de agua, aguantan un
                                    bombardeo y, además, limpian el aire. Sí, sí. Según los expertos, esta planta tiene
                                    la capacidad de filtrar y retener los elementos tóxicos del aire. Mejor luz
                                    indirecta y agua sin cal si no quieres que se le sequen las puntas de las hojas.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={Espina} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Espina de Cristo</h5>
                                    <p class="card-text">La espina de Cristo (Euphorbia milii) es otra de esas plantas de
                                    toda la vida que se han dejado de ver en muchas casas, pero que en otras se continúa
                                    adorando literalmente. Y es que, además de ser muy resistente, tiene una floración
                                    preciosa siempre y cuando estén en un lugar bien soleado.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Catalogo;