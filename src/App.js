import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Intro from "./components/home/Intro";
import Reservation from "./components/home/Reservation";
import ContactUs from "./components/home/layout/ContactUs";
import AboutUs from "./components/home/layout/AboutUs";
import Header from "./components/home/layout/Header";
import Footer from "./components/home/layout/Footer";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/intro.scss";
import "./styles/reservation.scss";
import "./styles/contact.scss";
import "./styles/about.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
