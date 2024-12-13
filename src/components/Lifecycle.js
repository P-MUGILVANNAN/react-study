// import React, { Component } from 'react'
// export default class Lifecycle extends Component {
//     constructor(){
//         console.log("constructor is executed");
//         super()
//         this.state = {
//             name:'Asha'
//         }
//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps is executed",props,state);
//         return null;
//     }
//     componentDidMount(){
//         console.log("componentDidMount is executed");
//     }
//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate is executed");
//         return true;
//     }
//     handleClick=()=>{
//         this.setState({name:'Rahul'})
//     }
//     getSnapshotBeforeUpdate(props,states){
//         console.log("getSnapshotBeforeUpdate is executed",props,states);
//         return null;
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate is executed");
//     }
//     componentWillUnmount(){
//         console.log("componentWillUnmount is executed");
//     }
//   render() {
//     console.log("render is executed");
    
//     return (
//       <div>
//         <h1> Lifecycle Methods</h1>
//         <p> Name: {this.state.name}</p>
//         <p> Age : {this.props.age}</p>
//         <br />
//         <button onClick={this.handleClick}>Change state</button>
//       </div>
//     )
//   }
// }

// Lifecycle.defaultProps={
//     age:19
// }


import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        console.log('costructor is executed');
        
        super();
        this.state={name:'Rahul'}
    }
    static getDerivedStateFromProps(state,props){
        console.log("derivedStateFromProps is executed",state,props);
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount is executed");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate is executed");
        return true;
    }
    handleChange=()=>{
        this.setState({name:'Rahul Kumar'})
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is executed");
    }
    getSnapshotBeforeUpdate(state,props){
        console.log("getSnapshotBeforeUpdate is executed",state,props);
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is executed");
    }
  render() {
    console.log('render is executed');
    
    return (
      <div>
        <h1>Lifecycle methods</h1>
        <p>My name is {this.state.name} and I'm {this.props.age} years old.</p>
        <button onClick={this.handleChange}>Change name</button>
      </div>
    )
  }
}
Lifecycle.defaultProps={
    age:19
}