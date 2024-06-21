import { Link } from "react-router-dom";
import { CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";

const CreateEmployee = () => {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <div className="w-full flex-1">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Logo
            </Link>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/EmployeeList"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Employee List
            </Link>
          </nav>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Create Employee</h1>
        </div>
        
        <div>
          <form className="space-y-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="name" className="w-1/4 text-left">User Name</Label>
              <input type="text" placeholder="Max" required className="flex-4" />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="email" className="w-1/4 text-left">Email</Label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="flex-4"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="mobile" className="w-1/4 text-left">Mobile No</Label>
              <input id="mobile" type="tel" placeholder="Mo.no" className="flex-4" />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-1/4 text-left">Designation</Label>
              <select id="designation" className="flex-4">
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-1/4 text-left">Gender</Label>
              <div className="flex gap-2">
                <label>
                  <input type="radio" name="gender" value="Male" />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" />
                  Female
                </label>
                <label>
                  <input type="radio" name="gender" value="Other" />
                  Other
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="course" className="w-1/4 text-left">Course</Label>
              <div className="flex gap-2">
                <label>
                  <input type="checkbox" name="course" value="MCA" />
                  MCA
                </label>
                <label>
                  <input type="checkbox" name="course" value="BCA" />
                  BCA
                </label>
                <label>
                  <input type="checkbox" name="course" value="BSc" />
                  BSc
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="imgUpload" className="w-1/4 text-left">ImgUpload</Label>
              <input id="imgUpload" type="file" className="flex-4" />
            </div>
            <div className="w-1/4 text-right">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 gap-5">
            Update
          </button>
        </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateEmployee;
