import React, { Component } from 'react'

export default class Child extends Component {

    onTrigger=(event)=>{
        this.props.parentCallback(event.target.myName.value);
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form action="" onSubmit={this.onTrigger}>
            <input type="text" name='myName' placeholder='Enter name' />
            <br /><br />
            <input type="submit" value='Submit' />
        </form>
      </div>
    )
  }
}
