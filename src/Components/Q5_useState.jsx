import React, { useState } from 'react'

function Q5_useState() {
    const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='ml-2.5 font-bold mt-2.5'>Count: {count}</h1>
      <button
      onClick={()=>{setCount(count+1)}} 
      className="bg-blue-900 text-white px-4 py-2 rounded-lg mt-2 ml-2 hover:bg-blue-700">
  Count
</button>

    </>
  )
}

export default Q5_useState
