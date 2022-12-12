interface Location {
    name:string;
}

export interface Episode {
    episode: string[];
}

export interface Personaje {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    gender: string;
    episode: Episode;
    location: Location;
}

export default Personaje;