import React, { useState } from 'react'

function HooksState() {
    const [name,setName] = useState("Annie");
  return (
    <div>
        <h1>State Hooks</h1>
        
        <p>My name is {name}</p>
        <button onClick={()=>setName('Kevin')}>Change name</button>
    </div>
  )
}

export default HooksState;