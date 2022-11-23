import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Singup from "../../pages/Login/Singup";
import NotFound from "../../pages/NotFound/NotFound";
import DetailsService from "../../pages/Services/DetailsService";
import Services from "../../pages/Services/Services";


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
            }
        ]
    },
    {
        path:'/*',
        element:<NotFound></NotFound>
    }
])

export default router