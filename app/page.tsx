import Header from "./components/header";
import Footer from "./components/footer";
import Servicos from "./components/servicos";
import Sobre from "./components/sobre";

export default function Home() {
  return (
    <>
      <Header />
      <Servicos />
      <Sobre />
      <Footer />
    </>
  );
}
