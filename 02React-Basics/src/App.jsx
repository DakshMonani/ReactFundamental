import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card';
function App() {
  return (
    <>
      <Card username = "Daksh Monani" btnText ="Follow me!"/>
      <Card username = "Mihir Sodha" />
    </>
  )
}

export default App
