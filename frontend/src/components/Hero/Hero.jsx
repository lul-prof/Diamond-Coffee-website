import React from 'react'
import './Hero.css'
import { assets, sliderImages } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate=useNavigate();
  return (
    <div className="hero-container" id='home'>
        <div className="hero-slider">

            <div className="hero-slider-images">
                <img src={sliderImages.SliderImg1} alt="" />
            </div>

            <div className="hero-text">
                <h1>
                    The Leading
                </h1>

                <p>
                    Kenyan
                </p>

                <h2 className='exporters'>
                    Coffee Exporters
                </h2>

                <div className="hero-text-btn">
                    <button onClick={()=>navigate('/products')}>Shop Now</button>
                </div>

            </div>
            
            
        </div>
    </div>
  )
}

export default Hero