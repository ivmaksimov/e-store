import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image ">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt="watch"
                />
              </div>
              <div className="px-3 py-3">
                <h5 className="title">
                  Lenovo Tab M10 HD Gen 2 Tablet (16GB, 10.1 inches, Wi-Fi,
                  Black)
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image ">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt="watch"
                />
              </div>
              <div className="px-3 py-3">
                <h5 className="title">
                  Lenovo Tab M10 HD Gen 2 Tablet (16GB, 10.1 inches, Wi-Fi,
                  Black)
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image ">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt="watch"
                />
              </div>
              <div className="px-3 py-3">
                <h5 className="title">
                  Lenovo Tab M10 HD Gen 2 Tablet (16GB, 10.1 inches, Wi-Fi,
                  Black)
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
