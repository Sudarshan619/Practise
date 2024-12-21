import React from 'react'
import changeName from './hoc1'
import { Component } from 'react'


class Sample3 extends Component{
    constructor(){
        super()
    }

    render(){
        return <h3>Sample3 h4</h3>
    }
}

const Sample4 = ()=>{
    return (
        <>
        <div>Sample4</div>
        </>
  )
}

const Sample1 = (props)=> {
   const name = props.name; 

    return (
        <>
        <div>Sample1 {name}</div>
        <Sample3/>
        </>
  )
}

export default changeName(Sample1)
