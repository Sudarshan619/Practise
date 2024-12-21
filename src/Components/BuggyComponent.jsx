
import React, { Component } from 'react'
import updatedComponent from './hoc'

class BuggyComponent extends Component {
  render() {
    const {count,counter} = this.props;
    return (   
      <>
      <div>counter number from buggy {count}</div>
      <button onClick={counter}>Click to update</button>
      </>
    )
  }
}

export default updatedComponent(BuggyComponent);

