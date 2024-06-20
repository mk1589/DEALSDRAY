import {createBrowserRouter,} from "react-router-dom";

import LoginPage from "@/pages/Login";
import HomePage from "@/pages/HomePage";
import SignUp from "./pages/SignUp";
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
    }
]);

export default router;