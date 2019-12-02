import React from 'react';

import Header from './components/Header';
import ProductDetailPage from './components/ProductDetailPage';
import Footer from './components/Footer';

const App = () => {
    return (
          <React.Fragment>
              <Header />
              <ProductDetailPage />
              <Footer />
          </React.Fragment>
    )
};

export default App;
