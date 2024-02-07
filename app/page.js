import Enjoy from "./components/Enjoy";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Event from "./components/Event";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Hero/>
      <Enjoy/>
      <Highlight/>
      <Event/>
      <Footer/>
    </main>
  );
}
