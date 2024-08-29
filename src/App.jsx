import Animation from "./components/animation/Animation";
import Appartment from "./components/Appartment/Appartment";
import Beast from "./components/Beast deal/Beast";
import Closer from "./components/Closer view/Closer";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/products/Products";
import ROuter from "./components/router/Router";
import Contactus from "./pages/Contactus/Contactus";
import {  Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Propreties from "./pages/Properties/Propreties";
import Proprety from "./pages/Property Details/Proprety-Details";
const App = () => {
  return (
    <div className="APP">
      <Header />
     
      <Routes>
      <Route path="/" element={<ROuter/>} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Proporty-Details" element={<Proprety />} />
      <Route path="/Properties" element={<Propreties />} />
      </Routes>
     
      <Footer />
    </div>
  );
};

export default App;
