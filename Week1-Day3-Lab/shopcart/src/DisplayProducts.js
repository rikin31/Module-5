import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";


function DisplayProducts(props) {
  const {Products = []} = props
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow (false);
  const handleShow = (item) => {
      setShow(true);
      setShowImage(item);
  }

    return (
     <div>
        <div>
          <form className="row align-item-center m-3">
              <div className="col-md-4"></div>
              <div className="col-md-5">
                  <label class="visually-hidden" for="sizingSelect">Sort Price By:</label>
                  <select class="form-select w-25" id="sizingSelect" onChange={(e) => props.onSort(Products, e.target.value)}>
                      <option value="def" selected>Normal</option>
                      <option value="asc">Lowest</option>
                      <option value="desc">Highest</option>
                  </select>
              </div>
              <div className="col-md-4"></div>
          </form>
        </div>
       {Products.map(list => {
         return (
          <div key={list.id}>
            <div className="container">
              <div className="row justify-content-start outline products">
                <div className="col-2">
                  <div className="desc">{list.desc} <span style={{color: "red"}}> ${list.price}</span></div>
                  <div className="productImg"> <img src={list.image} alt={list.desc} width="100px" onClick={() => handleShow(list)}/> </div>
                </div>
                <div className="col-3 Quantity">
                  <span>
                    <Button className="btn btn-secondary mx-1 ps-3" onClick={() => props.incrementValue(list)}><FontAwesomeIcon icon={faPlusCircle}/></Button> 
                    <Button className="btn btn-secondary mx-1 ps-3" onClick={() => props.decrementValue(list)}><FontAwesomeIcon icon={faMinusCircle}/></Button> 
                    <div className="value"> {list.value}</div>Quantity</span> 
                </div>
              </div>
            </div>      
          </div>  
         );
         })}

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>{showImage.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={showImage.image} width="350" alt={showImage.desc} className="mx-5"/>
              <p><span className="text-dark">Ratings:</span> {showImage.rating}/5</p>
          </Modal.Body>
      </Modal>

    </div>   
    );
  }

  export default DisplayProducts;