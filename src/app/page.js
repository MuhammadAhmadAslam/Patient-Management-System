import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import PremiumDoctorsSection from "@/components/PremiumDoctorsSection";
import SecondSection from "@/components/SecondSection";
import ShortBackgroundSection from "@/components/ShortBackgroundSection";
import ShortBgSectionTwo from "@/components/ShortBgSectionTwo";
import ThirdHeroSection from "@/components/ThirdHeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <Navbar />
    <SecondSection />
    <ThirdHeroSection />
    <ShortBackgroundSection />
    <PremiumDoctorsSection />
    <ShortBgSectionTwo />
    </div>
  );
}
