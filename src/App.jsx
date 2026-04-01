
import { Suspense, useState } from 'react'
import './App.css'
import Banners from './components/Homepage/Banner/Banners'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Homepage/Players/Players'
import { ToastContainer } from 'react-toastify'
const playerPromise= fetch('/playerData.json')
.then(res=>res.json())

function App() {
  const [coin,setCoin]=useState(5000)

  return (
   <>
<Navbar coin={coin}></Navbar>
<Banners></Banners>

<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}></Players>
</Suspense>
<ToastContainer></ToastContainer>
   </>
  )
}

export default App
