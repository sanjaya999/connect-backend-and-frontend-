import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const[name, setName]=useState([])
  
useEffect(()=>{ 
  axios.get('/api/name')
  .then((response)=>{
    setName(response.data)
  }
  )
  .catch((error)=>{
    console.log(error)
  })
})
  return (
    <>
      <h1>node js with express</h1>
      <p>details : {name.length}</p>
      {
        name.map((name)=>(
          <div key={name.id}> {name.name}</div>

        ))
      }
    </>
  )
}

export default App
