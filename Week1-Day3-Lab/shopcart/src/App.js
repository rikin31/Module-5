import './App.css';
import { Products } from "./Products";
import Navbar from "./Navbar";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList : Products
    };
  }

  incrementValue = (item) => {
    if(item.value < 10) {
    const update = item.value++; 
    this.setState({update});
    }
  }

  decrementValue = (item) => {
    if(item.value > 0){
      const update = item.value--; 
      this.setState({update});
    }
  }


  render() {
    return ( {},(
      <div className="App">
        <Navbar 
          totalValue = {this.state.ProductList.map((item) => item.value).reduce((acc, sum)=> acc + sum, 0)}
          totalItems={this.state.ProductList}
          incrementValue={this.incrementValue}
          decrementValue={this.decrementValue}
        />      
      </div>           
    ));
  }
}

export default App;
