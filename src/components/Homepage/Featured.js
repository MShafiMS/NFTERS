import profile from "@/assets/manprofile.png";
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
import PrimaryButton from "../custom/PrimaryButton";

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
      <div className="container mx-auto pt-16 pb-24">
        <h1 className={`${integral_cf.className} text-3xl font-bold`}>
          Collection Featured NFTs
        </h1>
        <div className="flex gap-8 mt-14">
          {collections.map((collection, idx) => (
            <div key={idx + 1} className="w-full">
              <div className="w-fit">
                <div className="flex items-center gap-2.5">
                  <div>
                    <img
                      src={collection.img.src}
                      alt=""
                      className="w-[256px] h-[272px] object-cover object-center rounded-[12px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    {collection.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img.src}
                        alt=""
                        className="w-[104px] h-[86px] object-cover object-center rounded-[12px]"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-end justify-between mt-7">
                  <div>
                    <h3 className="text-xl font-bold">Amazing Collection</h3>
                    <div className="flex items-center gap-2.5 mt-2.5">
                      <img
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
