import Container from "@/components/base/Container";
import Footer from "@/components/base/Footer";
import Navbar from "@/components/Navbar";
import EcoSystem from "@/components/screen/home/EcoSystem";
import EnsigoTrace from "@/components/screen/home/EnsigoTrace";
import Hero from "@/components/screen/home/Hero";
import Impact from "@/components/screen/home/Impact";
import Problem from "@/components/screen/home/Problem";
import Solution from "@/components/screen/home/Solution";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="py-[6rem]">
        <Problem />
      </Container>



      {/* divider  */}
      <Container>
        <div className="flex items-center justify-stretch gap-2">
          <div className='h-[1px] bg-gray-200 flex-1' />
          <div className="rounded-full bg-primary items-center flex justify-center text-white h-10 w-10">
            <ChevronDown size={15} />
          </div>
          <div className='h-[1px] bg-gray-200 flex-1' />
        </div>
      </Container>

      <Container className="py-[6rem]">
        <Solution />
      </Container>

      <EcoSystem />

      <Container className="py-[6rem]">
        <EnsigoTrace />
      </Container>

      <Impact />

    </>
  );
}
