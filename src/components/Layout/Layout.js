import React from 'react'
import Container from './../../container/Container';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro';
import Popular from './Popular/Popular';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Layout = () => {
  return (
    <Container>
        <Intro/>
        <Popular/>
        <Services/>
        <Products/>
        <Reviews/>
        <Footer/>
    </Container>
  )
}

export default Layout