import { BiChevronRight } from "react-icons/bi";

const Card = ({ card }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96 flex flex-col md:flex-row">
      {/* Imagen a la izquierda */}
      <div className="md:w-2/5 h-48 md:h-full flex items-center justify-center p-4 bg-gray-100">
        <img 
          src={card.img} 
          alt="Logo"
          className="max-h-40 max-w-full object-contain"
        />
      </div>
      
      {/* Contenido a la derecha */}
      <div className="md:w-3/5 p-6 flex flex-col">
        <div className="flex-1">
          <p className="text-gray-600 text-sm leading-relaxed italic">
            "{card.description}"
          </p>
        </div>
        
        <button className="mt-4 text-purple-600 font-semibold text-sm hover:text-purple-800 transition flex items-center self-start">
          Ver caso de éxito
          <BiChevronRight size={18} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Card;