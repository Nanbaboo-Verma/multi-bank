import "./App.css";
import Fixed from "./components/fixed/fixed";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Offer from "./components/offer/offer";
import Product from "./components/product/product";
import Map from "./components/map/map";
import Questions from "./components/question/questions";
import ReadFaqs from "./components/read-faqs/read-faqs";
import MultiBankMobile from "./components/multiBank Mobile/multibankmobile";
import Deposit from "./components/Deposit/deposit";

function App() {
  return (
    <>
      <Fixed />
      <Header />
      <Hero />
      <Offer />
      <MultiBankMobile />
      <Deposit />
      <Questions />
      <ReadFaqs />
      <Map />
      <Footer />
    </>
  );
}

export default App;
