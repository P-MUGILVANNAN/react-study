import React from 'react'

function List() {
    const num=[10,20,30,40,50];

    const numbData=num.map((num)=>{
        return <li>{num*5}</li>
    })

    const actors=['vijay','surya','ajith','sk','simbu'];
    const actorData=actors.map((actor,index)=>{

        return <li key={index}>{actor}</li>
    })
  return (
    <div>
        <h1>Numbers</h1>
        <ol>
            {numbData}
        </ol>
        <ul>
            {actorData}
        </ul>
    </div>
  )
}

export default List