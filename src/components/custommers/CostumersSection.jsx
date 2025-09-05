import { useState, useEffect } from "react";
import Card from "./Card";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import { carrucelcustommers, hiringManagers } from "../../assets/carrucelcustommers";

const Carousel = ({ data, sectionTitle }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = data.length;

  const prevCard = () => {
    if (total === 0) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const nextCard = () => {
    if (total === 0) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    if (total === 0) return;
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  if (total === 0) {
    return <p className="text-gray-400 text-center">No hay datos para mostrar.</p>;
  }

  return (
    <div className="mt-12 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center mb-6 text-purple-700">
        {sectionTitle || data[current].title}
      </h1>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevCard}
          className="text-purple-400 hover:text-purple-600 transition-colors"
        >
          <BiChevronLeftCircle size={40} />
        </button>

        <div
          className={`transition-all duration-500 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <Card
            img_path={data[current].img}
            description={data[current].description}
          />
        </div>

        <button
          onClick={nextCard}
          className="text-purple-400 hover:text-purple-600 transition-colors"
        >
          <BiChevronRightCircle size={40} />
        </button>
      </div>

      <div className="text-center mt-6 flex justify-center gap-3">
        {data.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-purple-400" : "bg-purple-200"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};


export const CostumersSection = () => {
  return (
    <div>
      <Carousel data={carrucelcustommers} sectionTitle="HR Professionals" />
      <Carousel data={hiringManagers} sectionTitle="Hiring Managers" />
    </div>
  );
};
