import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'

export default  function PatientAppointmentSideBar() {
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
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
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
  )
}

