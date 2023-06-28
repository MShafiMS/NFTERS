import top1 from "@/assets/collections/top01.png";
import top2 from "@/assets/collections/top02.png";
import top3 from "@/assets/collections/top03.png";
import top4 from "@/assets/collections/top04.png";
import top5 from "@/assets/collections/top05.png";
import manProfile from "@/assets/man.png";
import collection1 from "@/assets/slide6.png";
import collection2 from "@/assets/slide7.png";
import collection3 from "@/assets/slide8.png";
import collection4 from "@/assets/slide9.png";
import { poppins } from "@/utils/GoogleFonts";
import { integral_cf } from "@/utils/LocalFonts";
import Image from "next/image";
import PrimaryButton from "../custom/PrimaryButton";
import PrimaryPrice from "../custom/PrimaryPrice";

const Collection = () => {
  const topCollectins = [
    {
      name: "CryptoFunks",
      price: "19,769.39",
      img: top1,
      parcentage: "+26.52%",
      verified: true,
      redpr: false,
    },
    {
      name: "Cryptix",
      price: "2,769.39",
      img: top2,
      parcentage: "+10.52%",
      verified: false,
      redpr: true,
    },
    {
      name: "Frensware",
      price: "9,232.39",
      img: top3,
      parcentage: "+2.52%",
      verified: false,
      redpr: false,
    },
    {
      name: "PunkArt",
      price: "3,769.39",
      img: top4,
      parcentage: "+1.52%",
      verified: true,
      redpr: false,
    },
    {
      name: "Art Crypto",
      price: "10,769.39",
      img: top5,
      parcentage: "+2.52%",
      verified: false,
      redpr: true,
    },
  ];
  const collections = [
    { img: collection1 },
    { img: collection2 },
    { img: collection3 },
    { img: collection4 },
  ];
  return (
    <div className="container mx-auto lg:w-full w-11/12 flex md:flex-row flex-col gap-14 lg:gap-0 mt-14 lg:mt-28 lg:mb-32 mb-16">
      <div className="w-full lg:mr-12 md:hidden lg:block">
        <Image
          src={collection1}
          width={400}
          height={424}
          className="lg:w-[400px] w-80 mx-auto"
          alt="clc"
        />
        <div className="flex justify-between mx-auto mt-8 w-80 lg:w-[400px]">
          <div className="flex">
            <Image src={manProfile} height={48} width={48} className="w-12 h-12" alt="clc" />
            <div>
              <p className="font-bold lg:text-xl">The Futr Abstr</p>
              <p className="text-sm text-[#363639]">10 in the stock</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-xs text-[#3A3A3A]">Highest Bid</p>
            <PrimaryPrice color="#3A3A3A" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-10 lg:mr-12">
        {collections.map((collection, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-5 ${idx === 0 && "lg:hidden hidden md:flex"}`}
          >
            <Image
              src={collection.img}
              width={147}
              height={147}
              className="lg:w-[147px] lg:h-[147px] w-28 h-28"
              alt="clc"
            />
            <div>
              <h4 className="lg:text-xl font-bold">The Futr Abstr</h4>
              <div className="flex items-center gap-2 mt-2 mb-4">
                <Image src={manProfile} width={34} height={34} alt="clc" />
                <div className="lg:p-2 p-1.5 lg:text-md text-sm border border-[#00AC4F] rounded-[6px]">
                  <PrimaryPrice color="#00AC4F" />
                </div>
                <p className="text-sm text-[#757575]">1 of 8</p>
              </div>
              <PrimaryButton name="Place a bid" w="113" h="45" reverse />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:pl-9 lg:border-l border-[#ECECEC]">
        <h2 className={`${integral_cf.className} text-xl font-bold`}>
          Top Collections over
        </h2>
        <p className="text-lg text-primary font-bold mt-2.5">Last 7 days</p>
        <div className="mt-5">
          {topCollectins.map((collection, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-5 py-4 ${
                idx !== 0 && "border-t border-[#F0F0F0]"
              }`}
            >
              <p className="font-bold text-2xl">{idx + 1}</p>
              <div className="relative">
                <Image src={collection.img} width={60} height={60} alt="clc" />
                {collection.verified && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="absolute -top-2 -right-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="8" y="10" width="16" height="11" fill="white" />
                    <path
                      d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z"
                      fill="#1E93FF"
                    />
                  </svg>
                )}
              </div>
              <div className="w-28">
                <p className="font-medium">{collection.name}</p>
                <div className="flex items-center gap-1.5 my-2">
                  <svg
                    width="15"
                    height="24"
                    viewBox="0 0 15 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_0_267)">
                      <path
                        d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719V17.9719Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_267">
                        <rect width="15" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p
                    className={`text-sm text-[#636363] font-semibold ${poppins.className}`}
                  >
                    {collection.price}
                  </p>
                </div>
              </div>
              <p
                className={`${poppins.className} text-xl font-semibold ${
                  collection.redpr ? "text-[#FF002E]" : "text-[#14C8B0]"
                }`}
              >
                {collection.parcentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
