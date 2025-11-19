import SectionHeader from '@/components/base/SectionHeader'
import React from 'react'

const Impact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between py-8">
      <SectionHeader
        heading={
          <span className="bg-gradient-to-r from-[#1D7C2E] to-[#242020] bg-clip-text text-transparent">
            Ways to Make an Impact
          </span>
        }
        caption="Choose the approach that fits your passion and capacity"
        leftAlign={false}
        className="mt-6"
      />
    </div>
  )
}

export default Impact
