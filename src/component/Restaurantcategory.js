import { useState } from "react"
import ItemList from "./ItemList"

export const Restaurentcategory =({data,showItem,setShowIndex})=>{

    
    console.log("menu cars id",data)
    return <div className=" w-6/12  bg-gray-100 ">
    <div className=" bg-gray-200 mb-2 ">
    <div className="flex justify-between items-center" onClick={()=>(
        setShowIndex()
    )}
       >
         <div className="text-bold text-xl pl-0  text-red-600">{data.title} {data.itemCards.length}</div>
         <div>{"⬇️"}</div>
    
         </div>
         </div>
          <div className="">
          { showItem && <ItemList data={data}/>}
          </div>
         


    </div>
}
