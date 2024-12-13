import React, { Component } from 'react'
import sai from '../assets/sai.jpeg'
import './stylesheets/State.css'
import styles from './navbar.module.css'

export default class State extends Component {
    constructor(){
        super();
        this.state={
            name:"salini",
        }
    }

    handleClick=()=>{
      this.setState({
        name:"Asha",
        marks:78
      })
    }
    
  render() {
    return (
      <div>
        <h1 style={{color:"green"}}>Welcome {this.state.name}</h1>
        <button onClick={this.handleClick} className='btn btn-primary'>Change name</button><br />
        <img className='img-sai' src={sai} alt="" />
        <h1 className={styles.headstyle}>Im css module</h1>

        {/* <h2>{result}</h2> */}
        <h3>{this.props.name}</h3>
        

      </div>
    )
  }
}

State.defaultProps={
  name:"Annie"
}
