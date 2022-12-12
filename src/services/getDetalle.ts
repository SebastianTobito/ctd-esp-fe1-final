import { Personaje } from "../types/personaje.types";

export const getPersonajes = async (id:number) : Promise<Personaje[] | undefined > =>{

    const url = `https://rickandmortyapi.com/api/character/${id}`;

    try { 
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200){
            return data;
        } else if (response.status === 404) {
            throw new Error ("No se encontró el personaje");
        }
    } catch{
        console.warn("Algo salió mal");
        
    }
};