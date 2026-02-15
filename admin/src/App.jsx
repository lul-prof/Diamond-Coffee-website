import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Dashboard from "./pages/Dashboard/Dashboard"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Dashboard/>

    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
