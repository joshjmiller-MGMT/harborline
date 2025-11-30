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
          <Route path="/locations/washington-dc" element={<LocationPage
            city="Washington D.C."
            image="/location_dc_capitol_event.png"
            title="Washington D.C. Event Entertainment"
            intro="From black-tie galas at the Smithsonian to high-energy weddings at the Wharf, Harborline brings the capital's best talent to your stage."
            venues={["The Anthem", "Union Station", "The Mayflower", "National Building Museum"]}
          />} />
          <Route path="/locations/baltimore" element={<LocationPage
            city="Baltimore"
            image="/location_baltimore_waterfront.png"
            title="Baltimore Live Bands & DJs"
            intro="Charm City deserves charming entertainment. We specialize in waterfront events, Inner Harbor conventions, and historic venue celebrations."
            venues={["Sagamore Pendry", "Four Seasons", "Visionary Art Museum", "M&T Bank Stadium"]}
          />} />
          <Route path="/locations/annapolis" element={<LocationPage
            city="Annapolis"
            image="/location_annapolis_nautical_wedding.png"
            title="Annapolis Wedding Entertainment"
            intro="Celebrate on the bay with the perfect soundtrack. Our bands specialize in the nautical elegance that defines Annapolis events."
            venues={["Annapolis Maritime Museum", "USNA Club", "Chesapeake Bay Beach Club"]}
          />} />
          <Route path="/locations/bethesda" element={<LocationPage
            city="Bethesda"
            image="/location_bethesda_private_party.png"
            title="Bethesda Private Event Music"
            intro="Sophisticated entertainment for Montgomery County's most exclusive private parties and corporate gatherings."
            venues={["Congressional Country Club", "Strathmore", "Hyatt Regency"]}
          />} />
          <Route path="/locations/alexandria" element={<LocationPage
            city="Alexandria"
            image="/location_alexandria_historic_venue.png"
            title="Old Town Alexandria Event Pros"
            intro="Timeless music for historic settings. We understand the unique acoustics and atmosphere of Alexandria's most beloved venues."
            venues={["The Torpedo Factory", "Carlyle House", "River Farm"]}
          />} />
          <Route path="/locations/silver-spring" element={<LocationPage
            city="Silver Spring"
            image="/location_silver_spring_live_music.png"
            title="Silver Spring & Metro DC Music"
            intro="Bringing dynamic energy to the cultural hub of Silver Spring. Perfect for festivals, community events, and modern weddings."
            venues={["The Fillmore", "Civic Building", "AFI Silver"]}
          />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
