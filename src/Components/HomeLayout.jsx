import React, { Component } from 'react'
import Header from './Header'
import Intro from './Intro'
import About from './About'
import Footer from './Footer'

export default class HomeLayout extends Component {
  render() {
    return (
        <div>
            <Header />
        <Intro />
        <About />
        <Footer />
      </div>
    )
  }
}
