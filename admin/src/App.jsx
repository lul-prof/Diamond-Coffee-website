import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/Home/HomePage";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
