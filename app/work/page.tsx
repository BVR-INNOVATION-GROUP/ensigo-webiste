import Container from '@/components/base/Container'
import Approach from '@/components/screen/work/Approach'
import Hero from '@/components/screen/work/Hero'
import Projects from '@/components/screen/work/Projects'

const page = () => {
    return (
        <div>
            <Hero />
            <Container>
                <Approach />
            </Container>
            <Container>
                <Projects />
            </Container>
        </div>
    )
}

export default page