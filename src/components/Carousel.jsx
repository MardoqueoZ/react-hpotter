import {useEffect, useState} from "react";
import PrevIcon from "/carousel/btnPrev.svg";
import NextIcon from "/carousel/btnNext.svg";
import PausedIcon from "/carousel/btnPaused.svg";
import PlayIcon from "/carousel/btnPlay.svg";

const Carousel = () => {
    // actualizar el estado del carrusel
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    // usar useEffect para que las imagenes pasen automaticamente
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext(); // cambiar la imagen cada 3 segundos
            }, 3000);
            return () => clearInterval(interval); // limpiar el intervalo al desmontar el componente
        }
    }, [currentIndex, isPaused]);
    
    const items = [
        { src: "/carousel/imagen1.webp", alt: "Imagen 1" },
        { src: "/carousel/imagen2.webp", alt: "Imagen 2" },
        { src: "/carousel/imagen3.webp", alt: "Imagen 2" },
    ];
    
    // función del botón para retroceder
    const handlePrev = () => {
        // primera imagen
        const isFirstImage = currentIndex === 0;
        // si el carousel está ubicado en la primera imagen, se retroce a la ultima, sino, se retrocede un indice
        const newIndex = isFirstImage ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    // función del botón para avanzar
    const handleNext = () => {
        // ultima imagen
        const isLastImage = currentIndex === items.length - 1;
        // si estamos en la ultima imagen, se vuelve a la primera, sino, se avanza uno
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const handlePaused = () => {
        // cambiar al valor contrario isPaused al presionar el boton
        setIsPaused(!isPaused);
    }
    
    return (
        <section className="flex justify-center p-7">
            <div className="relative w-[1000px] h-[600px] overflow-hidden rounded-2xl border-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item flex-shrink-0 w-full ${index !== currentIndex ? 'hidden' : ''}`}
                    >
                        <img src={item.src} className="w-full" alt={item.alt} />
                    </div>
                ))}
                
                <button
                    className="absolute left-1 transform -translate-y-1/2 top-1/2 bg-gray-600 text-white p-2 rounded-full"
                    onClick={handlePrev}
                >
                    <img src={PrevIcon} alt="" />
                </button>
                <button
                    className="absolute right-2 transform -translate-y-1/2 top-1/2 bg-gray-600 text-white p-2 rounded-full"
                    onClick={handleNext}
                >
                    <img src={NextIcon} alt="" />
                </button>
                
                <button
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white p-2 rounded-full"
                    onClick={handlePaused}
                >
                    <img src= { isPaused ? PlayIcon : PausedIcon } alt="" />
                </button>
            </div>
        </section>
        
    );
};

export default Carousel;
