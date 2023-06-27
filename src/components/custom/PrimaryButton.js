import { useState } from "react";

const PrimaryButton = ({ name, text, h, w, radius, reverse }) => {
  const [isHover, setIsHover] = useState(false);
  if (reverse) {
    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative"
        style={{
          width: `${w}px`,
          height: `${h}px`,
        }}
      >
        <div
          className={`absolute w-full h-full z-[-1] duration-300 ${
            !isHover ? "scale-50" : "scale-100 bg-primary"
          }`}
          style={{
            borderRadius: `${radius | "60"}px`,
          }}
        ></div>
        <div
          className={`absolute w-full h-full z-[-1] duration-300 ${
            !isHover ? "scale-100 border-2 border-primary" : "scale-110"
          }`}
          style={{
            borderRadius: `${radius | "60"}px`,
          }}
        ></div>
        <div className="flex items-center justify-center duration-300 h-full font-bold hover:text-white text-primary">
          <span style={{ fontSize: `${text || "14"}px` }}>{name}</span>
        </div>
      </button>
    );
  } else {
    return (
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative"
        style={{
          width: `${w}px`,
          height: `${h}px`,
        }}
      >
        <div
          className={`absolute w-full h-full z-[-1] duration-300 ${
            isHover ? "scale-50" : "scale-100 bg-primary"
          }`}
          style={{
            borderRadius: `${radius | "60"}px`,
          }}
        ></div>
        <div
          className={`absolute w-full h-full z-[-1] duration-300 ${
            isHover ? "scale-100 border-2 border-primary" : "scale-110"
          }`}
          style={{
            borderRadius: `${radius | "60"}px`,
          }}
        ></div>
        <div className="flex items-center justify-center duration-300 h-full font-bold text-white hover:text-primary">
          <span style={{ fontSize: `${text || "14"}px` }}>{name}</span>
        </div>
      </button>
    );
  }
};

export default PrimaryButton;
