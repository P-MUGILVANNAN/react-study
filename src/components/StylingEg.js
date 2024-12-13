import React, { Component } from 'react'
import './styling.css'
import module from './navbar.module.css'

export default class StylingEg extends Component {

  render() {
    const styleEg={
        color:"green",
        fontSize:"40px",
    }
    return (
      <div>
        <h1 style={{color:'red',fontSize:'40px'}}>Inline styling</h1>
        <h1 style={styleEg}>Internal styling</h1>
        <h3 className='hello'>External styling</h3>
        <h2 className={module.headstyle}>Module styling</h2>
      </div>
    )
  }
}
