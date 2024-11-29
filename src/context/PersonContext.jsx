import { createContext, useState, useEffect } from 'react';

export const PersonContext = createContext();

export function PersonContextProvider(props) {
    const [personajes, setPersonajes] = useState([]);
    const [filteredPersonajes, setFilteredPersonajes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const ObtenerPersonajes = async () => {
            const response = await fetch("https://potterhead-api.vercel.app/api/characters");
            const data = await response.json();
            setPersonajes(data);
            setFilteredPersonajes(data); // Inicialmente mostrar todos los personajes
        };

        // Llamar a la función para obtener personajes
        ObtenerPersonajes();
    }, []);

    useEffect(() => {
        // Filtrar personajes según el término de búsqueda
        setFilteredPersonajes(
            personajes.filter((personaje) =>
                personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, personajes]);

    return (
        <PersonContext.Provider 
            value={{
                personajes,
                filteredPersonajes,
                setSearchTerm,
            }}
        >
            {props.children}
        </PersonContext.Provider>
    );
}
