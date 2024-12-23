// import { User, Stethoscope, Calendar, FileText, Upload } from "lucide-react";
// import WebPageLayout from "@/Components/WebPageLayout";
// import React from "react";
// import { Input } from "@/Components/ui/input";
// import { Label } from "@/Components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ui/select";
// import { Textarea } from "@/Components/ui/textarea";

// import { Checkbox } from "@/Components/ui/checkbox";

// import z from "zod";

// const doctorApplicationSchema = z.object({
//   firstName: z.string().nonempty("First Name is required"),
//   lastName: z.string().nonempty("Last Name is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().nonempty("Phone number is required"),
//   gender: z.enum(["male", "female", "other", "prefer-not-to-say"]),
//   address: z.string().nonempty("Address is required"),
//   specialty: z.string().nonempty("Specialty is required"),
//   experience: z
//     .number()
//     .int("Experience should be a whole number")
//     .min(0, "Experience cannot be negative"),
//   license: z.string().nonempty("Medical License Number is required"),
//   appointmentStart: z.string().nonempty("Appointment Start Time is required"),
//   appointmentEnd: z.string().nonempty("Appointment End Time is required"),
//   bio: z.string().optional(),
//   availability: z.array(z.string()).optional(),
// });
// export default function DoctorApplicationForm() {
//   let handleSubmit = async (event, formData) => {
//     event.preventDefault();
//     console.log("clicked");
//   };

//   return (
//     <form  className="space-y-8">
//       <section>
//         <h2 className="text-2xl font-semibold text-[#207DFF] mb-6 flex items-center">
//           <User className="mr-2" /> Personal Information
//         </h2>
//         {/* Input fields for firstName, lastName, email, phone, etc. */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label
//               htmlFor="firstName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               First Name <span className="text-[#F87171]">*</span>
//             </Label>
//             <Input
//               type="text"
//               id="firstName"
//               name="firstName"
//               required
//               className="mt-1"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label
//               htmlFor="lastName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Last Name <span className="text-[#F87171]">*</span>
//             </Label>
//             <Input
//               type="text"
//               id="lastName"
//               name="lastName"
//               required
//               className="mt-1"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email <span className="text-[#F87171]">*</span>
//             </Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="mt-1"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone Number <span className="text-[#F87171]">*</span>
//             </Label>
//             <Input
//               type="tel"
//               id="phone"
//               name="phone"
//               required
//               className="mt-1"
//             />
//           </div>

//           <div className="space-y-2 mt-6">
//             <Label
//               htmlFor="gender"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Gender <span className="text-[#F87171]">*</span>
//             </Label>
//             <Select required>
//               <SelectTrigger className="w-full mt-1">
//                 <SelectValue placeholder="Select gender" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="male">Male</SelectItem>
//                 <SelectItem value="female">Female</SelectItem>
//                 <SelectItem value="other">Other</SelectItem>
//                 <SelectItem value="prefer-not-to-say">
//                   Prefer not to say
//                 </SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2 mt-6">
//             <Label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Address <span className="text-[#F87171]">*</span>
//             </Label>
//             <Textarea
//               id="address"
//               name="address"
//               required
//               rows={3}
//               className="mt-1"
//             />
//           </div>
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold text-[#207DFF] mb-6 flex items-center">
//           <Stethoscope className="mr-2" /> Professional Details
//         </h2>
//         {/* Input fields for specialty, experience, license, certifications */}
//         <div className="space-y-6">
//           {/* Specialty Field */}
//           <div className="space-y-2">
//             <Label
//               htmlFor="specialty"
//               className="text-sm font-medium text-gray-700"
//             >
//               Specialty <span className="text-[#F87171]">*</span>
//             </Label>
//             <Input
//               type="text"
//               id="specialty"
//               name="specialty"
//               required
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#207DFF] focus:ring-[#207DFF] focus:ring-opacity-50"
//             />
//           </div>

//           {/* Years of Experience Field */}
//           <div className="space-y-2">
//             <Label
//               htmlFor="experience"
//               className="text-sm font-medium text-gray-700"
//             >
//               Years of Experience <span className="text-[#F87171]">*</span>
//             </Label>
//             <Input
//               type="number"
//               id="experience"
//               name="experience"
//               min="0"
//               required
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#207DFF] focus:ring-[#207DFF] focus:ring-opacity-50"
//             />
//           </div>

//           {/* Medical License Number Field */}
//           <div className="space-y-2">
//             <Label
//               htmlFor="license"
//               className="text-sm font-medium text-gray-700"
//             >
//               Medical License Number <span className="text-[#F87171]">*</span>
//             </Label>
//             <Input
//               type="text"
//               id="license"
//               name="license"
//               required
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#207DFF] focus:ring-[#207DFF] focus:ring-opacity-50"
//             />
//           </div>

//           {/* Certifications File Upload Field */}
//           <div className="space-y-2">
//             <Label
//               htmlFor="certifications"
//               className="text-sm font-medium text-gray-700"
//             >
//               Certifications (PDF only)
//             </Label>
//             <Input
//               type="file"
//               id="certifications"
//               name="certifications"
//               accept=".pdf"
//               className="mt-1 w-full text-sm text-gray-500
// file:mr-4 file:py-2 file:px-4
// file:rounded-md file:border-0
// file:text-sm file:font-semibold
// file:bg-[#207DFF] file:text-white
// hover:file:bg-[#207DFF]/90"
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Please provide your official certification document
//             </p>
//           </div>
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold text-[#207DFF] mb-6 flex items-center">
//           <Calendar className="mr-2" /> Availability and Additional Information
//         </h2>

//         {/* Input fields for appointment start/end time, bio, availability */}
//         <div className="space-y-6">
//           {/* Appointment Time Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label
//                 htmlFor="appointmentStart"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Appointment Start Time <span className="text-[#F87171]">*</span>
//               </Label>
//               <Input
//                 type="time"
//                 id="appointmentStart"
//                 name="appointmentStart"
//                 required
//                 className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#207DFF] focus:ring-[#207DFF] focus:ring-opacity-50"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label
//                 htmlFor="appointmentEnd"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Appointment End Time <span className="text-[#F87171]">*</span>
//               </Label>
//               <Input
//                 type="time"
//                 id="appointmentEnd"
//                 name="appointmentEnd"
//                 required
//                 className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#207DFF] focus:ring-[#207DFF] focus:ring-opacity-50"
//               />
//             </div>
//           </div>

//           {/* Bio Field */}
//           <div className="space-y-2">
//             <Label htmlFor="bio" className="text-sm font-medium text-gray-700">
//               Bio
//             </Label>
//             <Textarea
//               id="bio"
//               name="bio"
//               rows={4}
//               className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#207DFF] focus:ring-[#207DFF] focus:ring-opacity-50"
//             />
//           </div>

//           {/* Availability Checkbox Group */}
//           <div className="space-y-2">
//             <Label className="text-sm font-medium text-gray-700">
//               Availability
//             </Label>
//             <div className="grid grid-cols-2 gap-2">
//               {[
//                 "Monday",
//                 "Tuesday",
//                 "Wednesday",
//                 "Thursday",
//                 "Friday",
//                 "Saturday",
//                 "Sunday",
//               ].map((day) => (
//                 <Label key={day} className="flex items-center space-x-2">
//                   <Checkbox
//                     name="availability"
//                     value={day}
//                     className="text-[#207DFF] focus:ring-[#207DFF]"
//                   />
//                   <span>{day}</span>
//                 </Label>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="flex justify-end mt-8">
//         <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#207DFF] hover:bg-[#207DFF]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#207DFF]">
//           Submit Application
//         </button>
//       </div>
//     </form>
//   );
// }

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Checkbox } from "@/Components/ui/checkbox";
// import { uploadImage } from "@/actions/Upload";
import { useState } from "react";
import { handleRequestFromFrontEnd } from "@/actions/Requests";
import Swal from "sweetalert2";
// import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  fees: z.string(),
  gender: z.string(),
  appointmentStart: z.string(),
  appointmentEnd: z.string(),
  degree: z.string(),
  speciality: z.string(),
  experience: z.string(),
  phone: z.string().regex(/^\d+$/, "Enter a valid phone number"),
  address: z.string().min(5),
  bio: z.string().min(20).max(120),
  daysAvailable: z.array(z.string()),
  profilePicture: z.any().optional(),
});

export default function DoctorForm({ session }) {
  let [profilePicture, setProfilePicture] = useState(null);
  // const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: session.user.email,
      gender: "",
      daysAvailable: [],
    },
  });

  //  async function uploadImage(doctorForm) {
  //   const cloudName = process.env.CLOUD_NAME;
  //   const apiKey = process.env.CLOUDINARY_API_KEY;
  //   const apiSecret = process.env.CLOUDINARY_API_SECRET;
  //        console.log("upload image");
         
  //   const timestamp = Math.floor(Date.now() / 1000);
  //   const signature = generateSignature(timestamp, apiSecret);
  
  //   const formData = new FormData();
  //   formData.append("file", doctorForm.profilePictures);
  
  //   formData.append("api_key", apiKey);
  //   formData.append("timestamp", timestamp);
  //   formData.append("signature", signature);
  
  //   const response = await fetch(
  //     `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   );
  
  //   const data = await response.json();
  
  //   if (response.ok) {
  //     console.log("data=>", data.secure_url);
  //     return data.secure_url;
  //   } else {
  //     console.log("error=>", data.error.message);
  //     return data.error.message;
  //   }
  // }
  
  // function generateSignature(timestamp, apiSecret) {
  //   const crypto = require("crypto");
  //   const signature = crypto
  //     .createHash("sha256")
  //     .update(`timestamp=${timestamp}${apiSecret}`)
  //     .digest("hex");
  //   return signature;
  // }

  async function onSubmit(values) {
    console.log(values);
    const response = await handleRequestFromFrontEnd(values);

    if (response.success) {
      Swal.fire({
        title: "Success",
        text: response.message,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: response.message,
        icon: "error",
      });
    }
    
    // if (!profilePicture) {
    //   alert("Please select a profile picture");
    //   return;
    // }

    // try {
    //   let obj = {...values , profilePictures: profilePicture}
    //   console.log(obj , "obj");
      
    //   const url = await uploadImage(obj);
    //   console.log("Uploaded image URL:", url);
    // } catch (error) {
    //   console.error("Error uploading image:", error);
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 m-2 lg:grid-cols-2 gap-5">
          {[
            {
              name: "firstName",
              label: "Doctor Name",
              placeholder: "Enter Doctor's name",
            },
            { name: "fees", label: "Fees", placeholder: "Enter fees" },
            {
              name: "appointmentStart",
              label: "Appointment Start Time",
              type: "time",
            },
            {
              name: "appointmentEnd",
              label: "Appointment End Time",
              type: "time",
            },
            { name: "degree", label: "Degree", placeholder: "Enter degree" },
            {
              name: "speciality",
              label: "Specialization",
              placeholder: "Enter specialization",
            },
            {
              name: "experience",
              label: "Experience",
              placeholder: "Enter years of experience",
            },
            {
              name: "phone",
              label: "Contact Number",
              placeholder: "Enter contact number",
            },
            { name: "address", label: "Address", placeholder: "Enter address" },
          ].map(({ name, label, placeholder, type = "text" }) => (
            <FormField
              key={name}
              name={name}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#212529]">
                    {label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={type}
                      placeholder={placeholder}
                      className="mt-1 text-[#212529] bg-[#F5F5F5] border border-[#212529]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#212529]">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    disabled
                    className="mt-1 text-[#212529] bg-[#F5F5F5] border border-[#212529]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="gender"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#212529]">
                  Gender
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="mt-1 bg-[#F5F5F5] text-[#212529] border border-[#212529]">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Tther">Other</SelectItem>
                    <SelectItem value="Prefer-Not-To-Say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="daysAvailable"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#212529]">
                  Days Available
                </FormLabel>
                <div className="flex flex-wrap space-x-2">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ].map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox
                        value={day}
                        onCheckedChange={(isChecked) =>
                          isChecked
                            ? field.onChange([...field.value, day])
                            : field.onChange(
                                field.value.filter((val) => val !== day)
                              )
                        }
                        checked={field.value.includes(day)}
                      />
                      <span className="text-[#212529]">{day}</span>
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            name="profilePicture"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#212529]">
                  Profile Picture
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="file"
                    className="mt-1 text-[#212529] bg-[#F5F5F5] border border-[#212529]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>

        <FormField
          name="bio"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-[#212529]">
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter bio"
                  className="mt-1 text-[#212529] bg-[#F5F5F5] border border-[#212529]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full py-2 text-sm font-medium text-white bg-[#212529] hover:bg-black"
        >
          {form.formState.isSubmitting ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
