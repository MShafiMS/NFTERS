import profile from "@/assets/man.png";
import img5 from "@/assets/slide1.png";
import img2 from "@/assets/slide2.png";
import img6 from "@/assets/slide3.png";
import img4 from "@/assets/slide4.png";
import img3 from "@/assets/slide5.png";
import img1 from "@/assets/slide6.png";
import img8 from "@/assets/slide7.png";
import img7 from "@/assets/slide8.png";
import img9 from "@/assets/slide9.png";
import { integral_cf } from "@/utils/LocalFonts";
import dynamic from "next/dynamic";
import Image from "next/image";
const PrimaryButton = dynamic(() => import("../custom/PrimaryButton"));

const Featured = () => {
  const collections = [
    {
      img: img1,
      images: [img2, img3, img4],
    },
    {
      img: img5,
      images: [img3, img2, img6],
    },
    {
      img: img7,
      images: [img8, img9, img2],
    },
  ];
  return (
    <div className="bg-[#D9E0EC]/20">
      <div className="container mx-auto lg:w-full w-11/12 lg:pt-16 py-9 lg:py-0 lg:pb-24">
        <h1 className={`${integral_cf.className} text-xl lg:text-3xl font-bold`}>
          Collection Featured NFTs
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8 lg:mt-14">
          {collections.map((collection, idx) => (
            <div key={idx + 1} className={`w-full ${idx === 2 && "lg:col-span-1 md:col-span-2 justify-center flex"}`}>
              <div className="w-fit">
                <div className="flex items-center gap-2.5">
                  <div>
                    <Image
                      src={collection.img.src}
                      alt=""
                      width={256}
                      height={272}
                      className="w-[256px] h-[272px] object-cover object-center rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    {collection.images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img.src}
                        alt=""
                        width={104}
                        height={86}
                        className="w-[104px] h-[86px] object-cover object-center rounded-[12px]"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-end justify-between mt-7">
                  <div>
                    <h3 className="text-xl font-bold">Amazing Collection</h3>
                    <div className="flex items-center gap-2.5 mt-2.5">
                      <Image
                        width={28}
                        height={28}
                        src={profile.src}
                        className="h-[28px] w-[28px]"
                        alt=""
                      />
                      <p className="text-sm font-medium">by Arkhan</p>
                    </div>
                  </div>
                  <PrimaryButton
                    name="Total 54 Items"
                    text="11"
                    reverse
                    w="98"
                    h="29"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
