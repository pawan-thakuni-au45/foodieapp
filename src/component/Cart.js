import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearItem, removeItem } from '../utils/cartSlice'

const Cart = () => {

     const cartItem=useSelector((store)=>store.cart.item)
     const dispatch=useDispatch()
    
     console.log("cart",cartItem)
  return (
 <div>
 {cartItem.length===0 && <h1>cart is empty</h1>}
    {
        cartItem.map((e)=>(
             <div key={e.card?.info?.id} className='border-b-2 border-slate-300  pb-2 flex justify-between w-6/12 m-auto'>
            <div className='text-gray-800 text-bold  text-left  ' >
              {e.card?.info?.name} 
               <div>
              ₹ {e.card?.info?.price/100}
               </div>
            <h1 className='text-sm text-left'>
              {e.card?.info?.description}
            </h1>
            <button onClick={(e)=>(
                dispatch(clearItem())
            )}>remove</button>
            </div>
            
            
            </div>
            
      
            
        ))
        
        
      
    
    }
     </div>
  )
}

export default Cart