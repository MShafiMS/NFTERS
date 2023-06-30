import man from "@/assets/man.png";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
const CustomCursor = dynamic(() => import("../custom/CustomCursor"));
const PrimaryPrice = dynamic(() => import("../custom/PrimaryPrice"));

const HeroSlides = () => {
  const [isHover, setIsHover] = useState(false);
  const [navId, setNavId] = useState(null);

  const slides = [
    { img: slide1.src },
    { img: slide2.src },
    { img: slide3.src },
  ];
  return (
    <div
      id="heroslides"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="lg:w-5/12 w-11/12 mx-auto lg:mx-0 relative custom-cursor"
    >
      <CustomCursor show={isHover} navId={navId} />
      <Swiper
        effect={"cards"}
        grabCursor
        cardsEffect={{
          rotate: 0,
          slideShadows: false,
          perSlideOffset: 12,
        }}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 100,
        //   depth: 200,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        modules={[EffectCards]}
        className="mySwiper w-80 lg:w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} onMouseEnter={() => setNavId(idx)}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 100,
                transition: {
                  duration: 0.9,
                  delay: Math.max(0, 0.1 + (idx * 4) / 10),
                },
              }}
              className="rounded-[24px] relative lg:w-[400px] w-72"
            >
              <Image
                src={slide.img}
                width={400}
                height={440}
                alt="Slide"
                className={`${
                  idx === 2 && " rotate-180"
                } w-72 h-80 lg:w-[400px] lg:h-[440px]`}
              />
              <div className="absolute flex flex-col justify-between top-0 text-white px-3 py-4 lg:p-6 left-0 w-full h-full">
                <div>
                  <h4 className="lg:text-3xl text-xl font-bold tracking-tighter drop-shadow">
                    Abstr Gradient NFT
                  </h4>
                  <div className="flex items-center gap-3 mt-2">
                    <Image src={man.src} width={32} height={32} alt="man" />
                    <p className="lg:text-xl font-bold">Arkhan17</p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.20)] text-white px-3 py-2 lg:px-6 lg:py-4 flex justify-between lg:text-md text-xs items-center rounded-xl h-20 backdrop-blur-xl w-full">
                  <div>
                    <p className="lg:text-xs text-[10px] font-medium mb-1.5">
                      Current Bid
                    </p>
                    <PrimaryPrice color="#fff" />
                  </div>
                  <div>
                    <p className="lg:text-xs text-[10px] font-medium mb-1.5">
                      Ends in
                    </p>
                    <p className="tracking-wider">
                      <span className="font-bold">12</span>h{" "}
                      <span className="font-bold">43</span>m{" "}
                      <span className="font-bold">42</span>s
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlides;
