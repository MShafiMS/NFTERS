import { integral_cf } from "@/utils/LocalFonts";
import NumberCountAnimation from "@/utils/NumberCount";
import PrimaryButton from "../PrimaryButton";
import HeroSlides from "./HeroSlides";

const Hero = () => {
  return (
    <div className="container mx-auto flex mt-14 mb-28 relative">
      <div className="w-full mt-4">
        <h1
          className={`text-4xl ${integral_cf.className} font-bold tracking-[2px]`}
        >
          Discover, and collect <br /> Digital Art NFTs
        </h1>
        <p className="mt-5 text-xl text-[#565656] mb-10">
          Digital marketplace for crypto collectibles and <br /> non-fungible
          tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital
          assets.
        </p>
        <PrimaryButton w="209" h="65" text="20" name="Explore" />
        <div className="flex items-center gap-5 mt-7">
          <div className="w-28">
            <h1
              className={`${integral_cf.className} text-4xl font-bold tracking-[2px]`}
            >
              <NumberCountAnimation targetCount={95} duration={3000} />
              k+
            </h1>
            <p className="text-xl text-[#565656]">Artwork</p>
          </div>
          <div className="w-28">
            <h1
              className={`${integral_cf.className} text-4xl font-bold tracking-[2px]`}
            >
              <NumberCountAnimation targetCount={12} duration={3000} />
              k+
            </h1>
            <p className="text-xl text-[#565656]">Auction</p>
          </div>
          <div className="w-28">
            <h1
              className={`${integral_cf.className} text-4xl font-bold tracking-[2px]`}
            >
              <NumberCountAnimation targetCount={15} duration={3000} />
              k+
            </h1>
            <p className="text-xl text-[#565656]">Artist</p>
          </div>
        </div>
      </div>
      <HeroSlides />
    </div>
  );
};

export default Hero;
