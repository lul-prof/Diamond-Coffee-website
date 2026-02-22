import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar/Navbar'
import ContactsPage from './pages/contacts/ContactsPage'
import Products from './pages/Products/Products'
import Footer from './components/Footer/Footer'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import { Toaster } from 'react-hot-toast';

//Map leaflet Configurations-React Leaflet
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ProgressBar from './components/ProgressBar/ProgressBar'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Review from './pages/Review/Review'
import OrdersPage from './pages/Orders/OrdersPage'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/contact' element={<ContactsPage/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/product/:_id' element={<SingleProduct/>} />
      <Route path='/blog/:_id' element={<SingleBlog/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}  />
      <Route path='/review' element={<Review/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
    
  )
}

export default App
