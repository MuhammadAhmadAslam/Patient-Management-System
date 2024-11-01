import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/NavBar";
import PremiumDoctorsSection from "@/Components/PremiumDoctorsSection";
import SecondSection from "@/Components/SecondSection";
import ShortBackgroundSection from "@/Components/ShortBackgroundSection";
import ShortBgSectionTwo from "@/Components/ShortBgSectionTwo";
import ThirdHeroSection from "@/Components/ThirdHeroSection";
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
