import React, { useEffect, useState } from "react";
const dummyReview = [
  {
    status: "good",
    review:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natu ",
    star: 5,
  },
  {
    status: "avagrage",
    review:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natu ",
    star: 5,
  },
  {
    status: "bad",
    review:
      "orem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natu ",
    star: 5,
  },
];
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(dummyReview);
  }, []);
  return (
    <section className="mt-3">
      <div className="container">
        <h1 className="text-center pb-2">Customer Reviews</h1>
        <div className="row">
          {reviews.map((review) => (
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div className="card-title">{review.status}</div>
                  <div className="card-text">{review.review}</div>
                  <div className="card-text">{review.star}</div>
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
