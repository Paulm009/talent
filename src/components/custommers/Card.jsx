// src/components/custommers/Card.jsx
const Card = ({ img_path, description }) => {
    return (
      <div className="flex items-center gap-6 bg-[##faf5ff] text-white p-6 rounded-lg shadow-lg w-[1000px]">
        <img src={img_path} alt="logo" className="w-900 h-80 object-contain" />

        <p className="text-2xl leading-relaxed text-center text-[#020618]">{description}</p>


      </div>
    );
  };
  
  export default Card;
  