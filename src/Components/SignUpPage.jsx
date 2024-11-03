'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Eye, EyeOff, Mail, Phone, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="hidden w-1/2 relative lg:block">
        <Image
          src="https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611234.jpg?t=st=1730633354~exp=1730636954~hmac=a996b1edc1b2cc50c5fe12cfc249fd06bde592ce2cc100817e712d4e0d821be2&w=1380"
          alt="Calming healthcare image"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-12">
          <h1 className="text-4xl font-bold mb-4">Join Us in Providing Exceptional Patient Care</h1>
          <div className="w-24 h-1 bg-[#F87171]"></div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-[#F87171] hover:text-[#207DFF]">
                Log in
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="first-name" className="sr-only">
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <Label htmlFor="last-name" className="sr-only">
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <Label htmlFor="email-address" className="sr-only">
                  Email address
                </Label>
                <div className="relative">
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                  <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="mb-4">
                <Label htmlFor="phone-number" className="sr-only">
                  Phone Number
                </Label>
                <div className="relative">
                  <Input
                    id="phone-number"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
                    placeholder="Phone Number"
                  />
                  <Phone className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#207DFF] focus:border-[#207DFF] focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#207DFF] hover:bg-[#1a6ad1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF]"
              >
                Register
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-[#F87171] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF]"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                Sign up with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}