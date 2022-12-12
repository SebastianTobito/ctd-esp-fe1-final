import { Personaje } from "../types/personaje.types";

export const personajeByName =async (name:string): Promise<Personaje[] | undefined> => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`; 
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200){
            return data.results;
        } else if (response.status === 404){
            throw new Error ("No se encontró el personaje");
        }
    } catch {
        console.warn("Algo salió mal");
        
        
    }
}