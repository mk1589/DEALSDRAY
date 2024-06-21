import { Link } from "react-router-dom"
import {
    
    MoreHorizontal,
    
    PlusCircle,
    
    Image,
    CircleUser
  } from "lucide-react"
  
  
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
 
  
  export function EmployeeList() {
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        
        <div >
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
            
            <DropdownMenuSeparator />
            <Link to={'/login'} className="underline">
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </Link>
            
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                 
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  
                    
                 
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Total Count:
                    </span>
                  </Button>
                  <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Create
                    </span>
                  </Button>
                </div>
              </div>
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Employee List</CardTitle>
                    
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="hidden w-[100px] sm:table-cell">
                            <span className="sr-only">Image</span>
                          </TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Mobile No.</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Designation
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            gender
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Search Course
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Created Date
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                          Actions
                          </TableHead>
                          <TableHead>
                            <span className="sr-only"></span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                       
                        
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                            
                              className="aspect-square rounded-md object-cover"
                              height="64"
                             
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            Manish
                          </TableCell>
                          <TableCell className="font-medium">
                            mnirmalkar745@gmail.com
                          </TableCell>
                          <TableCell className="font-medium">
                            7458966322
                          </TableCell>
                          <TableCell className="font-medium">
                            HR
                          </TableCell>
                          <TableCell className="font-medium">
                            Male
                          </TableCell>
                          <TableCell className="font-medium">
                            BCA
                          </TableCell>
                          <TableCell className="font-medium">
                            2023-11-29
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                            
                              className="aspect-square rounded-md object-cover"
                              height="64"
                             
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            Kanha
                          </TableCell>
                          <TableCell className="font-medium">
                            Kanha123@gmail.com
                          </TableCell>
                          <TableCell className="font-medium">
                            7458966322
                          </TableCell>
                          <TableCell className="font-medium">
                            HR
                          </TableCell>
                          <TableCell className="font-medium">
                            Male
                          </TableCell>
                          <TableCell className="font-medium">
                            BCA
                          </TableCell>
                          <TableCell className="font-medium">
                            2023-11-29
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                            
                              className="aspect-square rounded-md object-cover"
                              height="64"
                             
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            Kanha
                          </TableCell>
                          <TableCell className="font-medium">
                            Kanha123@gmail.com
                          </TableCell>
                          <TableCell className="font-medium">
                            7458966322
                          </TableCell>
                          <TableCell className="font-medium">
                            HR
                          </TableCell>
                          <TableCell className="font-medium">
                            Male
                          </TableCell>
                          <TableCell className="font-medium">
                            BCA
                          </TableCell>
                          <TableCell className="font-medium">
                            2023-11-29
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        
                        
                        
                      </TableBody>
                    </Table>
                  </CardContent>
                  
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
  )
}

export default EmployeeList