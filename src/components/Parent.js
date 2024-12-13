import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor(){
        super();
        this.state={
            name:""
        }
    }


    handleCallback=(childData)=>{
        this.setState({name:childData})
    }
  render() {
    const {name}=this.state;
    return (
      <div>
        <Child parentCallback={this.handleCallback} />
        <br />
        {name}
        <br /><br /><br />
      </div>
    )
  }
}
