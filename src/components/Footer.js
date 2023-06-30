import { integral_cf } from "@/utils/LocalFonts";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto lg:w-full w-11/12">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 100,
          transition: {
            duration: 0.9,
            delay: 0.1,
          },
        }}
        className="mt-20 mb-16 flex lg:flex-row flex-col gap-14 lg:gap-24"
      >
        <div className="w-fit">
          <h1 className={`text-2xl ${integral_cf.className} font-bold`}>
            NFters
          </h1>
          <p className="mt-7 mb-8 text-[#565656] text-sm max-w-sm">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/" target="blank">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_413)">
                  <path
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z"
                    fill="#3B5998"
                  />
                  <path
                    d="M22.5252 18.7045H19.3133V30.4713H14.447V18.7045H12.1326V14.5692H14.447V11.8931C14.447 9.97949 15.3561 6.98291 19.3566 6.98291L22.9613 6.99799V11.012H20.3459C19.9169 11.012 19.3136 11.2264 19.3136 12.1392V14.573H22.9503L22.5252 18.7045Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_413">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="https://twitter.com/" target="blank">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_417)">
                  <path
                    d="M18.0002 35.9997C27.9412 35.9997 36 27.9409 36 17.9998C36 8.0588 27.9412 0 18.0002 0C8.05917 0 0.000366211 8.0588 0.000366211 17.9998C0.000366211 27.9409 8.05917 35.9997 18.0002 35.9997Z"
                    fill="#55ACEE"
                  />
                  <path
                    d="M29.0257 12.9361C28.2543 13.2781 27.4246 13.5094 26.5544 13.6128C27.4428 13.0804 28.1247 12.2382 28.4465 11.2329C27.6151 11.7261 26.6939 12.0838 25.7143 12.2767C24.9295 11.4408 23.8113 10.9185 22.5731 10.9185C20.1974 10.9185 18.2706 12.8452 18.2706 15.2209C18.2706 15.5582 18.3088 15.8864 18.3826 16.2015C14.8069 16.0221 11.6364 14.3093 9.51424 11.7055C9.14396 12.3408 8.93155 13.0804 8.93155 13.8688C8.93155 15.3611 9.69167 16.6786 10.8455 17.45C10.1406 17.4278 9.4767 17.2343 8.89689 16.9112C8.89657 16.9295 8.89657 16.9478 8.89657 16.9658C8.89657 19.0504 10.3803 20.7892 12.3481 21.1842C11.9875 21.283 11.6066 21.3353 11.2148 21.3353C10.9369 21.3353 10.6677 21.3087 10.4053 21.2586C10.9527 22.9675 12.5413 24.2115 14.4244 24.2465C12.9517 25.4007 11.0967 26.0883 9.08043 26.0883C8.7339 26.0883 8.39057 26.0681 8.05463 26.0279C9.95767 27.2492 12.2198 27.9612 14.6493 27.9612C22.5631 27.9612 26.891 21.4053 26.891 15.7192C26.891 15.5328 26.8868 15.347 26.8784 15.1628C27.7198 14.5564 28.4491 13.7989 29.0257 12.9361Z"
                    fill="#F1F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_417">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/" target="blank">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_422)">
                  <path
                    d="M18 35.9998C27.9411 35.9998 36 27.9409 36 17.9998C36 8.05863 27.9411 -0.000244141 18 -0.000244141C8.05884 -0.000244141 -3.05176e-05 8.05863 -3.05176e-05 17.9998C-3.05176e-05 27.9409 8.05884 35.9998 18 35.9998Z"
                    fill="#007AB9"
                  />
                  <path
                    d="M28.7548 19.4481V26.8691H24.4523V19.9455C24.4523 18.207 23.8311 17.0198 22.2733 17.0198C21.0845 17.0198 20.3783 17.8191 20.0664 18.593C19.9531 18.8696 19.9239 19.2537 19.9239 19.6416V26.8688H15.6211C15.6211 26.8688 15.6788 15.1424 15.6211 13.9286H19.9242V15.7623C19.9156 15.7768 19.9034 15.7909 19.8957 15.8047H19.9242V15.7623C20.496 14.8825 21.5157 13.6247 23.8019 13.6247C26.6326 13.6247 28.7548 15.4742 28.7548 19.4481ZM11.12 7.69092C9.64813 7.69092 8.68521 8.65705 8.68521 9.9264C8.68521 11.1688 9.62022 12.1628 11.0635 12.1628H11.0914C12.5921 12.1628 13.5252 11.1688 13.5252 9.9264C13.4966 8.65705 12.5921 7.69092 11.12 7.69092ZM8.94094 26.8691H13.2422V13.9286H8.94094V26.8691Z"
                    fill="#F1F2F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_422">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex gap-14 lg:gap-24">
          <div className="w-fit">
            <p className="text-lg font-bold">Market Place</p>
            <ul className="mt-6 text-sm text-[#3D3D3D] font-medium flex flex-col gap-3">
              <li>
                <Link href="">All NFTs</Link>
              </li>
              <li>
                <Link href="">New</Link>
              </li>
              <li>
                <Link href="">Art</Link>
              </li>
              <li>
                <Link href="">Sports</Link>
              </li>
              <li>
                <Link href="">Utility</Link>
              </li>
              <li>
                <Link href="">Music</Link>
              </li>
              <li>
                <Link href="">Domain Name</Link>
              </li>
            </ul>
          </div>
          <div className="w-fit">
            <p className="text-lg font-bold">My Account</p>
            <ul className="mt-6 text-sm text-[#3D3D3D] font-medium flex flex-col gap-3">
              <li>
                <Link href="">Profile</Link>
              </li>
              <li>
                <Link href="">Favorite</Link>
              </li>
              <li>
                <Link href="">My Collections</Link>
              </li>
              <li>
                <Link href="">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-fit">
          <p className="text-lg font-bold">Stay in the loop</p>
          <p className="mt-6 max-w-sm text-sm text-[#363639]">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className="w-full mt-6 border-2 border-[#F1F1F1] flex rounded-[46px] p-1.5">
            <input
              type="text"
              placeholder="Enter your email address.."
              className="outline-none ml-6 placeholder:text-[#959595] text-xs w-full"
            />
            <button className="text-xs text-white w-40 h-7 lg:h-12 bg-blue rounded-3xl">
              Subscibe Now
            </button>
          </div>
        </div>
      </motion.div>
      <div className="border-t border-[#F4F4F4] pt-4 pb-6">
        <p className="text-center text-sm text-[#A4A4A4] leading-[160%]">
          Copyright © 2022 Avi Yansah
        </p>
      </div>
    </div>
  );
};

export default Footer;
