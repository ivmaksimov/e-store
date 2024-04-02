import React from "react";
import { BiFontSize } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Maksicom</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item ">
                    <Link className="text-dark" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /<li className="breadcrumb-item">Shipping</li>
                  &nbsp; /
                  <li className="breadcrumb-item " aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">Ivan Maksimov (ivan@mail.com)</p>
              <form
                action=""
                className="d-flex flex-wrap justify-content-between gap-15"
              >
                <div className="w-100">
                  <select className="form-control form-select" name="" id="">
                    <option value="" selected disabled key="">
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-100 form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc."
                    className="w-100 form-control"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-100 form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select className="form-control form-select" name="" id="">
                    <option value="" selected disabled key="">
                      Select State
                    </option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ZIP code"
                    className="w-100 form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      className="text-dark d-flex align-items-center"
                      to="/cart"
                    >
                      <MdArrowBackIos style={{ fontSize: "22px" }} />
                      Return to Cart
                    </Link>
                    <Link to="/shipping" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
              <div className="col-7"></div>
            </div>
          </div>
          <div className="col-5 right-checkout">
            <div className="checkout-right-data  d-flex flex-column  gap-15">
              <div className="d-flex flex-column gap-10 border-bottom">
                <div className="products  d-flex justify-content-between gap-15 align-items-center">
                  <div className="products-image  position-relative  col-2">
                    <img style={{ width: "80px" }} src={watch} alt="" />
                    <span>1</span>
                  </div>
                  <div className="products-desc ">
                    <h4>
                      Honor T1 7.0 1 GB RAM 8 GB ROM & inch with Wi-Fi+3 G
                      Tablet
                    </h4>
                    <h5>S/#AB5A5A</h5>
                  </div>
                  <div className="products-price d-flex justify-content-end col-2">
                    <h5>$ 100.00</h5>
                  </div>
                </div>
                <div className="products  d-flex justify-content-between gap-15 align-items-center">
                  <div className="products-image position-relative  col-2">
                    <img style={{ width: "80px" }} src={watch} alt="" />
                    <span>1</span>
                  </div>
                  <div className="products-desc ">
                    <h4>
                      Honor T1 7.0 1 GB RAM 8 GB ROM & inch with Wi-Fi+3 G
                      Tablet
                    </h4>
                    <h5>S/#AB5A5A</h5>
                  </div>
                  <div className="products-price d-flex justify-content-end col-2">
                    <h5>$ 100.00</h5>
                  </div>
                </div>
              </div>

              <div className="subtotal border-bottom d-flex flex-column py-3 gap-20">
                <div className=" d-flex  justify-content-between align-items-center">
                  <h4>Subtotal</h4>
                  <h5>$ 200.00</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Shipping</h4>
                  <h5>$ 19.65</h5>
                </div>
              </div>

              <div className=" total d-flex py-5 justify-content-between align-items-center">
                <h4>Total</h4>
                <h5>
                  <span className="text-secondary">USD </span> $ 219.65
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
