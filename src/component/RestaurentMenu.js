import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
const RestaurentMenu = () => {
    const [item, setItem] = useState([])
    const {resid}=useParams()

   
     
    console.log("items",item)

    useEffect(() => {
        fetchItemdata()

    }, [])
    const fetchItemdata = async () => {
       
        const res=await axios.get("https://corsproxy.io/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.5936485&lng=79.6544208&restaurantId="+resid)
        const json=res.data
        console.log("jsondata got the data",json)
         setItem(json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [])
         console.log(json?.data?.cards?.[5]?.groupedCard)
         console.log(json?.data?.cards?.[4]?.groupedCard,"4th")
        
    }
    console.log("items new",item)

  if(item?.length=== 0){
    return <div>LOADING...</div>
  }
    return <div>
        
        {
            item?.map((e)=>(
                <h1 key={e?.card?.info?.id}>
                {e?.card?.info?.name}</h1>
            
               
            ))
        }
    </div>
}

export default RestaurentMenu