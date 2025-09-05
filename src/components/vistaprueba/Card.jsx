import { BiChevronRight } from "react-icons/bi";

const Card = ({ card }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96 flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl">
      {/* Imagen a la izquierda */}
      <div className="md:w-2/2 h-48 md:h-full relative overflow-hidden">
        <img 
          src={card.image} 
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Contenido a la derecha */}
      <div className="md:w-3/5 p-6 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
            {card.category}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
        
        <button className="mt-4 text-purple-600 font-semibold text-sm hover:text-purple-800 transition-all duration-300 flex items-center group">
          Más información 
          <BiChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Card;