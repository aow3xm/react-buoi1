import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
        <section className='intro container d-flex justify-content-center bg-light text-black my-5 py-5'>
            <div className='intro_content d-flex flex-column align-items-center'>
 <h3 className='fs-1 fw-bold'>Lorem ipsum dolor sit.</h3>
                <p className='fs-3 fw-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestias.</p>
                <button className='btn btn-primary'>Lorem, ipsum.</button>
            </div>
           
        </section>
    )
  }
}
