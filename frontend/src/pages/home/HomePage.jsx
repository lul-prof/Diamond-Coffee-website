import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Divider from '../../components/Divider/Divider'
import Blogs from '../Blogs/Blogs'
import Achievements from '../../components/Achievements/Achievements'
import Testimonials from '../../components/Testimonials/Testimonials'
import Footer from '../../components/Footer/Footer'
import SideMenu from '../../components/SideMenu/SideMenu'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Divider/>
    <Blogs/>
    <Achievements/>
    <Testimonials/>
    </>
  
  )
}

export default HomePage