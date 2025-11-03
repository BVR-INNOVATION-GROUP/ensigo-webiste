
import About from '@/components/screen/trace/About'
import Features from '@/components/screen/trace/Features'
import Hero from '@/components/screen/trace/Hero'
import FunctionW from '@/components/screen/trace/FunctionW'
import React from 'react'
import Solutions from '@/components/screen/trace/Solutions'
import Experience from '@/components/screen/trace/Experience'

const page = () => {
  return (
    <div>
        <Hero/>
        <About />
        <Features />
        <FunctionW />
        <Solutions />
        <Experience />

    </div>
  )
}

export default page