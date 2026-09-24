import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/navbar';
import Footer from './component/footer';

/* Home page sections */
import Home from './component/home';
import Services from './component/Services';
import Destinations from './component/Destinations';
import About from './component/About';

/* Dedicated pages */
import ServicePage from './Pages/Service';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';

import './App.css';

/* Landing page — all sections stacked */
const LandingPage = () => (
  <main>
    <Home />
    <Services />
    <Destinations />
    <About />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<LandingPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
