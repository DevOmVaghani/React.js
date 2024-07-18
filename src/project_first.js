import { useState } from 'react'
// import React, { useState } from 'react'

function Project_first() {

const [color,setcolor]=useState("")


  return (



    
    <div className='w-full h-screen  duration-200' style={{backgroundColor:color}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button onClick={()=>{setcolor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}}>red    </button>
    <button onClick={()=>{setcolor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}}>green    </button>
    <button onClick={()=>{setcolor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"blue"}}>blue    </button>
    <button onClick={()=>{setcolor("black")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"black"}}>black    </button>
    <button onClick={()=>{setcolor("white")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"white"}}>white    </button>
    <button onClick={()=>{setcolor("olive")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"olive"}}>olive    </button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}}>red    </button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}}>red    </button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}}>red    </button>
  </div>
    </div>
    </div>
  )
}

export default Project_first