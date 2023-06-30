import { integral_cf } from "@/utils/LocalFonts";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const HeroSlides = dynamic(() => import("./HeroSlides.js"));
const PrimaryButton = dynamic(() => import("../custom/PrimaryButton"));
const NumberCountAnimation = dynamic(() => import("@/utils/NumberCount.js"));

const Hero = () => {
  return (
    <div className="container mx-auto flex lg:flex-row md:flex-row flex-col-reverse gap-6 lg:mt-14 mt-9 mb-14 lg:mb-28 relative">
      <div className="w-full mt-4">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 100,
            transition: { duration: 0.9, delay: 0.1 },
          }}
          className={`lg:text-4xl text-2xl lg:text-start md:text-start text-center ${integral_cf.className} font-bold tracking-[2px]`}
        >
          Discover, and collect <br className="lg:block hidden" /> Digital Art
          NFTs
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 100,
            transition: { duration: 1.1, delay: 0.2 },
          }}
          className="mt-5 lg:text-xl lg:text-start md:text-start text-center text-[#565656] mb-10"
        >
          Digital marketplace for crypto collectibles and{" "}
          <br className="lg:block hidden" /> non-fungible tokens (NFTs). Buy,
          Sell, and discover <br className="lg:block hidden" /> exclusive
          digital assets.
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 100,
            transition: { duration: 1.3, delay: 0.3 },
          }}
        >
          <PrimaryButton
            w="209"
            h="65"
            text="20"
            name="Explore"
            className="mx-auto block md:mx-0 lg:inline"
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 100,
            transition: { duration: 1.5, delay: 0.4 },
          }}
          className="flex items-center md:justify-start justify-center gap-5 mt-7"
        >
          <div className="lg:w-28">
            <h1
              className={`${integral_cf.className} lg:text-4xl text-2xl font-bold tracking-[2px]`}
            >
              <NumberCountAnimation targetCount={95} duration={3000} />
              k+
            </h1>
            <p className="lg:text-xl text-[#565656]">Artwork</p>
          </div>
          <div className="lg:w-28">
            <h1
              className={`${integral_cf.className} lg:text-4xl text-2xl font-bold tracking-[2px]`}
            >
              <NumberCountAnimation targetCount={12} duration={3000} />
              k+
            </h1>
            <p className="lg:text-xl text-[#565656]">Auction</p>
          </div>
          <div className="lg:w-28">
            <h1
              className={`${integral_cf.className} lg:text-4xl text-2xl font-bold tracking-[2px]`}
            >
              <NumberCountAnimation targetCount={15} duration={3000} />
              k+
            </h1>
            <p className="lg:text-xl text-[#565656]">Artist</p>
          </div>
        </motion.div>
      </div>
      <HeroSlides />
    </div>
  );
};

export default Hero;
