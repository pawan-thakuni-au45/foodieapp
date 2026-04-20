import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
import RestaurentCards from "./RestaurentCards"
import { Restaurentcategory } from "./Restaurantcategory"
const RestaurentMenu = () => {
    const [item, setItem] = useState([])
 const [showIndex,setShowIndex]=useState(0)
 
    const {resid}=useParams()

   
     
    console.log("items",item)

    useEffect(() => {
        fetchItemdata()

    }, [])
    const fetchItemdata = async () => {
       
        const res=await axios.get("https://corsproxy.io/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.5936485&lng=79.6544208&restaurantId="+resid)
        const json=res.data
        console.log("jsondata got the data",json)
        // setItem(json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [])
         setItem(json?.data)

         console.log(json?.data?.cards?.[5]?.groupedCard,"all cards")
         console.log(json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards,"4th")
        // const category=item?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e=>e.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

        
    }
         const category=item?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e=>e.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

console.log("category=",category)
        // const category=json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e=>e.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log("items new",item)

    if(item.length===0){
        return <h1>loading...</h1>
    }
  
    return <div className="text-center">
        
        {
          
            
                category.map((e,index)=>(
                 <div key={e.card?.card?.categoryId}>
                 <Restaurentcategory 
                 data={e.card?.card}
                 showItem={index===showIndex ? true :false}
                 setShowIndex={()=>setShowIndex(index)}
                 />
                 </div>
                ))
            
        }
    </div>
}

export default RestaurentMenu