import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link,Switch,Route, BrowserRouter as Router} from "react-router-dom";
import DisplayProducts from "./DisplayProducts";
import Cart from "./Cart";
import SignInPage from "./SignInPage";
import './App.css';


function Navbar(props) {
    return (      
      <Router>
        <div className="container container1">
            <Router>
            <div className="row align-items-start heading">

                <h1 className="col topheading">
                <Link to="/">   Shop 2 
                <FontAwesomeIcon icon={faRegistered}></FontAwesomeIcon> eact </Link>
                </h1>
                <div className="col icon">
                    <Link to="/Cart" > <FontAwesomeIcon icon={faShoppingCart} /> 
                        <span className="values">{props.totalValue}</span>
                         <span className="items">items</span> 
                    </Link>
                </div>
            </div>
                <Switch>
                    <Route exact path="/">
                    <DisplayProducts 
                        Products={props.totalItems} 
                        incrementValue={props.incrementValue} 
                        decrementValue={props.decrementValue}
                        sortType={props.sortType} 
                        listNum={props.listNum}
                        onSort={props.onSort}/> 
                    </Route>
                    <Route path="/Cart">
                        <Cart totalItems={props.totalItems} totalValue={props.totalValue}/>
                    </Route>
                    <Route path="/SignInPage">
                        <SignInPage totalItems={props.totalItems}/>
                    </Route>
                </Switch>
            </Router>
        </div>
       </Router> 
    )
}

export default Navbar;

 