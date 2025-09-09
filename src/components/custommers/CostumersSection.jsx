import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { carrucelcustommers, hiringManagers } from "../../assets/carrucelcustommers";

const Carousel = ({ data, sectionTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const total = data.length;

  // Número de cards visibles a la vez (responsive)
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 2;
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = getVisibleCards();
      setVisibleCards(newVisibleCards);
      
      // Detectar si es móvil
      setIsMobile(window.innerWidth < 768);
      
      // Ajustar currentIndex si es necesario después del resize
      if (currentIndex + newVisibleCards > total) {
        setCurrentIndex(Math.max(0, total - newVisibleCards));
      }
    };

    // Verificar inicialmente si es móvil
    setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, total]);

  const nextSlide = () => {
    if (currentIndex + visibleCards >= total) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(total - visibleCards);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Movimiento automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, visibleCards]);

  if (total === 0) {
    return <p className="text-black-400 text-center">No hay datos para mostrar.</p>;
  }

  
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {sectionTitle}
          </h2>
          <p className="text-xl/tight sm:text-1xl/tight md:text-2xl/tight  tracking-tight">
            We review hundreds of unstructured résumés without overlooking great talent. Diversity and equality are properly considered.
          </p>
        </div>

        {/* Contenedor del carrusel */}
        <div className="relative">
          {/* Botones de navegación - Solo mostrar en desktop */}
          {!isMobile && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-3 rounded-full hover:bg-gray-100 transition-all duration-300 -ml-4 md:-ml-6 shadow-lg border border-gray-200"
                aria-label="Anterior"
              >
                <BiChevronLeft size={32} className="text-gray-700" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-3 rounded-full hover:bg-gray-100 transition-all duration-300 -mr-4 md:-mr-6 shadow-lg border border-gray-200"
                aria-label="Siguiente"
              >
                <BiChevronRight size={32} className="text-gray-700" />
              </button>
            </>
          )}

          {/* Carrusel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden px-2"
          >
            <div 
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {data.map((card, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ width: `calc(${100 / visibleCards}% - 16px)` }}
                >
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores de posición */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: Math.ceil(total / visibleCards) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCards)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / visibleCards) === index 
                  ? 'bg-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>

      
      </div>
    </div>
  );
};

export const CostumersSection = () => {
  return (
    <div className="space-y-20">
      <Carousel data={carrucelcustommers} sectionTitle="HR Professionals" />
      <Carousel data={hiringManagers} sectionTitle="Hiring Managers" />
    </div>
  );
};

export default Carousel;