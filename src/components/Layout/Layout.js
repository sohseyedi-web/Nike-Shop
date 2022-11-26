import React from 'react'
import Container from './../../container/Container';
import Intro from './Intro/Intro';
import Popular from './Popular/Popular';
import Services from './Services/Services';

const Layout = () => {
  return (
    <Container>
        <Intro/>
        <Popular/>
        <Services/>
    </Container>
  )
}

export default Layout