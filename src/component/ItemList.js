import React from 'react'

const ItemList = ({data}) => {
    console.log("dataherepgle",data)

    if(data.itemCards.length===0){
        return<h1>RUK jaon </h1>
    }
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
            <button className="p-2 bg-white ">Add+</button>
           </div>
           
           image here
           </div>
           </div>


           
         ))}
    </div>
  )
}

export default ItemList