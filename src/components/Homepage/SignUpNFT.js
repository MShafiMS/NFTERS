import man from "@/assets/man.png";
import img1 from "@/assets/slide1.png";
import img3 from "@/assets/slide2.png";
import img2 from "@/assets/slide3.png";
import wman from "@/assets/wman.png";
import { integral_cf } from "@/utils/LocalFonts";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
const PrimaryButton = dynamic(() => import("../custom/PrimaryButton"));

const SignUpNFT = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col-reverse items-center lg:w-full w-11/12 container gap-20 mx-auto mt-24 mb-28">
      <div className="w-full flex items-center gap-8 lg:gap-16">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            opacity: 100,
            transition: { duration: 0.9, delay: 0.2 },
          }}
          className="flex lg:gap-14 gap-10 flex-col items-end"
        >
          <div className="relative">
            <Image
              width={300}
              height={300}
              src={img1.src}
              className="lg:w-[300px] lg:h-[300px] w-40 h-40 rounded-[12px]"
              alt=""
            />
            <Image
              width={80}
              height={80}
              src={man.src}
              className="absolute -right-7 -bottom-8 lg:w-[80px] lg:h-[80px] w-16 h-16 border-[4px] border-white rounded-full"
              alt=""
            />
          </div>
          <div className="relative">
            <Image
              width={195}
              height={214}
              src={img2.src}
              className="lg:w-[195px] lg:h-[214px] w-28 h-28 rounded-[12px]"
              alt=""
            />
            <Image
              width={80}
              height={80}
              src={wman.src}
              className="absolute -right-7 -bottom-8 lg:w-[80px] lg:h-[80px] w-16 h-16 border-[4px] border-white rounded-full"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            opacity: 100,
            transition: { duration: 0.9, delay: 0.1 },
          }}
          className="relative"
        >
          <Image
            width={240}
            height={256}
            src={img3.src}
            className="lg:w-[240px] lg:h-[265px] w-32 h-32 rounded-[12px]"
            alt=""
          />
          <Image
            width={80}
            height={80}
            src={wman.src}
            className="absolute -right-7 -bottom-8 lg:w-[80px] lg:h-[80px] w-16 h-16 border-[4px] border-white rounded-full"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          x: 0,
          opacity: 100,
          transition: { duration: 0.9, delay: 0.1 },
        }}
        className="w-full"
      >
        <h1
          className={`${integral_cf.className} font-bold text-xl lg:text-3xl`}
        >
          Create and <br className="lg:block hidden" /> sell your NFTs
        </h1>
        <p className="lg:mt-10 lg:mb-8 my-5 text-[#636363] lg:text-lg max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <PrimaryButton name="Sign Up Now" w="212" h="65" text="20" />
      </motion.div>
    </div>
  );
};

export default SignUpNFT;
