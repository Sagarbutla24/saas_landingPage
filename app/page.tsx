import FooterSection from "@/components/Sections/FooterSection";
import HeroSection from "@/components/Sections/HeroSection";
import LogoGroupSection from "@/components/Sections/LogoGroupSection";
import Navbar from "@/components/common/Navbar";
import Image from "next/image"
import WalletOverview from "@/components/Sections/WalletOverview";
import FeratureSection from "@/components/Sections/FeratureSection";
import TestimonialSection from "@/components/Sections/TestimonialSection";
import LetsTalksection from "@/components/Sections/LetsTalksection";
export default function Home() {
return (
  <main className="bg-[#2B2B2B] px-4 md:px-[3.75rem]">
    <section className="bg-[#2B2B2B] pt-[1.5625rem]"> <Navbar /></section>
   <div>
    <HeroSection />
    <LogoGroupSection />
    <WalletOverview />
    <FeratureSection />
    <TestimonialSection />
    <LetsTalksection />
   </div>

    <FooterSection/>

  </main>
)
}
