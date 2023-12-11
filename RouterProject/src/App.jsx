import { useState } from 'react'

import './App.css'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
