import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
const RestaurentMenu = () => {
    const {resid}=useParams()

    const [item, setItem] = useState([])

    useEffect(() => {
        fetchItemdata()

    }, [])
    const fetchItemdata = async () => {
        //  const res = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.5936485&lng=79.6544208&restaurantId="+resid)
       const res=await axios.get("https://corsproxy.io/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER")
        const jsons = res.data;

        console.log(jsons, "item data");
        
    }


    return <div>
        rhrehr
        {
            1
        }
    </div>
}

export default RestaurentMenu