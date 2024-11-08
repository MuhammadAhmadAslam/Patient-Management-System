import Footer from "@/Components/Footer";
import Navbar from "@/Components/NavBar";
import PremiumDoctorsSection from "@/Components/PremiumDoctorsSection";
import SecondSection from "@/Components/SecondSection";
import ShortBackgroundSection from "@/Components/ShortBackgroundSection";
import ShortBgSectionTwo from "@/Components/ShortBgSectionTwo";
import ThirdHeroSection from "@/Components/ThirdHeroSection";
import { auth } from "auth";
export default async function Home() {
  let session;
  try {
    session = await auth();
    console.log(session, "server-side session");
  } catch (error) {
    console.error("Error fetching session:", error);
  }
  return (
    <div className="">
      <Navbar isHeroSectionVisible={true} session={session} />
      <SecondSection />
      <ThirdHeroSection />
      <ShortBackgroundSection />
      <PremiumDoctorsSection />
      <ShortBgSectionTwo />
      <Footer />
    </div>
  );
}
