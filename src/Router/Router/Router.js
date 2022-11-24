import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Singup from "../../pages/Login/Singup";
import MyReview from "../../pages/MyReview/MyReview";
import UpdateReview from "../../pages/MyReview/UpdateReview/UpdateReview";
import NotFound from "../../pages/NotFound/NotFound";
import AddService from "../../pages/Services/AddService/AddService";
import DetailsService from "../../pages/Services/DetailsService";
import Services from "../../pages/Services/Services";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/detailsservices/:id',
                element:<DetailsService></DetailsService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'/myreview',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
            },
            {
                path:'/addservice',
                element:<PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path:'/updatereview/:id',
                element:<UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path:'/*',
        element:<NotFound></NotFound>
    }
])

export default router