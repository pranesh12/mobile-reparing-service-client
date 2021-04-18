import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
const axios = require("axios");

const AddReview = () => {
  const [info, setInfo] = useState({});
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("name", info.name);
    data.append("issue", info.issue);
    data.append("description", info.description);

    axios
      .post("http://localhost:5000/addReview", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  return (
    <div>
      <div className="row">
        <Sidebar />

        <div className="col-md-8" style={{ background: "#c1d3fe" }}>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="issue"
                placeholder="Issue"
              />
            </div>

            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="description"
                placeholder="description"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
