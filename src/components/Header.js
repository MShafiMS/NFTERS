import { integral_cf } from "@/utils/LocalFonts";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const PrimaryButton = dynamic(() => import("./custom/PrimaryButton"));

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="relative h-28 flex items-center px-4 lg:px-0 border-b border-[#EFEFEF]">
      <div
        className={`lg:hidden w-screen h-screen z-50 duration-700 fixed bg-white top-0 ${
          isMenu ? "left-0" : "left-[-1000px]"
        }`}
      >
        <button
          onClick={() => setIsMenu(false)}
          className={`absolute top-2 right-6 text-primary ${integral_cf.className}`}
        >
          close
        </button>
        <ul className="flex flex-col justify-center h-full items-center gap-8 font-medium">
          <li>
            <Link
              href={"/"}
              className={`${integral_cf.className} text-primary font-bold text-2xl`}
            >
              NFters
            </Link>
          </li>
          <li>
            <Link href={"#"}>Marketplace</Link>
          </li>
          <li>
            <Link href={"#"}>Resource</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <PrimaryButton name="Upload" w="131" h="50" />
          </li>
          <li>
            <PrimaryButton name="Connect Wallet" w="156" h="50" reverse />
          </li>
        </ul>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link
            href={"/"}
            className={`${integral_cf.className} text-primary font-bold text-2xl`}
          >
            NFters
          </Link>
          <ul className="lg:flex hidden items-center gap-12 font-medium">
            <li>
              <Link href={"#"}>Marketplace</Link>
            </li>
            <li>
              <Link href={"#"}>Resource</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className={`outline-none font-medium duration-500 text-sm focus:border-gray-300 border-[#EFEFEF] ${
                isSearch ? "w-48 h-9 px-7 border-2" : "w-0 h-0"
              } rounded-[100px]`}
            />
            <button onClick={() => setIsSearch(!isSearch)}>
              <svg
                width="18"
                height="18"
                className="absolute top-1/2 -translate-y-1/2 right-3 bg-white fill-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" />
                <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => setIsMenu(true)}
            className={`absolute top-2 right-6 text-primary ${integral_cf.className}`}
          >
            menu
          </button>
        </div>
        <div className="lg:flex hidden items-center justify-end gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="outline-none font-medium border-2 focus:border-gray-300 border-[#EFEFEF] w-80 h-12 px-7 rounded-[100px]"
            />
            <svg
              width="24"
              height="24"
              className="absolute top-1/2 -translate-y-1/2 right-5 bg-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                fill="#757575"
              />
              <path
                d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                fill="#757575"
              />
            </svg>
          </div>
          <PrimaryButton name="Upload" w="131" h="50" />
          <PrimaryButton name="Connect Wallet" w="156" h="50" reverse />
        </div>
      </div>
    </div>
  );
};

export default Header;
