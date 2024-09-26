import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import TopDevices from '../components/TopDevices'
import TrendingDevices from '../components/TrendingDevices'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <TopDevices/>
      <TrendingDevices/>
      <Blog/>
    </div>
  )
}

export default Home