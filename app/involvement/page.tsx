import Impact from '@/components/screen/involvement/Impact'
import Hero from '@/components/screen/involvement/Hero'
import React from 'react'
import Plantee from '@/components/screen/involvement/Plantee'
import Container from '@/components/base/Container'
import Support from '@/components/screen/involvement/Support'
import Plans from '@/components/screen/involvement/Plans'
import Opportunity from '@/components/screen/involvement/Opportunity'
import Apply from '@/components/screen/involvement/Apply'
import Program from '@/components/screen/involvement/Program'
import Change from '@/components/screen/involvement/Change'

const page = () => {
    return (
        <div>
            <Hero />
            <Impact />
            <Container>
                <Plantee />
            </Container>
            <Support />
            <Container>
                <Plans />
            </Container>
                <Opportunity />
                <Apply />
            <Program />
            <Change />
        </div>
    )
}

export default page