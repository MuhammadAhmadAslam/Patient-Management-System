"use server";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Phone, User } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import GoogleButton from "./GoogleButton";
import { auth, signIn } from "auth";
import { redirect } from "next/dist/server/api-utils";
export default async function RegisterPage() {

  let session = await auth()



  return (
    <form action={async () => {
      "use server"
      await signIn("google")
    }}>
      <Button>COntinue with google</Button>
    </form>
  );
}
{/* <div className="flex min-h-screen"> */ }
//   {/* Left side - Image */}
//   <div className="hidden w-1/2 relative lg:block">
//     <Image
//       src="https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611234.jpg?t=st=1730633354~exp=1730636954~hmac=a996b1edc1b2cc50c5fe12cfc249fd06bde592ce2cc100817e712d4e0d821be2&w=1380"
//       alt="Calming healthcare image"
//       layout="fill"
//       objectFit="cover"
//       className="brightness-50"
//     />
//     <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-12">
//       <h1 className="text-4xl font-bold mb-4">
//         Join Us in Providing Exceptional Patient Care
//       </h1>
//       <div className="w-24 h-1 bg-[#F87171]"></div>
//     </div>
//   </div>

//   {/* Right side - Registration Form */}
//   <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
//     <div className="w-full max-w-md space-y-8">
//       <div className="text-center">
//         <h2 className="mt-6 text-3xl font-bold text-gray-900">
//           Create your account
//         </h2>
//         <p className="mt-2 text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link
//             href="/login"
//             className="font-medium text-[#F87171] hover:text-[#207DFF]"
//           >
//             Log in
//           </Link>
//         </p>
//       </div>
//       <div className="mt-8 space-y-6" action="#" method="POST">
//         <div className="rounded-md shadow-sm -space-y-px">
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <Label htmlFor="first-name" className="sr-only">
//                 First Name
//               </Label>
//               <Input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
//                 placeholder="First Name"
//               />
//             </div>
//             <div>
//               <Label htmlFor="last-name" className="sr-only">
//                 Last Name
//               </Label>
//               <Input
//                 id="last-name"
//                 name="last-name"
//                 type="text"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
//                 placeholder="Last Name"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="email-address" className="sr-only">
//               Email address
//             </Label>
//             <div className="relative">
//               <Input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//               <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//           </div>
//           <div className="mb-4">
//             <Label htmlFor="phone-number" className="sr-only">
//               Phone Number
//             </Label>
//             <div className="relative">
//               <Input
//                 id="phone-number"
//                 name="phone"
//                 type="tel"
//                 autoComplete="tel"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
//                 placeholder="Phone Number"
//               />
//               <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//           </div>
//           <div>
//             <Label htmlFor="password" className="sr-only">
//               Password
//             </Label>
//             <div className="relative">
//               <Input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 autoComplete="new-password"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-5 w-5 text-gray-400" />
//                 ) : (
//                   <Eye className="h-5 w-5 text-gray-400" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div>
//           <Button
//             type="submit"
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#207DFF] hover:bg-[#1a6ad1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF]"
//           >
//             Register
//           </Button>
//         </div>
//       </div>
//       <div className="mt-6">
//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-gray-50 text-gray-500">
//               Or continue with
//             </span>
//           </div>
//         </div>

//         <div className="mt-6">


//           <GoogleButton />

//         </div>
//       </div>
//     </div>
//   </div>
// </div>