import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state={
    count:0
  }

  add=()=>{
   this.setState(current=>({count:current.count+1}));
  }
  minus=()=>{
    this.setState(current=>({count:current.count-1}));
  }
  
  render(){
    const{count}=this.state
    return(
      <>
      <h1> Count {count}</h1>
      <button onClick={this.add}>UP</button>
      <button onClick={this.minus}>DOWN</button>
      
      </>
    )
  }
}

export default App;