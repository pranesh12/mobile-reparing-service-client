import React, { useEffect, useState } from "react";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getReviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="mt-3">
      <div className="container">
        <h1 className="text-center pb-2">Customer Reviews</h1>
        <div className="row">
          {reviews.map((review) => (
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h5>Name: {review.name} </h5>
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
