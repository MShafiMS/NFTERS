import user1 from "@/assets/collections/user1.png";
import user2 from "@/assets/collections/user2.png";
import user3 from "@/assets/collections/user3.png";
import user4 from "@/assets/collections/user4.png";
import blue from "@/assets/slide1.png";
import yellow from "@/assets/slide2.png";
import red from "@/assets/slide3.png";
import white from "@/assets/slide6.png";
import { integral_cf } from "@/utils/LocalFonts";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
const PrimaryButton = dynamic(() => import("../custom/PrimaryButton"));
const PrimaryPrice = dynamic(() => import("../custom/PrimaryPrice"));

const Discover = () => {
  const [category, setCategory] = useState("All Categories");
  const users = [user1, user2, user3, user4];
  const categories = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
    "Crypto",
  ];
  const nfts = [
    { name: "ArtCrypto", img: blue, category: "Art" },
    { name: "This NFT", img: yellow, category: "Celebrities" },
    { name: "NameCrypto", img: red, category: "Gaming" },
    { name: "KingCrypto", img: white, category: "Sport" },
    { name: "ArtCrypto", img: white, category: "Music" },
    { name: "This NFT", img: red, category: "Crypto" },
    { name: "NameCrypto", img: blue, category: "Gaming" },
    { name: "KingCrypto", img: yellow, category: "Sport" },
    { name: "ArtCrypto", img: blue, category: "Art" },
    { name: "This NFT", img: white, category: "Celebrities" },
    { name: "NameCrypto", img: yellow, category: "Gaming" },
    { name: "KingCrypto", img: red, category: "Sport" },
    { name: "ArtCrypto", img: red, category: "Music" },
    { name: "This NFT", img: yellow, category: "Crypto" },
    { name: "NameCrypto", img: blue, category: "Gaming" },
    { name: "KingCrypto", img: white, category: "Sport" },
  ];

  const filteredNfts = nfts.filter((nft) => nft.category === category);
  return (
    <div className="bg-[#D9E0EC33]">
      <div className="container lg:w-full w-11/12 mx-auto pt-16 mb-12">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            opacity: 100,
            transition: { duration: 0.9, delay: 0.1 },
          }}
          className={`${integral_cf.className} text-2xl lg:text-4xl font-bold`}
        >
          Discover more NFTs
        </motion.h1>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 100,
            transition: { duration: 0.9, delay: 0.2 },
          }}
          className="flex itms-center justify-between lg:mt-9 my-6 lg:mb-10"
        >
          <div className="lg:flex hidden gap-3 items-center">
            {categories.map((item, idx) => (
              <button
                onClick={() => setCategory(item)}
                key={idx}
                className={`px-5 py-2.5 text-sm font-medium rounded-3xl ${
                  category === item
                    ? "bg-primary text-white"
                    : "bg-[#DCDCDC]/20 hover:bg-primary/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <select
            name="category"
            id=""
            onChange={(e) => setCategory(e.target.value)}
            className="px-5 py-2.5 lg:hidden text-sm font-medium rounded-3xl focus:bg-[#DCDCDC]/20 bg-primary text-white text-center focus:text-primary appearance-none focus:outline-primary"
          >
            {categories.map((item, idx) => (
              <option
                value={item}
                key={idx}
                className={`font-medium text-sm px-5 py-2.5 ${
                  category === item
                    ? "text-black"
                    : "text-primary bg-[#DCDCDC]/20"
                }`}
              >
                {item}
              </option>
            ))}
          </select>
          <button className="px-5 py-2.5 text-sm font-medium rounded-3xl bg-[#DCDCDC]/20 hover:bg-primary hover:text-white hover:fill-white fill-primary text-primary flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
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
            All Filters
          </button>
        </motion.div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-6 lg:gap-10">
          {(filteredNfts.length ? filteredNfts : nfts).map((item, idx) => (
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 100,
                transition: {
                  duration: 0.9,
                  delay: Math.max(0, 0.3 + (idx * 2) / 10),
                },
              }}
              whileHover={{
                scale: 1.03,
              }}
              key={idx}
              className="bg-white p-3 rounded-[13px] w-fit hover:shadow-xl shadow-lg"
            >
              <Image
                width={248}
                height={222}
                src={item.img.src}
                className="w-[248px] h-[222px] object-cover object-center rounded-[13px]"
                alt=""
              />
              <div className="relative -top-5 left-3 h-fit w-12  flex">
                {users.map((user, idx) => (
                  <Image
                    width={30}
                    height={30}
                    key={idx}
                    src={user.src}
                    className="absolute w-9 h-9 border-2 border-white rounded-full"
                    style={{
                      left: `${idx * 25}px`,
                    }}
                    alt=""
                  />
                ))}
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold mt-5">{item.name}</h3>
                <div className="flex justify-between items-center mt-2.5 pb-5 border-b border-[#F4F4F4]">
                  <PrimaryPrice color="#00AC4F" />
                  <p className="text-sm text-[#838383] font-medium">1 of 321</p>
                </div>
                <div className="flex items-center justify-between mt-2.5 mb-3">
                  <button
                    disabled
                    className="px-2.5 py-1 text-xs bg-[#F5F5F5] text-primary rounded-3xl"
                  >
                    <span className="font-bold">3</span>h{" "}
                    <span className="font-bold">50</span>m{" "}
                    <span className="font-bold">2</span>s
                  </button>
                  <button className="font-medium text-[#4F33A3]">
                    Place a bid
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="lg:flex hidden justify-center pb-12 mt-14">
          <PrimaryButton name="More NFTs" w="179" h="66" text="20" reverse />
        </div>
        <div className="flex lg:hidden justify-center mt-8">
          <PrimaryButton name="More NFTs" w="150" h="50" text="18" reverse />
        </div>
      </div>
    </div>
  );
};

export default Discover;
