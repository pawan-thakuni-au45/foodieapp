import ReactDOM from "react-dom/client"
import User from "./component/User"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Header from "./component/Header"
import Body from "./component/Body"
import { Home } from "./component/Home"
import Contact from "./component/Contact"
import About from "./component/About"
import RestaurentMenu from "./component/RestaurentMenu"

const AppLayout=()=>{
    

    return <div>
 <Header/>
    <Outlet/>
      
    </div>
}
    const route=createBrowserRouter(
        [
            {
         path:"/",
         element:<AppLayout/>,
         children:[
            
        {
            path:"/",
            element:<Body/>
         },
         {
            path:'/home',
            element:<Home/>
         },{
            path:'/about',
            element:<About/>
         },
      
         
         {
            path:'/contact',
            element:<Contact/>
         },{
            path:'/resmenu/:resid',
            element:<RestaurentMenu/>
         }
      ]
}
])




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={route}/>)

export default AppLayout
