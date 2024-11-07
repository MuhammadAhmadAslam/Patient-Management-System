import Footer from "@/Components/Footer";
import Navbar from "@/Components/NavBar";
import PremiumDoctorsSection from "@/Components/PremiumDoctorsSection";
import SecondSection from "@/Components/SecondSection";
import ShortBackgroundSection from "@/Components/ShortBackgroundSection";
import ShortBgSectionTwo from "@/Components/ShortBgSectionTwo";
import ThirdHeroSection from "@/Components/ThirdHeroSection";
import { auth } from "auth";
export default async function Home() {

  let session = await auth()
  console.log("app session" , session);
  return (
    <div className="">
    <Navbar isHeroSectionVisible={true} isLogin={session}  />
    <SecondSection />
    <ThirdHeroSection />
    <ShortBackgroundSection />
    <PremiumDoctorsSection />
    <ShortBgSectionTwo />
    <Footer />
    </div>
  );
}
