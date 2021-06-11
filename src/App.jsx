
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import productsData from './components/Products/data'
import Featured from './components/Featured'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productsData.coffee} />
      <Featured />
      <Products heading='Sweet Treats for You' data={productsDataTwo.deserts} />
      <Footer />
    </Router>
  );
}

export default App;