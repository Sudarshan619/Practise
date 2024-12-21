import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export function Sample(){
    const [ name,setName] = useState('Initial');
    const balance = useSelector((state) => state.ToDoReducer.balance)

    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Form effect")
    },[name])


    const handleClick = ()=>{
        setName("Second name");
    }


    
    return(
        <>
         <h4>Using state from sample</h4>
         <h3>balance:{balance}</h3>
         <button onClick={handleClick}></button>
        </>
    )
}