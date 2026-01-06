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
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { locations } from './data/locations';
import { servicesData } from './data/services';
import ServicePage from './pages/ServicePage';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <ScrollProgress />
        <BackToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />

          {/* SEO Service Pages */}
          {servicesData.map((service) => (
            <Route
              key={service.slug}
              path={`/services/${service.slug}`}
              element={<ServicePage data={service} />}
            />
          ))}

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
