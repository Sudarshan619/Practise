import React, { Component } from "react"
import updatedComponent from "./hoc"


const Sample2 = (props) =>{
    const {count,counter} = props
    return (
        <>
        hello world from sample1  {count}
        <button onClick={counter}>Click to update sample</button>
        </>
    )
}



export default updatedComponent(Sample2);