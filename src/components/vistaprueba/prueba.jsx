import { useState, useEffect, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Card from "./Card";

const Prueba = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  // Datos de ejemplo para las cards
  const cards = [
    {
      id: 1,
      title: "LANVIN TALENT",
      description: "Plataforma de descubrimiento de nuevos talentos en la industria de la moda. Conectamos diseñadores emergentes con oportunidades globales.",
      image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Moda"
    },
    {
      id: 2,
      title: "GUCCI",
      description: "Iniciativa digital para artistas emergentes en el mundo del lujo. Ofrecemos visibilidad y recursos para creativos excepcionales.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Lujo"
    },
    {
      id: 3,
      title: "PRADA",
      description: "Conectamos creadores con audiencias globales de manera innovadora. Potenciamos carreras a través de nuestra red exclusiva.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Arte"
    },
    {
      id: 4,
      title: "HERMÈS",
      description: "Experiencias digitales exclusivas para coleccionistas y amantes del arte. Un espacio donde el talento encuentra su audiencia.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Cultura"
    },
    {
      id: 5,
      title: "CARTIER",
      description: "Plataforma de lanzamiento para innovadores y pensadores creativos. Transformamos ideas en proyectos tangibles y exitosos.",
      image: "https://images.unsplash.com/photo-1601762603339-fd61e28f698f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Innovación"
    },
    {
      id: 6,
      title: "DIOR",
      description: "Comunidad global de artistas visuales y diseñadores emergentes. Donde la creatividad se encuentra con la oportunidad.",
      image: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d1a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Diseño"
    }
  ];

  // Número de cards visibles a la vez (responsive)
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
      // Ajustar currentIndex si es necesario después del resize
      if (currentIndex + visibleCards > cards.length) {
        setCurrentIndex(Math.max(0, cards.length - visibleCards));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, visibleCards, cards.length]);

  const nextSlide = () => {
    if (currentIndex + visibleCards >= cards.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - visibleCards);
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

  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Las plataformas más influyentes del mundo
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Generando más atención que cualquier otra plataforma digital
          </p>
        </div>

        {/* Contenedor del carrusel */}
        <div className="relative">
          {/* Botones de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all duration-300 -ml-4 md:-ml-6 shadow-lg border border-white/10"
            aria-label="Anterior"
          >
            <BiChevronLeft size={32} className="text-white" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all duration-300 -mr-4 md:-mr-6 shadow-lg border border-white/10"
            aria-label="Siguiente"
          >
            <BiChevronRight size={32} className="text-white" />
          </button>

          {/* Carrusel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden px-2"
          >
            <div 
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {cards.map((card) => (
                <div 
                  key={card.id}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
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
          {Array.from({ length: Math.ceil(cards.length / visibleCards) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCards)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / visibleCards) === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>

        {/* Texto inferior */}
        <div className="text-center mt-16 text-white">
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a la plataforma digital más exclusiva del mercado y conecta con las marcas más influyentes
          </p>
          <button className="bg-white text-purple-900 px-10 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Comenzar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prueba;