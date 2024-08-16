import Banner from "./components/Banners/Banner";
import Banner1 from "./components/Banners/Banner1";
import Banner2 from "./components/Banners/Banner2";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Menu />
      <Banner />
      <Banner1 />
      <Banner2 />
      <Footer />
    </>
  );
}

export default App;
