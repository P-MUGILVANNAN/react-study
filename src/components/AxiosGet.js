import axios from 'axios'
import React, { Component } from 'react'

export default class AxiosGet extends Component {
    state={
        persons:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const persons=response.data;
            this.setState({persons})
        })
    }
  render() {
    return (
      <div>
        <h1>axios get</h1>
        <h3>User List</h3>
        <ul>
            {
                this.state.persons.map((person) => {
                    return <li key={person.id}>{person.name}</li>
                })
            }
        </ul>
      </div>
    )
  }
}