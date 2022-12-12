export const getEpisodio = async (url:string) => {

    try { 
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200){
            return data;
        } else if (response.status === 404){
            throw new Error("No se encontró el episodio");
        }
        
    } catch {
        console.warn("Algo salió mal");
        
        
    }
};