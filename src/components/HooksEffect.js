import React, { useEffect, useState } from 'react'

function HooksEffect() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times.`
    })
  return (
    <div>
        <button onClick={()=>setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default HooksEffect