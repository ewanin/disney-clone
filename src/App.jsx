import Action from "./components/Action";
import Comedy from "./components/Comedy";
import Coming from "./components/Coming";
import Friends from "./components/Fiends";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Newly from "./components/Newly";
import PopChan from "./components/PopChan";
import PopGen from "./components/PopGen";
import PopLang from "./components/PopLang";
import PopShow from "./components/PopShow";
import PopTeen from "./components/PopTeen";
import ProductionHouse from "./components/ProductionHouse";
import Sports from "./components/Sports";
import SuperHero from "./components/SuperHero";
import Top10 from "./components/Top10";


export default function App() {
  return (
    <section>
      <Header />
      <Hero />
      <Latest />
      <Sports />
      <Newly />
      <Top10 />
      <Coming />
      <ProductionHouse />
      <Action />
      <PopShow />
      <PopChan />
      <SuperHero />
      <Friends />
      <PopLang />
      <PopGen />
      <Comedy />
      <PopTeen />
      <Footer />
    </section>
  )
}