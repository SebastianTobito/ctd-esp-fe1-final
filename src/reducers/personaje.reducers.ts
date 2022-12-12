import { Reducer } from "@reduxjs/toolkit";
import { Personaje,Episode } from "../types/personaje.types";
import { PersonajesAcciones } from "../actions/personajes.actions";

interface EstadoInicial{
    personajes: Personaje[];
    buscar: string;
    pagina: number;
    favoritos: Personaje[];
    personajeSeleccionado: number;
    episodios: Episode [];
}

const estadoInicial: EstadoInicial = {
    personajes: [],
    buscar: "",
    pagina:1,
    favoritos: [],
    personajeSeleccionado: 0,
    episodios: []
}

export const personajeReducer: Reducer<EstadoInicial, PersonajesAcciones> = (state = estadoInicial, action): EstadoInicial => {
    switch (action.type){
        case "LISTAR_PERSONAJES":
            return {
                ...state,
                personajes: [...action.payload.personajes],
                buscar: action.payload.buscar
            };
        case "BORRAR_PERSONAJE":
            return {
                ...state,
                buscar: action.payload.buscar
            };
        case "AGREGAR_FAVORITO":
            return{
            ...state,
            favoritos:[...state.favoritos.filter((favorito) => favorito.id !== action.payload.favorito.id)]
            }
        case "ELIMINAR_FAVORITO":
            return{
                ...state, 
                favoritos: []
            }
            case "LIMPIAR_FAVORITOS":
                return {
                    ...state,
                    favoritos: []
                }
    
            case "MOSTRAR_DETALLE":
                return {
                    ...state,
                    personajeSeleccionado: action.payload.personajeSeleccionado
                }
    
            case "LISTAR_EPISODIOS":
                return {
                    ...state,
                    episodios: action.payload.episodios
                }
    
            default:
                return {
                    ...state
                };
        }

    }
