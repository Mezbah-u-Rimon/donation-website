import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Pages/CardDetails/CardDetails";
import ErrorPage from "../Pages/Error/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/cardDetails/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default router;