import cursor from "@/assets/cursor.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomCursor = ({ show }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document
      ?.getElementById("heroslides")
      ?.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document
        ?.getElementById("heroslides")
        ?.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  if (show) {
    return (
      <div
        className="fixed top-[-8%] left-[-5%] z-50 w-[138px] h-[138px] rounded-full pointer-events-none lg:block hidden"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <Image
          src={cursor.src}
          width={138}
          height={138}
          className="animate-spin custom-speed"
          alt="cursor"
        />
      </div>
    );
  } else {
    return (
      <div className="absolute top-[42%] left-[-12%] z-50 w-[138px] h-[138px] rounded-full pointer-events-none lg:block hidden">
        <Image src={cursor.src} width={138} height={138} alt="cursor" />
      </div>
    );
  }
};

export default CustomCursor;
