import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { auth } from "auth";

async function WebPageLayout({ children, isHeroSectionVisible }) {
  let session;
  try {
    session = await auth();
    console.log(session, "server-side session");
  } catch (error) {
    console.error("Error fetching session:", error);
  }

  return (
    <section>
      <Navbar isHeroSectionVisible={isHeroSectionVisible} session={session} />
      {children}
      <Footer />
    </section>
  );
}

export default WebPageLayout;
