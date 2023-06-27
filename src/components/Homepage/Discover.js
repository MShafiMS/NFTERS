import user1 from "@/assets/collections/user1.png";
import user2 from "@/assets/collections/user2.png";
import user3 from "@/assets/collections/user3.png";
import user4 from "@/assets/collections/user4.png";
import blue from "@/assets/slide1.png";
import yellow from "@/assets/slide2.png";
import red from "@/assets/slide3.png";
import white from "@/assets/slide6.png";
import { integral_cf } from "@/utils/LocalFonts";
import { useState } from "react";
import PrimaryButton from "../custom/PrimaryButton";
import PrimaryPrice from "../custom/PrimaryPrice";

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
      <div className="container mx-auto pt-16 mb-12">
        <h1 className={`${integral_cf.className} text-4xl font-bold`}>
          Discover more NFTs
        </h1>
        <div className="flex itms-center justify-between">
          <div className="flex gap-3 items-center mt-9 mb-10">
            {categories.map((item, idx) => (
              <button
                onClick={() => setCategory(item)}
                key={idx}
                className={`px-5 py-2.5 text-sm font-medium rounded-3xl ${
                  category === item
                    ? "bg-primary text-white"
                    : "bg-[#DCDCDC]/20 hover:bg-primary/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {(filteredNfts.length ? filteredNfts : nfts).map((item, idx) => (
            <div key={idx} className="bg-white p-3 rounded-[13px] w-fit">
              <img
                src={item.img.src}
                className="w-[248px] h-[222px] object-cover object-center rounded-[13px]"
                alt=""
              />
              <div className="relative -top-5 left-3 h-fit w-12  flex">
                {users.map((user, idx) => (
                  <img
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
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <PrimaryButton name="More NFTs" w="179" h="66" text="20" reverse />
        </div>
      </div>
    </div>
  );
};

export default Discover;
