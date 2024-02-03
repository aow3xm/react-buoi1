import React, { Component } from 'react'
import '../assets/style.css'
export default class Header extends Component {
  render() {
    return (
        <header className='bg-dark py-2 text-white'>
            <div className='container d-flex justify-content-between align-items-center'>
                <p className='brand-logo fs-1 fw-bold my-0'>BRAND</p>
                <nav>
                    <ul>
                        <li><a className='active' href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
      </header>
    )
  }
}
