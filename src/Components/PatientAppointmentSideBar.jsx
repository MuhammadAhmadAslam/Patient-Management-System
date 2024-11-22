// "use client"
// import { Button } from '@/Components/ui/button'
// import { Input } from '@/Components/ui/input'
// import { Label } from '@/Components/ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
// import { useEffect, useState } from 'react'

// export default  function PatientAppointmentSideBar() {
//   let [filters , setFilter] = useState("All")

//   useEffect(() => {
//     console.log(filters , "filters");
//   },[filters])
  
//   return (
//     <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4 text-black">Filters</h2>
//       <div className="space-y-4">
//         <div>
//           <Label htmlFor="search">Search</Label>
//           <Input id="search" placeholder="Search appointments..." />
//         </div>
//         <div>
//           <Label htmlFor="status">Status</Label>
//           <Select value={filters} onChange={(event) => setFilter(event.target.value)}>
//             <SelectTrigger id="status">
//               <SelectValue placeholder="Select status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="All">All</SelectItem>
//               <SelectItem value="Accepted">Accepted</SelectItem>
//               <SelectItem value="Cancelled">Cancelled</SelectItem>
//               <SelectItem value="Visited">Visited</SelectItem>
//               <SelectItem value="Reviewed">Reviewed</SelectItem>
//               <SelectItem value="Missed">Missed</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div>
//           <Label htmlFor="date-range">Date Range</Label>
//           <Input id="date-range" type="date" />
//         </div>
//         <Button className="w-full bg-[#207DFF] hover:bg-[#207DFF]/90 text-white">Apply Filters</Button>
//       </div>
//     </div>
//   )
// }

"use client"
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import { useEffect, useState } from 'react'

export default function PatientAppointmentSideBar() {
  const [filters, setFilter] = useState("All");

  useEffect(() => {
    console.log(filters, "filters");
  }, [filters]);

  return (
    <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-black">Filters</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search appointments..." />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          {/* Bind the value to 'filters' state */}
          <Select value={filters} onValueChange={(value) => setFilter(value)}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Accepted">Accepted</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
              <SelectItem value="Visited">Visited</SelectItem>
              <SelectItem value="Reviewed">Reviewed</SelectItem>
              <SelectItem value="Missed">Missed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date-range">Date Range</Label>
          <Input id="date-range" type="date" />
        </div>
        <Button className="w-full bg-[#207DFF] hover:bg-[#207DFF]/90 text-white">Apply Filters</Button>
      </div>
    </div>
  );
}
