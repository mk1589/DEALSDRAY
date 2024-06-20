import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { Link } from "react-router-dom"
const LoginPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">UserName</Label>
          <Input id="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="w-full">
        <Button className="w-full">Sign in</Button>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to={'/SignUp'} className="underline">
            Sign Up
          </Link>
        </div>
        </div>
        
      </CardFooter>
     
    </Card>
    </section>
  )
}

export default LoginPage