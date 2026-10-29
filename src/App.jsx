import { useState } from 'react'
// import ayazImg from './ayaz,png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
// import Icard from './Icard'
// import ICardGallery from './IcardGallery'
// import StateHandling from './StateHandling'
// import ImageManipulation from './ImageManipulation'
// import SampleUseEffect from './SampleUseEffect'
// import Shopping from './Shopping'
import Home from './Home'
import Dashboard from './Dashboard'
import Registration from './Registration'
import Login from './login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App