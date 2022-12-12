import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { getPersonajes } from "../services/getPersonajes";
import { personajeByName } from "../services/getPersonajeByName";
/* import { getEpisodio } from "../services/getEpidosio"; */
import { Episode, Personaje } from "../types/personaje.types";
import { IRootState } from "../store/store";

interface ListarPersonajesPaginadosAction extends Action {
  type: "LISTAR_PERSONAJES",
  payload: {
    personajes: Personaje[],
    buscar: string
  }
}

interface BorrarPersonajeAction extends Action {
  type: "BORRAR_PERSONAJE",
  payload: {
    buscar: string
  }
}

interface AgregarFavoritoAction extends Action {
  type: "AGREGAR_FAVORITO",
  payload: {
    favorito: Personaje
  }
}

interface EliminarFavoritoAction extends Action {
  type: "ELIMINAR_FAVORITO",
    payload: {
      favorito: Personaje
    }
}

interface LimpiarFavoritoAction extends Action {
  type: "LIMPIAR_FAVORITOS",
    payload: {
      favoritos: Personaje[]
    }
}

interface DetallePersonajeAction extends Action {
  type: "MOSTRAR_DETALLE",
    payload: {
      personajeSeleccionado: number
    }
}

interface ListarEpisodiosAction extends Action {
  type: "LISTAR_EPISODIOS",
    payload: {
      episodios: Episode[]
    }
}

export const listarPersonajesPaginados: ActionCreator<ListarPersonajesPaginadosAction> = (personajes:Personaje[], string) => {
  return {
    type: "LISTAR_PERSONAJES",
    payload: {
      personajes: personajes,
      buscar: string
    }
  }
}

export const borrarPersonaje: ActionCreator<BorrarPersonajeAction> = () => {
  return {
    type: "BORRAR_PERSONAJE",
    payload: {
      buscar: ""
    }
  }
}

export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (favorito:Personaje) => {
  return {
    type: "AGREGAR_FAVORITO",
    payload: {
      favorito: favorito
    }
  }
} 

export const eliminarFavorito: ActionCreator<EliminarFavoritoAction>=(favorito:Personaje) => {
  return {
    type: "ELIMINAR_FAVORITO",
    payload: {
      favorito: favorito
    }
  }
}

export const limpiarFavoritos: ActionCreator<LimpiarFavoritoAction>=(personaje: Personaje[]) => {
  return {
    type: "LIMPIAR_FAVORITOS",
    payload: {
      favoritos: personaje
    }
  }
}

export const detallePersonaje = (personajeSeleccionado: number) => {
  return {
    type: "MOSTRAR_DETALLE",
    payload: {
      personajeSeleccionado: personajeSeleccionado
    }
  }
}

export const listarEpisodios = (episodios: Episode[]) => {
  return {
    type: "LISTAR_EPISODIOS",
    payload: {
      episodios: episodios
    }
  }
}

export interface ListarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAcciones>{}

export const listarPersonajes = (pag: number):ListarPersonajesThunkAction => {
  return async (dispatch) => {
    try {
      const personajes = await getPersonajes(pag);
      dispatch(listarPersonajesPaginados(personajes, ""));

		} catch (error) {
      const errorMessage = new Error('¡Ups! Algo salió mal...');
      return errorMessage;
    }
  };
}

export interface PersonajesByNameThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAcciones>{}

export const personajesByName = (nombre: string): PersonajesByNameThunkAction => {
  return async (dispatch) => {
    try {
      const resultado = await personajeByName(nombre);
      dispatch(listarPersonajesPaginados(resultado, nombre));
		} catch (error) {
      const errorMessage = new Error('¡Ups! Algo salió mal...');
      return errorMessage;
    }
  };
}

export type PersonajesAcciones = ListarPersonajesPaginadosAction | BorrarPersonajeAction | AgregarFavoritoAction | EliminarFavoritoAction | LimpiarFavoritoAction | DetallePersonajeAction | ListarEpisodiosAction


/* export const listarTodosEpisodios = (listarEpisodios: any) => {
  return async (dispatch:any) => {
    try {

      // Acá necesito iterar el array de episodios (de listarEpisodios) para
      // Pasale hacer una petición por cada endpoint del array
      // Pero no me salió...

      const resultado = await getEpisodio(url);
      
      
		} catch (error) {
      const errorMessage = new Error('¡Ups! Algo salió mal...');
      return errorMessage;
    }
  };
} */