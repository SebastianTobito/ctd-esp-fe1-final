import './filtros.css';
import { personajesByName } from '../../actions/personajes.actions';
import { useDispatch } from "react-redux";
import { FC } from 'react';
import { useSelector } from '../../store/store';


const Filtros:FC = () => {

    const dispatch = useDispatch();

    const buscador = useSelector(state => state.personajes.buscar);


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" autoComplete='off' value={buscador} onChange = { e => dispatch(personajesByName(e.target.value))} />
    </div>
}

export default Filtros;