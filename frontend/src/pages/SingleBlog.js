import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dinamic Blog Name"} />
      <BreadCrumb title="Dinamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
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
          </div>
          <div className="col-9">
            <div className="single-blog-card">
              <h3 className="title">A Beautiful Sunday Renaissance</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              <p>
                You’re only as good as your last collection, which is an
                enormous pressure. I think there is something about luxury –
                it’s not something people need, but it’s what they want. It
                really pulls at their heart. I have a fantastic relationship
                with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                vestibulum pretium commodo inceptos cum condimentum placerat
                diam venenatis blandit hac eget dis lacus a parturient a
                accumsan nisl ante vestibulum.
              </p>

              <Link
                to="/blog"
                className="d-flex align-items-center fs-4 gap-10"
              >
                <HiOutlineArrowNarrowLeft />
                Go back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
