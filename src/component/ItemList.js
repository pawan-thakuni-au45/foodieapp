import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemList = ({data}) => {

  const dispatch=useDispatch()
  console.log("dispa",dispatch)
    console.log("dataherepgle",data)

   
  return (
    <div className='' >
         {data?.itemCards?.map((e)=>(
            <div key={e.card?.info?.id} className='border-b-2 border-slate-300  pb-2 flex justify-between'>
            <div className='text-gray-800 text-bold  text-left  ' >
              {e.card?.info?.name} 
               <div>
              ₹ {e.card?.info?.price/100}
               </div>
            <h1 className='text-sm text-left'>
              {e.card?.info?.description}
            </h1>
            </div>
            
            <div className="w-3/12">
            <div className="absolute">
            <button className="p-2 bg-white " onClick={()=>{
dispatch(addItem(e))
            }}>Add+</button>
           </div>
           
  <img className=" h-[200px] w-[250px] p-4 rounded-2xl" alt='img-logo' src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + e.card?.info?.
imageId

}/>
          
           </div>
           </div>


           
         ))}
    </div>
  )
}

export default ItemList