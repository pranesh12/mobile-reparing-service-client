import React from "react";
import "./Blog.css";
import blog1 from "../../../resources/images/blog1.jpg";
import blog2 from "../../../resources/images/blog2.jpg";
const Blog = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6  pr-2">
            <div className="row">
              <h3>OUR BLOG</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam blanditiis harum
                officia consectetur et illo porro odit facilis impedit?
              </p>
              <button className="btn btn-secondary">Go To Our Blog</button>
            </div>
            <div className="row mt-5">
              <img
                className="img-fluid"
                src={blog1}
                alt="blo1"
                style={{ height: "70vh", width: "30rem" }}
              />
            </div>
            <div className="row mt-4">
              <h4>Complete Deassembly and Installation Guide</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas atque error
                asperiores fugiat. Corporis neque, consequuntur excepturi ipsum temporibus libero?
                Placeat quibusdam tempora, natus ad laudantium beatae rerum nobis neque, architecto
                dolore deleniti nulla accusamus incidunt cumque quo cupiditate?
              </p>
              <p>Read More</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <img
                className="img-fluid"
                src={blog2}
                alt="blo2"
                style={{ height: "70vh", width: "30rem" }}
              />
            </div>
            <div className="row mt-3">
              <h4>Uloking Pin Procted Device</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas atque error
                asperiores fugiat. Corporis neque, consequuntur excepturi ipsum temporibus libero?
                Placeat quibusdam tempora, natus ad laudantium beatae rerum nobis neque, architecto
                dolore deleniti nulla accusamus incidunt cumque quo cupiditate?
              </p>
            </div>
            <div className="row">
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam blanditiis harum
                officia consectetur et illo porro odit facilis impedit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
