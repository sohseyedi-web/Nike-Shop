import React from 'react'
import Container from './../../container/Container';
import Intro from './Intro/Intro';
import Popular from './Popular/Popular';
import Products from './Products/Products';
import Services from './Services/Services';

const Layout = () => {
  return (
    <Container>
        <Intro/>
        <Popular/>
        <Services/>
        <Products/>
    </Container>
  )
}

export default Layout