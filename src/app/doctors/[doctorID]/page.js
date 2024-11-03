import Image from "next/image";
import { Star, Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/Components/NavBar";
import { Calendar } from "@/components/ui/calendar";
import Footer from "@/Components/Footer";
export default function DoctorDetailPage({ params }) {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 150,
      hospital: "Heart Care Hospital",
      days: ["Monday", "Wednesday", "Friday"],
      appointmentTime: ["09:00 AM", "01:00 PM", "03:00 PM"],
      bio: "Dr. Smith has over 15 years of experience in treating heart diseases and is known for his patient-centric approach.",
      phone: "+1234567890",
      email: "john.smith@example.com",
      experience: "15 years",
      reviews: [
        { rating: 5, comment: "Excellent doctor! Highly recommend." },
        { rating: 4, comment: "Very attentive and knowledgeable." },
      ],
    },
    {
      id: 2,
      name: "Dr. Emily Johnson",
      specialty: "Dermatologist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 100,
      hospital: "Skin Health Clinic",
      days: ["Tuesday", "Thursday", "Saturday"],
      appointmentTime: ["10:00 AM", "02:00 PM", "04:00 PM"],
      bio: "Dr. Johnson specializes in treating skin conditions and provides personalized care for her patients.",
      phone: "+1234567891",
      email: "emily.johnson@example.com",
      experience: "10 years",
      reviews: [
        { rating: 4, comment: "Great results! Very satisfied." },
        { rating: 5, comment: "Best dermatologist I have visited." },
      ],
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgeon",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 200,
      hospital: "Bone and Joint Center",
      days: ["Monday", "Thursday"],
      appointmentTime: ["11:00 AM", "03:00 PM"],
      bio: "Dr. Brown is an expert in orthopedic surgeries with a focus on sports injuries and rehabilitation.",
      phone: "+1234567892",
      email: "michael.brown@example.com",
      experience: "12 years",
      reviews: [
        { rating: 5, comment: "Amazing surgeon! Changed my life." },
        { rating: 4, comment: "Professional and skilled." },
      ],
    },
    {
      id: 4,
      name: "Dr. Sarah Wilson",
      specialty: "Pediatrician",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 120,
      hospital: "Children's Health Hospital",
      days: ["Monday", "Wednesday", "Friday"],
      appointmentTime: ["08:00 AM", "01:00 PM"],
      bio: "Dr. Wilson is dedicated to providing the best healthcare for children, focusing on preventative measures.",
      phone: "+1234567893",
      email: "sarah.wilson@example.com",
      experience: "8 years",
      reviews: [
        { rating: 5, comment: "Fantastic with kids! Highly recommend." },
        { rating: 5, comment: "Always takes the time to listen." },
      ],
    },
    {
      id: 5,
      name: "Dr. David Taylor",
      specialty: "Neurologist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 180,
      hospital: "Brain Health Institute",
      days: ["Tuesday", "Thursday"],
      appointmentTime: ["09:00 AM", "02:00 PM"],
      bio: "Dr. Taylor specializes in neurological disorders and is committed to improving the quality of life for his patients.",
      phone: "+1234567894",
      email: "david.taylor@example.com",
      experience: "20 years",
      reviews: [
        { rating: 5, comment: "Incredibly knowledgeable." },
        { rating: 4, comment: "Takes time to explain everything." },
      ],
    },
    {
      id: 6,
      name: "Dr. Jessica Lee",
      specialty: "Gastroenterologist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 160,
      hospital: "Digestive Health Center",
      days: ["Monday", "Wednesday", "Friday"],
      appointmentTime: ["10:00 AM", "01:00 PM"],
      bio: "Dr. Lee has extensive experience in diagnosing and treating digestive disorders.",
      phone: "+1234567895",
      email: "jessica.lee@example.com",
      experience: "10 years",
      reviews: [
        { rating: 4, comment: "Great care and attention to detail." },
        { rating: 5, comment: "Helped me a lot with my condition." },
      ],
    },
    {
      id: 7,
      name: "Dr. James Miller",
      specialty: "Endocrinologist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 150,
      hospital: "Hormone Health Clinic",
      days: ["Tuesday", "Thursday"],
      appointmentTime: ["09:00 AM", "03:00 PM"],
      bio: "Dr. Miller specializes in hormonal disorders and metabolic diseases.",
      phone: "+1234567896",
      email: "james.miller@example.com",
      experience: "15 years",
      reviews: [
        { rating: 5, comment: "Life-changing doctor!" },
        { rating: 4, comment: "Very understanding and supportive." },
      ],
    },
    {
      id: 8,
      name: "Dr. Laura Martinez",
      specialty: "Ophthalmologist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 130,
      hospital: "Vision Care Center",
      days: ["Monday", "Friday"],
      appointmentTime: ["10:00 AM", "02:00 PM"],
      bio: "Dr. Martinez focuses on eye care and offers advanced treatments for various eye conditions.",
      phone: "+1234567897",
      email: "laura.martinez@example.com",
      experience: "12 years",
      reviews: [
        { rating: 5, comment: "Best eye doctor ever!" },
        { rating: 4, comment: "Very thorough and friendly." },
      ],
    },
    {
      id: 9,
      name: "Dr. Robert Wilson",
      specialty: "Psychiatrist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 200,
      hospital: "Mental Health Clinic",
      days: ["Tuesday", "Thursday", "Saturday"],
      appointmentTime: ["09:00 AM", "01:00 PM"],
      bio: "Dr. Wilson specializes in mental health and is dedicated to providing compassionate care.",
      phone: "+1234567898",
      email: "robert.wilson@example.com",
      experience: "18 years",
      reviews: [
        { rating: 5, comment: "Amazing support during tough times." },
        { rating: 4, comment: "Listens and cares genuinely." },
      ],
    },
    {
      id: 10,
      name: "Dr. Alice Brown",
      specialty: "Obstetrician/Gynecologist",
      image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
      fees: 180,
      hospital: "Women’s Health Center",
      days: ["Monday", "Wednesday", "Friday"],
      appointmentTime: ["08:00 AM", "02:00 PM"],
      bio: "Dr. Brown provides comprehensive care for women throughout their life stages.",
      phone: "+1234567899",
      email: "alice.brown@example.com",
      experience: "14 years",
      reviews: [
        { rating: 5, comment: "Very supportive and understanding." },
        { rating: 4, comment: "Highly skilled and professional." },
      ],
    },
  ];

  console.log(params, "params of doctor id");
  let doctor = doctors.filter((doctor) => doctor.id == params.doctorID)[0];
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isheroSectionVisible={false} />
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-start">
            <div className="flex-shrink-0">
              <Image
                src={doctor.image}
                alt="Doctor's profile"
                width={200}
                height={200}
                className="h-32 w-32 rounded-full object-cover shadow-lg md:h-40 md:w-40"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <h1 className="text-3xl font-bold text-[#207DFF]">
                {doctor.name}
              </h1>
              <p className="mt-1 text-xl text-gray-600">{doctor.specialty}</p>
              <div className="mt-2 flex items-center">
                <div className="flex text-[#F87171]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  4.9 {doctor.reviews.length}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{doctor.experience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Bio and Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                About Dr. {doctor.name}
              </h2>
              <p className="mt-4 text-gray-600">{doctor.bio}</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#207DFF]" />
                  <span className="ml-2 text-gray-600">{doctor.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#207DFF]" />
                  <span className="ml-2 text-gray-600">{doctor.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#207DFF]" />
                  <span className="ml-2 text-gray-600">{doctor.hospital}</span>
                </div>
              </div>
            </div>

            {/* Appointment Booking Section */}
            <div className="rounded-lg bg-blue-50 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Book an Appointment
              </h2>
              <div className="mt-4 flex items-center justify-center">
                <Calendar
                  mode="single"
                  className="rounded-md border"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {doctor.appointmentTime.map((time) => (
                  <button
                    key={time}
                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#207DFF] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#207DFF] focus:ring-offset-2"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Patient Reviews
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {doctor.reviews.map((review) => (
              <div key={review} className="rounded-lg border p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="flex text-[#F87171]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {review.rating}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {review.comment}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-900">
                  - John Doe
                </p>
              </div>
            ))}
          </div>
          {
            doctor.reviews.length > 3 && (
              <div className="mt-8 text-center">
                <button className="rounded-md bg-[#207DFF] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  See More Reviews
                </button>
              </div>
            ) 
          }
        </div>
      </section>

      {/* CTA Button (Fixed at Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md md:hidden">
        <button className="w-full rounded-md bg-[#F87171] px-4 py-3 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Book Appointment
        </button>
      </div>
      <Footer />
    </div>
  );
}
