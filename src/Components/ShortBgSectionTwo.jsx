import { Button } from "./ui/button"


export default function ShortBgSectionTwo() {
  return (
    <section className="relative bg-blue-500 py-24">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-blue-600/50" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-6">
            <p className="text-blue-100 text-sm tracking-wider uppercase">
              FUN FACTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Over 5,100 patients trust us
            </h2>
            <Button
              className="bg-red-400 hover:bg-red-500 text-white rounded-full px-8 py-6 text-lg"
            >
              Make an appointment
            </Button>
          </div>

          {/* Right column - Statistics Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">30</p>
              <p className="text-blue-100">Years of Experienced</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">4,500</p>
              <p className="text-blue-100">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">84</p>
              <p className="text-blue-100">Number of Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">300</p>
              <p className="text-blue-100">Number of Staffs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}