import { useContext, useState } from 'react';
import { PersonContext } from '../context/PersonContext';
import ImageChar from './ImageChar';
import Modal from "./Modal";
import {useTranslation} from 'react-i18next';

const Card = () => {
    
    const { filteredPersonajes } = useContext(PersonContext);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const {t} = useTranslation();
    
    const handleCardClick = (personaje) => {
        setModalContent(personaje);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setModalContent(null);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {filteredPersonajes.length > 0 ? (
                    filteredPersonajes.map((personaje) => (
                        <div
                            className="card relative w-64 h-94 flex flex-col items-center justify-between bg-blue-950 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                            key={personaje.id}
                            onClick={() => handleCardClick(personaje)}
                        >
                            <ImageChar src={personaje.image ? personaje.image : '/default.webp'} className="object-cover h-56 w-full" />
                            <div className="p-4 w-full text-center">
                                <p className="text-lg font-bold text-white">{personaje.name}</p>
                                <p className="text-lg font-bold text-white">Gender: {personaje.gender}</p>
                                <button className="mt-2 text-sm bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition-all duration-300">
                                    {t('view_char')}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-xl">{t('char_not_found')}</p>
                )}
            </div>
            <Modal 
                isVisible={isModalVisible} 
                onClose={handleCloseModal}
                content={modalContent && (
                    <div className="flex flex-row gap-5">
                        <img src={modalContent.image ? modalContent.image : '/default.webp'} alt="" className="mb-4 rounded-lg h-full w-1/2" />
                        <div className='flex flex-col justify-start text-left'>
                            <h2 className='text-2xl font-bold mb-2'>{modalContent.name}</h2>
                            <p className='font-bold'>Specie: </p>
                            <p className='text-gray-700'>{modalContent.species}</p>
                            <p className='font-bold'>Alternate Names: </p>
                            <ul>
                                <li><p className='text-gray-700'>{modalContent.alternate_names[0]}</p></li>
                                <li><p className='text-gray-700'>{modalContent.alternate_names[1]}</p></li>
                            </ul>
                            <p className='font-bold'>Gender: </p>
                            <p className='text-gray-700'>{modalContent.gender}</p>
                            <p className='font-bold'>House </p>
                            <p className='text-gray-700'>{modalContent.house}</p>
                            <p className='font-bold'>Date of Birth: </p>
                            <p className='text-gray-700'>{modalContent.dateOfBirth}</p>
                        </div>
                    </div>
                )}
            />
        </>
    );
};

export default Card;
