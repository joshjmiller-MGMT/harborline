import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LocationPage from './pages/LocationPage';
import ScrollToTop from './components/ScrollToTop';
import { locations } from './data/locations';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* SEO Location Pages */}
          {locations.map((loc) => (
            <Route
              key={loc.slug}
              path={`/locations/${loc.slug}`}
              element={<LocationPage data={loc} />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
