import { BiChevronRight } from "react-icons/bi";

const Card = ({ card }) => {
  return (
    <div className="bg-white-800 rounded-xl overflow-hidden h-96 flex flex-col md:flex-row transition-all duration-300 border border-gray-700">
      {/* Imagen a la izquierda */}
      <div className="md:w-2/5 h-48 md:h-full flex items-center justify-center p-4 bg-gray-900">
        <img 
          src={card.img} 
          alt="Logo"
          className="max-h-32 max-w-full object-contain"
        />
      </div>
      
      {/* Contenido a la derecha */}
      <div className="md:w-3/5 p-6 flex flex-col">
        <div className="flex-1">
          <p className="text-black-300 text-sm leading-relaxed">
            "{card.description}"
          </p>
        </div>
        
        <button className="mt-6 text-black font-medium text-sm hover:text-purple-300 transition-all duration-300 flex items-center group border border-gray-600 rounded-lg px-4 py-2 hover:border-purple-500">
          View case study
          <BiChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Card;