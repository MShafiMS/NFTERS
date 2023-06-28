import "@/styles/globals.css";
import { dm_sans } from "@/utils/GoogleFonts";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} className={dm_sans.className} />;
}
