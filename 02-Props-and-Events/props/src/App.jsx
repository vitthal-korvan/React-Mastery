import { useState } from 'react'
import { Greetings } from './components/Greetings'

function App() {

  return (
    <>
      <Greetings firstName='Vitthal' lastName='korvan'/>
      <Greetings firstName='Luffy' lastName='Monkey'/>
      <Greetings/>
    </>
  )
}

export default App
