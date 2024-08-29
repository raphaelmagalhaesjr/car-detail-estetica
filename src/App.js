import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
