import Header from "./components/header";
import Footer from "./components/footer";
import Servicos from "./components/servicos";
import Sobre from "./components/sobre";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Sobre />
      <Servicos />
      <Footer />
    </>
  );
}
