import Link from 'next/link'
import { FileQuestion } from 'lucide-react'
import { Button } from "@/Components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="text-center space-y-6">
        <FileQuestion className="mx-auto text-[#207DFF] w-24 h-24" />
        <h1 className="text-[#207DFF] text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800">Oops! Page not found.</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          It looks like the page you're looking for doesn't exist.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-[#207DFF] hover:bg-[#1a6ad4] text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
            <Link href="/">
              Take Me Home
            </Link>
          </Button>
          <div>
            <Button asChild variant="link" className="text-[#F87171] hover:text-[#e05252] font-medium transition-colors duration-300">
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}