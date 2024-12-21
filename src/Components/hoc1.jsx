import React,{Component} from "react"

const changeName = (OriginalComponent) =>{
  class NewComponent extends Component{
    constructor(props){
        super(props)
        this.state={
           name: "sudu"
        }
    } 
    render(){
        return <OriginalComponent name={this.state.name} />
    }
  }

  return NewComponent
}

export default changeName;