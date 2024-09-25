import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DealershipSection from './components/DealershipSection';
import Auctions from './components/Auction';
import Fleets from './components/Fleets';
import AssemblyLines from './components/AssemblyLines';
import ScheduleDemo from './components/ScheduleDemo';
import AssemblyDetails from './pages/AssemblyDetails';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function Layout({ children }) {
  const location = useLocation();
  
  // Add the Schedule Demo page to the routes that show the Header and Footer
  const showHeaderFooter = location.pathname === '/' || 
                           location.pathname === '/assembly-details' || 
                           location.pathname === '/schedule-demo'; // Added '/schedule-demo'

  return (
    <>
      {showHeaderFooter && <Header />}
      <main>{children}</main>
      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dealership" element={<DealershipSection />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/fleets" element={<Fleets />} />
          <Route path="/assembly-lines" element={<AssemblyLines />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} /> {/* Schedule Demo */}
          <Route path="/assembly-details" element={<AssemblyDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
