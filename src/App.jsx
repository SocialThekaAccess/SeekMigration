import Navbar from './component/navbar';
import Home from './component/home';
import Services from './component/Services';
import Destinations from './component/Destinations';
import About from './component/About';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <Destinations />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
