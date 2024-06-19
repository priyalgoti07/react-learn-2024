import { useState } from 'react'
import './App.css'
import Card from './Componets/Card'

function App() {
  const [count, setCount] = useState(0)

  const profileData = {
    name: "priyal",
    age: 28
  }

  return (
    <>
      <h1 className='bg-green-400 rounded-md text-2xl p-5 text-yellow-50 mb-5'>React With Tailwind</h1>
      <Card userInfo={profileData} btnText="Visit me"/>
      <Card  btnText="Click me"/>
    </>
  )
}

export default App
