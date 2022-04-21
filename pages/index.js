import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hostitelstvi from "../components/Hostitelstvi";
import Inspiration from "../components/Inspiration";
import Navbar from "../components/Navbar/Navbar";
import Zazitky from "../components/Zazitky";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <div className='absolute bg-black w-full h-[160vw] md:h-[1000px] 2xl:h-[1220px]' />

      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <main className="pt-20 w-full px-6 md:pt-[240px] md:px-10 xl:px-20 2xl:px-40 space-y-10">
        <Hero />
      </main>

      <Inspiration />
      <Zazitky />
      <Hostitelstvi />
      <Footer />
    </div>
  )
}
