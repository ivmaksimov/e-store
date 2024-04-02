import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter by</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating  d-flex align-items-center ">
                    <p className="mb-0 me-2">$ </p>
                    <input
                      type="email"
                      className="form-control py-1"
                      id="floatingInput-1"
                      placeholder="From"
                    />
                    <label className="ms-3" htmlFor="floatingInput-1">
                      From
                    </label>
                  </div>
                  <div className="form-floating  d-flex align-items-center">
                    <p className="mb-0 me-2">$</p>
                    <input
                      type="email"
                      className="form-control py-1"
                      id="floatingInput-2"
                      placeholder="To"
                    />
                    <label className="ms-3" htmlFor="floatingInput-2">
                      To
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Color</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-1"
                    />
                    <label className="form-check-label" htmlFor="size-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-2"
                    />
                    <label className="form-check-label" htmlFor="size-2">
                      M (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-3"
                    />
                    <label className="form-check-label" htmlFor="size-3">
                      L (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-4"
                    />
                    <label className="form-check-label" htmlFor="size-4">
                      XL (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-5"
                    />
                    <label className="form-check-label" htmlFor="size-5">
                      XXL (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge  rounded-3 py-2 px-3">Headphone</span>
                  <span className="badge  rounded-3 py-2 px-3">Laptop</span>
                  <span className="badge  rounded-3 py-2 px-3">Mobile</span>
                  <span className="badge  rounded-3 py-2 px-3">Speaker</span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div>
                <div className="random-products d-flex gap-10">
                  <div className="pic">
                    <img
                      className="img-fluid"
                      src="images/headphone.jpg"
                      alt="watch"
                    />
                  </div>
                  <div className="content">
                    <h6>Kids Headphones Bulk 10 - Pack Multi Colored For</h6>

                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={16}
                      activeColor="#ffd700"
                    />
                    <p>$100.00</p>
                  </div>
                </div>
              </div>
              <span className="line"></span>
              <div>
                <div className="random-products d-flex">
                  <div className="pic">
                    <img
                      className="img-fluid"
                      src="images/watch.jpg"
                      alt="watch"
                    />
                  </div>
                  <div className="content">
                    <h6>Apple Watch Series-2 - 42 Mm Stainless Steel</h6>

                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={16}
                      activeColor="#ffd700"
                    />
                    <p>$100.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 ">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block sort">Sort By:</p>
                  <select
                    name=""
                    defaultValue="best-selling"
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="date-ascending">Date, old to new</option>
                    <option value="date-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      className="d-block img-fluid"
                      src="images/gr4.svg"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      className="d-block img-fluid"
                      src="images/gr3.svg"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      className="d-block img-fluid"
                      src="images/gr2.svg"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      className="d-block img-fluid"
                      src="images/gr.svg"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
