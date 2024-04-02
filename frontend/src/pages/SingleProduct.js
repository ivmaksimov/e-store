import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { Link } from "react-router-dom";
import { BiShuffle } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import Popup from "react-popup";
import Color from "../components/Color";
import Container from "../components/Container";

const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 600,
    img: "images/pexels-fernando-arcos-190819.jpg",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    Popup.alert("The link is coppied");
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img className="img-fluid" src="images/watch.jpg" alt="" />
              </div>
              <div>
                <img className="img-fluid" src="images/watch.jpg" alt="" />
              </div>
              <div>
                <img className="img-fluid" src="images/watch.jpg" alt="" />
              </div>
              <div>
                <img className="img-fluid" src="images/watch.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title mb-3 mt-3">
                  boAt Rockerz 450 Bluetooth On Ear Headphones with Mic
                </h3>
              </div>
              <div className=" mt-4">
                <p className="price">$ 100.00</p>
              </div>
              <div className="d-flex align-items-center gap-10">
                <ReactStars
                  count={5}
                  value={3}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
                <p className="mb-0 color-1">(2 Reviews)</p>
              </div>
              <div className="border-bottom ">
                <a className="color-1 mt-2 mb-3" href="#review">
                  Write a review
                </a>
              </div>
              <div className="d-flex flex-column mt-1 ">
                <div className="d-flex align-items-center gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Type :</h5>
                  <p className="detail-desc mb-0  ">Headsets</p>
                </div>
                <div className="d-flex align-items-center gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Brand :</h5>
                  <p className="detail-desc mb-0  ">Havells</p>
                </div>
                <div className="d-flex flex-column justify-content-center gap-0.5  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Categories :</h5>
                  <p className="detail-desc mb-0  ">
                    airpods, camera's, Computers $ Laptop, headphones, mini
                    speaker, our store, Portable Speakers, smart phones, Smart
                    Television, Smartwatches
                  </p>
                </div>
                <div className="d-flex align-items-center gap-15  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Tags :</h5>
                  <p className="detail-desc mb-0  ">headphones</p>
                  <p className="detail-desc mb-0  ">laptop</p>
                  <p className="detail-desc mb-0  ">headphones</p>
                  <p className="detail-desc mb-0  ">mobile</p>
                  <p className="detail-desc mb-0  ">speaker</p>
                </div>
                <div className="d-flex align-items-center gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">SKU :</h5>
                  <p className="detail-desc mb-0  text-uppercase ">sku027</p>
                </div>
                <div className="d-flex align-items-center gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Availability :</h5>
                  <p className="detail-desc mb-0  ">541 In Stock</p>
                </div>
                <div className="d-flex flex-column justify-content gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Size :</h5>
                  <div className="size">
                    <form className="d-flex gap-2 " action="">
                      <input
                        className="size-btn selected"
                        type="button"
                        value="S"
                      />
                      <input className="size-btn" type="button" value="M" />
                    </form>
                  </div>
                </div>
                <div className=" d-flex flex-column justify-content gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Color</h5>
                  <div className="size">
                    {/* <form className="d-flex ms-2 gap-3 " action="">
                        <input
                          className="color-btn selected"
                          type="button"
                          value=""
                        />
                        <input className="color-btn" type="button" value="" />
                      </form> */}
                    <Color />
                  </div>
                </div>
                <div className="quantity d-flex align-items-center gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1  ">Quantity</h5>
                  <div className="ms-4 me-3">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      defaultValue={1}
                      className="p-0 form-control"
                      name="quantity"
                      id=""
                      style={{ width: "40px" }}
                    />
                  </div>
                  <div className="buy-now d-flex gap-3">
                    <button className="button border-0" type="submit">
                      ADD TO CART
                    </button>
                    <Link to="/signup" className="button signup">
                      Buy It Now
                    </Link>
                  </div>
                </div>
                <div className="add-to d-flex align-items-center gap-4 mt-4">
                  <div className="d-flex align-items-center">
                    <a className="d-flex align-items-center gap-2" href="">
                      <BiShuffle className="add-icon" /> Add to Compare
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <a
                      className="d-flex align-items-center gap-2"
                      href="http://"
                    >
                      <FaRegHeart className="add-icon" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-1 ">Shipping & Returns :</h5>
                  <p className="detail-desc mb-0  ">
                    Free shipping and returns available on all orders! <br />
                    We ship all EU domestic orders within
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10  desc-detail mt-4">
                  <h5 className="detail-name mb-0 ">Product Link :</h5>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      copyToClipboard(
                        "https://pixabay.com/photos/cat-feline-whiskers-pet-chair-8436843/"
                      );
                    }}
                  >
                    Copy The Product Link Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis illum non culpa facere aliquid commodi quisquam eum?
                Eaque, tempora? Et ex id quasi optio nesciunt dolores ipsum a
                inventore tempora?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className=" review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4>Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className="text-dark text-decoration-underline"
                      href="http://"
                    >
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={true}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Maksimov</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum neque corrupti debitis eveniet ratione doloribus
                    voluptatem aperiam possimus dolore harum aut explicabo
                    dolorum quia distinctio, iste unde blanditiis quibusdam cum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
