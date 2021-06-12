
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productsData, productsDataTwo } from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productsData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productsDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;