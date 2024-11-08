import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { signOut } from "auth";
import { FaBars, FaCalendar, FaRoute, FaUser, FaUserCircle } from "react-icons/fa";

export default function Navbar({ isHeroSectionVisible, session }) {
  return (
    <section className="relative">
      <Header />
      <nav className="bg-fixed bg-no-repeat bg-[url(https://preview.colorlib.com/theme/mediplus/images/bg_3.jpg.webp)] bg-cover bg-center">
        <div className="bg-[#E3E3E3]/90 backdrop-blur-sm">
          <main className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Left side - Logo */}
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      src="https://img.freepik.com/free-vector/realistic-world-health-day-illustration-with-planet-stethoscope_23-2148864737.jpg"
                      alt="Logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                </div>

                {/* Right side - Menu for large screens */}
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">
                    Home
                  </Link>
                  <Link href="/doctors" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">
                    Doctors
                  </Link>
                  <Link href="/about" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">
                    About Us
                  </Link>
                  <Link href="/contact" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">
                    Contact Us
                  </Link>

                  <div className="flex items-center space-x-4">
                    {session ? (
                      <Button asChild className="bg-[#207DFF] hover:bg-[#1a6ad4] text-white">
                        <Link href="/doctors">Book An Appointment</Link>
                      </Button>
                    ) : (
                      <Link href="/login" className="bg-[#207DFF] hover:bg-[#1a6ad4] rounded-lg px-6 py-1 text-white">
                        Login
                      </Link>
                    )}
                  </div>

                  {/* User Icon and Dropdown */}
                  {
                    session && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div variant="ghost">
                        {session?.image ? (
                          <img src={session.image} className="w-[60px] h-[60px] rounded-full" />
                        ) : (
                          <FaUserCircle className="text-3xl border h-[60px]" />
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link href="/account" className="flex justify-center items-center gap-3">
                          <FaUser  />
                          My Account
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/doctors" className="flex justify-center items-center gap-3">
                          <FaCalendar />
                          My Appointments
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <form
                          action={async () => {
                            "use server";
                            await signOut();
                          }}
                        >
                          <button type="submit" className="flex justify-center items-center gap-3">
                            <FaRoute/> Logout
                          </button>
                        </form>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                    )
                  }
                </div>

                {/* Hamburger Menu and User Icon for small/medium screens */}
                <div className="flex md:hidden items-center space-x-4">
                  {/* User Icon for small/medium screens */}
                  {session && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <FaUserCircle className="text-3xl border h-[60px]" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href="/account" className="flex justify-center items-center gap-3">
                            <FaUser  />
                            My Account
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/doctors" className="flex justify-center items-center gap-3">
                            <FaCalendar />
                            My Appointments
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <form
                            action={async () => {
                              "use server";
                              await signOut();
                            }}
                          >
                            <button type="submit" className="flex justify-center items-center gap-3">
                              <FaRoute/> Logout
                            </button>
                          </form>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}

                  {/* Hamburger Menu */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <FaBars className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 bg-white shadow-lg p-5">
                      <div className="space-y-3">
                        <Link href="/" className="nav-item text-[#6CA0D1] block">
                          Home
                        </Link>
                        <Link href="/doctors" className="nav-item text-black block">
                          Doctors
                        </Link>
                        <Link href="/about" className="nav-item text-black block">
                          About Us
                        </Link>
                        <Link href="/contact" className="nav-item text-black block">
                          Contact Us
                        </Link>
                        {session ? (
                          <>
                            <Link href="/account" className="nav-item text-black block">
                              My Account
                            </Link>
                            <Link href="/doctors" className="nav-item text-black block">
                              My Appointments
                            </Link>
                            <form
                              action={async () => {
                                "use server";
                                await signOut();
                              }}
                            >
                              <button><FaRoute/> Logout</button>
                            </form>
                          </>
                        ) : (
                          <Link href="/login" className="nav-item text-black block">
                            Login
                          </Link>
                        )}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </main>
        </div>
        {isHeroSectionVisible && <HeroSection />}
      </nav>
    </section>
  );
}
