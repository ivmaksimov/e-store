import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <>
      <Container class1="checkout-wrapper">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Maksicom</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>
              <div className="col-7"></div>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </Container>

      <Link to="/payment" className="button">
        Continue to Payment
      </Link>
    </>
  );
};

export default Shipping;
