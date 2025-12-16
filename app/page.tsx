import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Procedimentos from "./components/procedimentos";
import BeforeAfterGallery from "./galery";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Procedimentos />
      {/* <BeforeAfterGallery /> */}
      <Footer />
    </>
  );
}
