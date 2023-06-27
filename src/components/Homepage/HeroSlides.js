import man from "@/assets/manprofile.png";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import Image from "next/image";
import { useState } from "react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomCursor from "../CustorCursor";

const HeroSlides = () => {
  const [isHover, setIsHover] = useState(false);

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
      className="w-5/12 relative custom-cursor"
    >
      <CustomCursor show={isHover} />
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
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-[24px] relative">
              <Image
                src={slide.img}
                width={400}
                height={440}
                alt="Slide"
                className={`${idx === 2 && " rotate-180"}`}
              />
              <div className="absolute flex flex-col justify-between top-0 text-white p-6 left-0 w-full h-full">
                <div>
                  <h4 className="text-3xl font-bold tracking-tighter drop-shadow">
                    Abstr Gradient NFT
                  </h4>
                  <div className="flex items-center gap-3 mt-2">
                    <Image src={man.src} width={32} height={32} />
                    <p className="text-xl font-bold">Arkhan17</p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.20)] text-white px-6 py-4 flex justify-between items-center rounded-xl h-20 backdrop-blur-xl w-[348px]">
                  <div>
                    <p className="text-xs font-medium">Current Bid</p>
                    <div className="flex gap-2.5 mt-1.5 items-center">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_143)">
                          <path
                            d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_143">
                            <rect
                              width="13"
                              height="21.3333"
                              fill="white"
                              transform="translate(0 0.512939)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="font-bold tracking-wider">0.25 ETH</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Ends in</p>
                    <p className="tracking-wider">
                      <span className="font-bold">12</span>h{" "}
                      <span className="font-bold">43</span>m{" "}
                      <span className="font-bold">42</span>s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlides;
