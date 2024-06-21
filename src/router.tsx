import {createBrowserRouter,} from "react-router-dom";

import LoginPage from "@/pages/Login";
import HomePage from "@/pages/HomePage";
import SignUp from "@/pages/SignUp";
import CreateEmployee from "@/pages/CreateEmployee";
import EmployeeList from "@/pages/EmployeeList";
const router =  createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/SignUp',
        element: <SignUp/>
    },
    {
        path: '/createEmployee',
        element: <CreateEmployee/>
    },
    {
        path: '/EmployeeList',
        element: <EmployeeList/>
    },
    
]);

export default router;