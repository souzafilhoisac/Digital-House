import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Produto from './Produto';

function Web(){
  return (
    <div className="container">
     <Header />
     <Banner />
     <Produto />
     <Footer />
    </div>
  )

}
export default Web;