
import './App.css';
import { Products } from "./Products";
import Navbar from "./Navbar";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList : Products,
      listNum: "",
      sortType:""
    }
  }

  onSort = (listNum, sortType) => {
    switch (sortType) {
      case "def":
        listNum.sort((a, b) => {
          return a.id - b.id;
        });
        break;
      case "desc":
        listNum.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "asc":
        listNum.sort((a, b) => {
          return a.price - b.price;
        });
        break;
        default:
        break;
    }
    this.setState({ sortType });
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
          sortType={this.state.sortType} 
          listNum={this.state.listNum} 
          onSort={this.onSort}
        />      
      </div>           
    ));
  }
}

export default App;
