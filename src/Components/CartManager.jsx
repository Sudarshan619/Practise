import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RemoveFromCart } from '../Redux/product';

export default function CartManager() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.CartReducer.cart);
  const [item,setItem] = useState({name:"",price:""});

  const addToCart = () =>{
    dispatch({type:"Cart/AddToCart",payload:{"ProductName":item.name,"Price":item.price}})
  }

  const handleName = (e)=>{
     item.name =e.target.value;
  }

  const handlePrice = (e)=>{
    item.price =e.target.value;
 }
  
 const removeFromCart = (e)=>{
    console.log("Index")
    dispatch({type:"Cart/RemoveFromCart",payload:parseInt(e.target.id)})
 }

  return (
    <>
    <div>CartManager</div>
    {carts.map((value,index)=>(
            <div key={index}>
              <p>Name:{value.ProductName}</p>
              <p>Price:{value.Price}</p>
              <p><button id={index} onClick={removeFromCart}>Remove</button></p>
            </div>
    ))}
    <input type='text' onChange={handleName} placeholder='Product'></input>
    <input type='number' onChange={handlePrice} placeholder='Price'></input>
    <p><button onClick={addToCart}>Add to cart</button></p>
    </>
  )
}
