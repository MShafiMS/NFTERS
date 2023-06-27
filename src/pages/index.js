import AmazeNFT from "@/components/Homepage/AmazeNFT";
import Collection from "@/components/Homepage/Collection";
import Discover from "@/components/Homepage/Discover";
import Featured from "@/components/Homepage/Featured";
import Hero from "@/components/Homepage/Hero";
import SignUpNFT from "@/components/Homepage/SignUpNFT";

const Home = () => {
  return (
    <main>
      <Hero />
      <AmazeNFT />
      <Collection />
      <Featured />
      <SignUpNFT />
      <Discover />
    </main>
  );
};

export default Home;
