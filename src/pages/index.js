import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AmazeNFT from "@/components/Homepage/AmazeNFT";
import Collection from "@/components/Homepage/Collection";
import Discover from "@/components/Homepage/Discover";
import Featured from "@/components/Homepage/Featured";
import Hero from "@/components/Homepage/Hero";
import SignUpNFT from "@/components/Homepage/SignUpNFT";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>NFTERS</title>
      </Head>
      <Header />
      <Hero />
      <AmazeNFT />
      <Collection />
      <Featured />
      <SignUpNFT />
      <Discover />
      <Footer />
    </>
  );
};

export default Home;
