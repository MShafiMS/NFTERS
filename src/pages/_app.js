import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { dm_sans } from "@/utils/GoogleFonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={dm_sans.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
