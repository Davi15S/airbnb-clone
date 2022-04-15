import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="h-[2000px] bg-black">

      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <main className="pt-20 w-full px-6 md:pt-[240px] md:px-10 xl:px-20">
        <Hero />
      </main>
    </div>
  )
}
