import {Link} from "react-router"
import useUserOnline from "../utils/useOnlineFeature"
import { useContext } from "react"
import { UserContext } from "../utils/UserContext.js"
import { useSelector } from "react-redux"


const Header = () => {

  const loogedIn=useContext(UserContext)

    const online=useUserOnline()

    const cartItem=useSelector((store)=>store.cart.item)
    console.log("cartitem",cartItem)


    return <div className="flex justify-between  w-full bg-pink-400 ">
      <div className="h-26 w-32">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/055/349/890/small/chef-mascot-logo-design-for-restaurant-cooking-man-tasty-express-food-illustration-vector.jpg"/>
      </div>
    
       <div className="flex">
         <ul className="flex mt-6">
         <li className="px-3">
          online status{online===true? " 🟢":"🔴"}
         </li>
           <li className="px-3 font-bold underline"><Link to={'/'}>Home</Link></li>
       <li className="px-3"><Link to={'/about'}>About</Link></li>
       <li className="px-3"><Link to={'/cart'}>Cart item: {cartItem.length} </Link></li>
       <li className="px-3"><Link to={'/grocery'}>Grocery</Link></li>


         
           <li>{loogedIn.loggedInUser}</li>
         </ul>
    </div>

    </div>
}
export default Header