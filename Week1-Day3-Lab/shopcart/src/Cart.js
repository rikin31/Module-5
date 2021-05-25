import {Link} from "react-router-dom"
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";

export default function Cart(props) {
  const {totalItems = []} = props
        return (
          <div>
          <div className="cartHeader"> Your Cart Items</div>
          {totalItems.map(cartList => {
            if(cartList.value > 0){
            return (  
              <div key={cartList.id} >
                <div className="row justify-content-start outline products">
                    <div className="col-2"> 
                        <div className="desc">
                            {cartList.desc}
                        </div> 
                        <div className="productImg">
                            <img src={cartList.image} alt={cartList.desc} width="100px"/> 
                        </div>    
                    </div>
                    <div className="col-3 Quantity">
                      <span className="value">
                      Quantity: {cartList.value} 
                      </span> 
                    </div>  
                </div>
              </div>
            )
            }
          })}
          <CheckOutBtn totalValue={props.totalValue} />
        </div>
        );
}

const CheckOutBtn = ({totalValue}) => {
  return (
      totalValue > 0 ?
      <Link to="/SignInPage">
          <Button className="mt-4">Check Out</Button>
      </Link>
      :
      <React.Fragment>
          <h4>There are {totalValue} items in your cart.</h4>
          <Link to="/">
              <Button className="mt-4 bg-success">Continue Shop</Button>
          </Link>
      </React.Fragment>
  )
}