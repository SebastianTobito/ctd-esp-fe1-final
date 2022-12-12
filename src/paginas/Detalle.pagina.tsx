import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useSelector } from "../store/store";
import { FC } from "react";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

const PaginaDetalle:FC = () => {

    const personajeID =useSelector(state => state.personajes.personajeSeleccionado);
    const personajes = useSelector(state => state.personajes.personajes);
    const seleccionado = (id: number) => personajes?.find(p => p.id === id);
    const personaje = seleccionado(personajeID);

    return <div className="container">
        <h3>{personaje?.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje?.image} alt={personaje?.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{personaje?.name}</p>
                    <p>Planeta: {personaje?.location.name} </p>
                    <p>Genero: {personaje?.gender} </p>
                </div>
                {/* <BotonFavorito personaje={personaje} /> */}
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
           {/*  <TarjetaEpisodio episodios={personaje?.episode} /> */}
        </div>
    </div>
}

export default PaginaDetalle