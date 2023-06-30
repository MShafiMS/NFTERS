import cursor from "@/assets/cursor.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomCursor = ({ show, navId }) => {
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
        className="fixed top-[-8%] left-[-5%] z-50 pointer-events-none lg:flex hidden items-center"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {navId !== 2 && (
          <svg
            viewBox="0 0 24 24"
            className="w-10 -mr-4 h-10 rotate-90 fill-[#49c1df]/30 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_399)">
              <path d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z" />
            </g>
            <defs>
              <clipPath id="clip0_0_399">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <div className="w-[138px] h-[138px] rounded-full">
          <Image
            src={cursor.src}
            width={138}
            height={138}
            className="animate-spin custom-speed"
            alt="cursor"
          />
        </div>
        {navId !== 0 && (
          <svg
            viewBox="0 0 24 24"
            className="w-10 -ml-4 h-10 -rotate-90 fill-[#49c1df]/30 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_399)">
              <path d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z" />
            </g>
            <defs>
              <clipPath id="clip0_0_399">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
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
