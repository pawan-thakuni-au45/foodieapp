import { useEffect, useState } from "react"
import axios from "axios";
import useUserOnline from "../utils/useOnlineFeature";
import { Link } from "react-router";


const RestaurentCards = () => {


    const [resData, setResData] = useState([])
    const [rating,setRating]=useState([])

     const [searchText,setRearchText]=useState("")

    //   const restcardPromoted=WithPromotedLabel(RestaurentCards)

    

    useEffect(() => {

        fetchData()

    }, []);

    const fetchData = async () => {
        const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.5936485&lng=79.6544208&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = response.data
        console.log(json, 'data');
        setResData(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setRating(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])


    }
    
   



    const online = useUserOnline()
    if (online === false) return <h1>user is ofline</h1>


    return resData?.length === 0 ? (
        <h1>Loading....</h1>
    ) : (
        <div >
            <div className="flex mt-4">


                <div className=" border border-red-700">
                    <input type="search" placeholder="what you want to eat" value={searchText} onChange={(e)=>{
                        setRearchText(e.target.value)
                    }}></input>

                </div>
                <div>
                    <button className="border border-red-700 bg-green-500 rounded-sm px-3" onClick={()=>{
                        const searchtxt=resData.filter((e)=>
                             e.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ); setRating(searchtxt)
                    }}>search</button>

                </div>

                <div>
                  <button onClick={()=>{
                      const filterl=resData.filter((res)=>
                             res.info?.avgRating > 4
                      )
                      setRating(filterl)
                  }}>
                  top rated
                  </button>
                </div>

            </div>


            <div className="flex flex-wrap" >
                {rating.map((n) => (
                      <Link
            key={n?.info.id}
            to={"/resmenu/"+n.info?.id}
          >  
          
        
                      <div  className="border border-red-900 p-2 m-2 w-80">
                        <img src={n.info.cloudinaryImageId}></img>
                        <h1>{n.info?.name}</h1>
                        <h1>{n.info?.cuisines.join(" , ")}</h1>
                        <h1>{n.info?.avgRating}</h1>


                    </div>
                    

              </Link>  ))}


            </div>

        </div>
    )
}


//  export const WithPromotedLabel=(RestaurentCards)=>{
//         return (props)=>{
//             return <div>
//              <label>Promoted</label>
//              <RestaurentCards {...props}/>
//             </div>
//         }
//     }

export default RestaurentCards

