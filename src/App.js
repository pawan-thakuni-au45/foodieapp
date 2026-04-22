import ReactDOM from "react-dom/client"
import User from "./component/User"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Header from "./component/Header"
import Body from "./component/Body"
import { Home } from "./component/Home"

import {About} from "./component/About"
import RestaurentMenu from "./component/RestaurentMenu"
import { lazy, Suspense, useEffect, useState } from "react"
import { UserContext } from "./utils/UserContext"
import { Provider } from "react-redux"
import { appStore } from "./utils/appStore"
import Cart from "./component/Cart"



const Grocery=lazy(()=>import("./component/Grocery"))


const AppLayout=()=>{
   const [userName,setUserName]=useState()


   useEffect(()=>{
     const data={
         loggedInUser:"rahul rawat"
      }
      setUserName(data.loggedInUser)
   },[])
    

    
    return( 
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div>
   
 <Header/>
    <Outlet/>
    
    </div>
      </UserContext.Provider>
      </Provider> 
    ) 
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
         },{
            path:'/cart',
            element:<Cart/>
         },
      
      {
            path:'/resmenu/:resid',
            element:<RestaurentMenu/>
         },
         {
            path:'/grocery',
            element: <Suspense fallback={<h1>Lodaing...</h1>}><Grocery/></Suspense>

         },
      ]
}
])




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={route}/>)

export default AppLayout
