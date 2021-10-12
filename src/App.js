import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import BuyNow from "./components/BuyNow/BuyNow";
import Watch from "./components/Watch/Watch";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import AboutUs from "./components/AboutUs/AboutUs";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import BuyPopup from "./components/BuyPopup/BuyPopup";
import BuyInput from "./components/BuyInput/BuyInput";
import { useState } from 'react';

function App() {
  const [isbuybutton, setIsbuybutton] = useState(false);
  const [isbuyinput, setIsbuyinput] = useState(false);
  console.log("pop up", isbuybutton)
  return (
    <div className="page-container">
      <Header />
      <BuyNow setIsbuyinput={setIsbuyinput} />
      <Watch />
      <HowToBuy setIsbuyinput={setIsbuyinput} />
      <Faq />
      <AboutUs />
      <Footer />
      {isbuybutton && <BuyPopup setIsbuybutton={setIsbuybutton} />}
      {isbuyinput && <BuyInput setIsbuyinput={setIsbuyinput} setIsbuybutton={setIsbuybutton} />}
    </div>
  );
}

export default App;
