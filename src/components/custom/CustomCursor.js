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
      .getElementById("heroslides")
      .addEventListener("mousemove", updateCursorPosition);
    return () => {
      document
        .getElementById("heroslides")
        .removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={`${
        show ? "fixed top-[-10%] left-[-5%]" : "absolute top-[42%] left-[-12%]"
      } z-50 w-[138px] h-[138px] rounded-full pointer-events-none`}
      style={{
        transform: show && `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Image src={cursor.src} width={138} height={138} />
    </div>
  );
};

export default CustomCursor;
