import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { FC } from "react";
import  Personaje  from "../../types/personaje.types";


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
 interface IGrillaProps {
    personajes: Personaje[]
}

 const GrillaPersonajes:FC<IGrillaProps> = ({personajes}) => {

    return <div className="grilla-personajes">
       <TarjetaPersonaje personajesPaginados={personajes} />
       
    </div>
}
 
export default GrillaPersonajes;