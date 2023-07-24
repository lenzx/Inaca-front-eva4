import React from "react";
import '../styles/ListaDestacados.css'
import CardDestacado from "../components/CardDestacado";
import zeldaOcarina from '../assets/img/The_Legend_of_Zelda_Ocarina_of_Time.webp'
import tonyHawks from '../assets/img/tony-hawk-2.avif'
import gta from '../assets/img/1366_2000_1_11.jpg'
import soulScalibur from "../assets/img/soul-calibur-VI-lanzamiento-GX.jpg"
import mario from "../assets/img/Mario.jpeg"
import red from '../assets/img/red.jpeg'
const ListaDestacados = () => {
    return(
        <>
        <div className="justify-content-between background">
        <h1 style={{color: "white"}}>Juegos Destacados</h1>
            <div className="row container-fluid">
                <CardDestacado
                titulo={"The Legend of Zelda: Ocarina of Time"}
                imagen={zeldaOcarina}
                descripcion={"En el reino de Hyrule, un joven llamado Link se entera de los malévolos planes de Ganondorf, quien busca obtener el poder de la Trifuerza para dominar el mundo. Guiado por la Princesa Zelda y el Árbol Deku, Link debe recolectar piedras espirituales y usar la Ocarina del Tiempo para viajar entre el pasado y el futuro. Tras ser sellado por siete años, Link despierta como el Héroe del Tiempo en un Hyrule desolado. Debe explorar mazmorras, enfrentarse a enemigos y despertar a los Sabios para enfrentar a Ganondorf en una épica batalla final y restaurar la paz en el reino."}
                />

                <CardDestacado
                titulo={"Tony Hawk's Pro Skater 2"}
                imagen={tonyHawks}
                descripcion={"Tony Hawk's Pro Skater 2 es un videojuego de skateboarding lanzado en el año 2000. Como secuela del exitoso THPS, cuenta con una amplia selección de famosos skaters profesionales y ofrece emocionantes niveles alrededor del mundo. Los jugadores deben realizar trucos y combos para obtener altas puntuaciones y cumplir objetivos específicos en un límite de tiempo. Gracias a sus gráficos mejorados, mecánicas de juego innovadoras y una destacada banda sonora, el juego es considerado uno de los mejores en su género, siendo fundamental para popularizar los videojuegos de skate."}
                />

                <CardDestacado
                titulo={"Grand Theft Auto IV"}
                imagen={gta}
                descripcion={"Grand Theft Auto V (GTA V) es un emocionante juego de acción y aventura lanzado en 2013. Ambientado en el ficticio estado de San Andreas, el juego sigue las vidas interconectadas de tres protagonistas: Michael, Franklin y Trevor. Los jugadores pueden alternar entre estos personajes mientras realizan diversas actividades y misiones en un mundo abierto. Desde atracos y persecuciones hasta carreras ilegales, GTA V ofrece una experiencia inmersiva con gráficos impresionantes y una narrativa apasionante, lo que lo convierte en uno de los mejores videojuegos de su género y un éxito en la popularización de la serie Grand Theft Auto."}
                />

                <CardDestacado
                titulo={"SoulCalibur"}
                imagen={soulScalibur}
                descripcion={"SoulCalibur es un juego de lucha, que salió en 1999, que ya se ha convertido en un clásico del género. Ambientado en una era de espadas y almas aventureras, el juego cuenta con una mecánica de combate profunda y fluida. Hay una amplia variedad de personajes, cada uno con su propio estilo de lucha y arma única. Desde una guerrera Griega hasta un híbrido entre un cenobita y Marilyn Manson contorsionista, pasando por un Cervantes pirata y una ‘mistress’ con poca ropa y un látigo-espada, que por cierto, es hija de Cervantes. Los distintos escenarios, que además contaban con la posibilidad de tirar al rival por alguno de sus bordes y terminar antes el combate, fueron todo un espectáculo para la vista en la época."}
                />

                <CardDestacado
                titulo={"Super Mario Galaxy"}
                imagen={mario}
                descripcion={"Super Mario Galaxy es un juego de plataformas en el que Mario se embarca en una aventura espacial para rescatar a la princesa Peach de las garras de Bowser, cero novedad en esto. Cuenta con una mecánica única de gravedad y planetas en forma de esferas, lo que le dio ese toque tan especial y nueva forma de jugar, que lo llevan a este ansiado puesto número cinco según Metacritic. El protagonista es Mario, que para eso el título del juego lleva su nombre y bueno, poco más que añadir que fue llevar las aventuras del fontanero que aspiraba a tener la sangre azul al espacio exterior, o el concepto de espacio exterior que tiene Nintendo."}
                />
                
                <CardDestacado
                titulo={"Red Dead Redemption 2"}
                imagen={red}
                descripcion={"Red Dead Redemption 2 es un increíble mundo abierto ambientado en el salvaje oeste. Sigue la historia de Arthur Morgan, un forajido miembro de la banda de Dutch van der Linde y cualquier cosa que pueda decir, se queda corta. Es cierto que al comienzo tiene un ritmo pausado, tanto que a algunos jugadores no les gustó y se les hizo pesado, pero es la diferencia entre este Red Dead Redemption y un GTA, tiene sentido mantener ese ritmo, dejar que el jugador se vaya familiarizando con el mundo, con la caza y factor de supervivencia/calidad de vida que incluye este juego. Su historia también es memorable, más allá de unos gráficos que rompieron moldes en 2018 y de genitales equinos que se adaptaban a la temperatura ambiental."}
                />

            </div>
        </div>
        </>
    )
}

export default ListaDestacados