import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export default function Cart() {
   const dispatch = useDispatch();
   const carts = useSelector((state) => state.CartReducer.cart) 
  return (
    <>
    {/* <div>Cart</div>
    
        {carts.map((value)=>(
            <div>
              <p>Name:{value.ProductName}</p>
              <p>Price:{value.Price}</p>
            </div>
        ))} */}
    
    </>
  )
}
