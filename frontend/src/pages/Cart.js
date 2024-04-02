import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>Watch</p>
                  <p>Size: fdfds</p>
                  <p>Color: asdaa</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="quantity d-flex gap-15 align-items-center cart-col-3">
                <div>
                  <input
                    min={1}
                    max={10}
                    defaultValue={1}
                    style={{ width: "70px" }}
                    type="number"
                    className="form-control"
                    name=""
                    id=""
                  />
                </div>
                <div className="delete d-flex align-items-center justify-content-center">
                  <RiDeleteBin5Fill className="delete-icon" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 py-2">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue Shopping
              </Link>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h4>SubTotal: $ 100</h4>
              <p>Taxes and shipping calculated at checkout</p>
              <Link to="/checkout" className="button">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
