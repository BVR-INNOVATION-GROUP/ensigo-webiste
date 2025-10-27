import Container from "@/components/base/Container"
import EnvironmentImpact from "@/components/screen/impact/EnvironmentImpact"
import GrowingImpact from "@/components/screen/impact/GrowingImpact"
import Hero from "@/components/screen/impact/Hero"
import Indicators from "@/components/screen/impact/Indicators"
import ReportDownload from "@/components/screen/impact/ReportDownload"
import SocialImpact from "@/components/screen/impact/SocialImpact"
import Testimonials from "@/components/screen/impact/Testimonials"


const page = () => {
    return (
        <div>
            <Container>
                <Hero />

                <GrowingImpact />
                <EnvironmentImpact />

            </Container>

            <div className="bg-paper py-[6rem]">
                <Container>
                    <SocialImpact />
                </Container>
            </div>
            <Container className="py-[6rem]">
                <Indicators />
                <Testimonials />
            </Container>
            <ReportDownload />

        </div>
    )
}

export default page