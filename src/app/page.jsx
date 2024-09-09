import Navbar from "@/_components/Navbar";
import styles from "./page.module.css";
import MainAudio from "@/_components/MainAudio";
import Reviews from "@/_components/Reviews";
import Album from "@/_components/Album";
import Footer from "@/_components/Footer";


export default function Home() {
  return (
   <div className="wrapper">
     <Navbar />
    <div className="main-grid">
      <MainAudio />
      <Reviews />
      <Album />
    </div>
    <Footer />
   </div>
  );
}
