import React, { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'

export default function Repo() {
 const dispatch = useDispatch();
const balance = useSelector((state) => state.ToDoReducer.balance);
const [ Amount ,setAmount] = useState(0);
const handleDeposit = () =>{
    dispatch({type:"Repo/Deposit",payload:Amount})
}

const handleChange = (e)=>{
   setAmount(parseInt(e.target.value));
}

const handleWithdraw= () =>{
   dispatch({type:"Repo/Withdraw",payload:Amount})
}
  return (
    <>
    <div>Current balance : {balance}</div>
    <div>Deposit:
        <input type='number' placeholder='Amount' onChange={handleChange}></input>
        <p><button onClick={handleDeposit}>Deposit</button></p>
        
    </div>
    <div>Withdraw:
        <input type='number' placeholder='Amount' onChange={handleChange}></input>
        <p><button onClick={handleWithdraw}>Withdraw</button></p>       
    </div>
    
    </>
  )
}
