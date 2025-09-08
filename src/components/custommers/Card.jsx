import { BiChevronRight } from "react-icons/bi";

const Card = ({ card }) => {
  return (
    <div className="bg-white-800 rounded-xl overflow-hidden h-96 flex flex-col md:flex-row transition-all duration-300 border border-gray-700">
      {/* Imagen a la izquierda */}
      <div className="md:w-2/4 h-48 md:h-full flex items-center justify-center p-4 bg-[#2f0d68]">

        <img 
          src={card.img} 
          alt="Logo"
          className="max-h-32 max-w-full object-contain"
        />
      </div>
      
      {/* Contenido a la derecha */}
      <div className="md:w-3/5 p-6 flex flex-col">
        <div className="flex-1">
        <p className="text-black-300 text-[18px] leading-relaxed">
            "{card.description}"
          </p>
        </div>
        
        
      </div>
    </div>
  );
};

export default Card;