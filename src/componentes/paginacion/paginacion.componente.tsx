import './paginacion.css';
import React, { FC } from 'react';
import { useSelector } from '../../store/store';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */

interface IPaginacionProps {
    pagina: number,
    setPagina: React.Dispatch<React.SetStateAction<number>>
}

/* type IPaginacionProps = {
    pagina: number,
    setPagina: React.Dispatch<React.SetStateAction<number>>
} */

const Paginacion:FC<IPaginacionProps> = ({ pagina, setPagina }) => {

    const cantidadPersonajes = useSelector((state) => state.personajes.personajes.length);

    return <div className="paginacion">
        <button
            disabled={ pagina === 1 ? true : false }
            className={"primary"}
            onClick={ () => setPagina((prev: number) => prev-1) }
        >
            Anterior
        </button>

        <button
            disabled={ pagina === 42 || cantidadPersonajes < 20 ? true : false }
            className={"primary"}
            onClick={ () => setPagina((prev: number) => prev+1) }
        >
            Siguiente
        </button>
    </div>
}

export default Paginacion;