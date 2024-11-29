import { useContext } from 'react';
import { PersonContext } from '../context/PersonContext';

const Card = () => {
    const { filteredPersonajes } = useContext(PersonContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {filteredPersonajes.length > 0 ? (
                filteredPersonajes.map((personaje) => (
                    <div className="card relative w-64 h-80 flex flex-col items-center justify-center rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
                        key={personaje.id}>
                        <img className="object-cover h-full w-full top-0" src={personaje.image ? personaje.image : '/default.webp'} alt="" />
                        <p className="absolute text-center font-bold bottom-3 bg-white opacity-70 w-full">
                            {personaje.name}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-white text-xl">No se encontraron personajes</p>
            )}
        </div>
    );
};

export default Card;
