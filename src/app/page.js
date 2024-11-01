import Image from "next/image";
import Navbar from "@/components/NavBar";
import SecondSection from "@/components/SecondSection";
import ThirdHeroSection from "@/components/ThirdHeroSection";
import ShortBackgroundSection from "@/components/ShortBackgroundSection";
import PremiumDoctorsSection from "@/components/PremiumDoctorsSection";
import ShortBgSectionTwo from "@/components/ShortBgSectionTwo";
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
