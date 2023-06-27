import man from "@/assets/man.png";
import img1 from "@/assets/slide1.png";
import img3 from "@/assets/slide2.png";
import img2 from "@/assets/slide3.png";
import wman from "@/assets/wman.png";
import { integral_cf } from "@/utils/LocalFonts";
import PrimaryButton from "../custom/PrimaryButton";
const SignUpNFT = () => {
  return (
    <div className="flex items-center container gap-20 mx-auto mt-24 mb-28">
      <div className="w-full flex items-center gap-16">
        <div className="flex gap-14 flex-col items-end">
          <div className="relative">
            <img
              src={img1.src}
              className="w-[300px] h-[300px] rounded-[12px]"
              alt=""
            />
            <img
              src={man.src}
              className="absolute -right-7 -bottom-8 w-[80px] h-[80px] border-[4px] border-white rounded-full"
              alt=""
            />
          </div>
          <div className="relative">
            <img
              src={img2.src}
              className="w-[195px] h-[214px] rounded-[12px]"
              alt=""
            />
            <img
              src={wman.src}
              className="absolute -right-7 -bottom-8 w-[80px] h-[80px] border-[4px] border-white rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="relative">
          <img
            src={img3.src}
            className="w-[240px] h-[265px] rounded-[12px]"
            alt=""
          />
          <img
            src={wman.src}
            className="absolute -right-7 -bottom-8 w-[80px] h-[80px] border-[4px] border-white rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="w-full">
        <h1 className={`${integral_cf.className} font-bold text-3xl`}>
          Create and <br /> sell your NFTs
        </h1>
        <p className="mt-10 mb-8 text-[#636363] text-lg max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <PrimaryButton name="Sign Up Now" w="212" h="65" text="20" />
      </div>
    </div>
  );
};

export default SignUpNFT;
