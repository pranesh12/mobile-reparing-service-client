import React, { useEffect, useState } from "react";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://agile-hamlet-17796.herokuapp.com/getReviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="mt-5 pt-5 pb-5" style={{ background: "#FAFAFA" }}>
      <div className="container">
        <h3 className="text-center pb-2 mb-5">What Our Customer Said</h3>
        <div className="row">
          {reviews.map((review) => (
            <div className="col-md-4">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="card-title">
                    <h6>Name: {review.name} </h6>
                  </div>
                  <div className="card-text">Issue:{review.issue}</div>
                  <div className="card-text">
                    <p> Description: {review.description}</p>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
