import React from 'react'
import Hero from '@/components/screen/contact/Hero'
import ContactUs from '@/components/screen/contact/ContactUs'
import Forms from '@/components/screen/contact/Forms'
import Information from '@/components/screen/contact/Information'
import RegionalInfo from '@/components/screen/contact/RegionalInfo'
import Information2 from '@/components/screen/contact/Information2'
import ActiveHours from '@/components/screen/contact/ActiveHours'
import Container from '@/components/base/Container'
const page = () => {
  return (
    <div>
      <Hero />
      <Container>
        <Forms />
        <Information />
        <RegionalInfo />
        <Information2 />
      </Container>
      <ActiveHours />
    </div>
  )
}

export default page
