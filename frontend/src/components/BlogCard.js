import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />

      <div className="blog-content">
        <p className="date">11 JUNE, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          mollitia sed corrupti.
        </p>
        <Link to="/blog/:id" className="button">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
