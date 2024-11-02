import Navbar from "@/Components/NavBar";
import PremiumDoctorsSection from "@/Components/PremiumDoctorsSection";
import SecondSection from "@/Components/SecondSection";
import ShortBackgroundSection from "@/Components/ShortBackgroundSection";
import ShortBgSectionTwo from "@/Components/ShortBgSectionTwo";
import ThirdHeroSection from "@/Components/ThirdHeroSection";

export default function Home() {
  return (
    <div className="">
    <Navbar isHeroSectionVisible={true}  />
    <SecondSection />
    <ThirdHeroSection />
    <ShortBackgroundSection />
    <PremiumDoctorsSection />
    <ShortBgSectionTwo />
    </div>
  );
}
