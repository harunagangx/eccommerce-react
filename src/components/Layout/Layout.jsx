import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../routes/Routers';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
