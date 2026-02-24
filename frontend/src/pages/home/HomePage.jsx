import React from 'react'
import Hero from '../../components/Hero/Hero'
import Divider from '../../components/Divider/Divider'
import Blogs from '../Blogs/Blogs'
import Achievements from '../../components/Achievements/Achievements'
import Testimonials from '../../components/Testimonials/Testimonials'


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