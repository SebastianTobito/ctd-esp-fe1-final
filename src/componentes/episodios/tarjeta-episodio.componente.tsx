import './tarjeta-episodio.css';
import { FC } from 'react';
import { Episode } from '../../types/personaje.types';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
 interface IEpidosioProps {
    episodios: Episode[];
}


const TarjetaEpisodio:FC<IEpidosioProps> = ({episodios}) => {

    /* console.log(episodios); */

    return <>
    
    {
        episodios?.map( e =>
            <div className="tarjeta-episodio">
                <h4>{e}</h4>
                
                {/* <h4>Close Rick-counters of the Rick Kind</h4>
                <div>
                    <span>S01E01</span>
                    <span>Lanzado el: April 7, 2014</span>
                </div> */}
            </div>
        )
    }

    </>
}

export default TarjetaEpisodio;