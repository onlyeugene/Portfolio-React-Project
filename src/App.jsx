import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomeIndex from './Pages/Home/HomeIndex'
import Footer from './Components/Footer/Footer'
import AboutIndex from './Pages/About/AboutIndex'
import Projects from './Pages/Projects/Projects/Projects'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<HomeIndex/>}/>
        <Route path='About' element={<AboutIndex/>}/>
        <Route path='Project' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
