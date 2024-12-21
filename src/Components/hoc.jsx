import React from "react"

const updatedComponent = OriginalComponent =>{
   class NewComponent extends React.Component{

    constructor(props){
        super(props)
        this.state ={
          count :0
        }
      }
    
      increment = ()=>{
        this.setState( prevState =>{
          return {count : prevState.count +1 }
        })
      }

     render(){
        return <OriginalComponent counter={this.increment} count ={this.state.count} />
     }
   }
    return NewComponent;
}

export default updatedComponent;