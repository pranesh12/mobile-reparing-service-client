import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
const axios = require("axios");

const MakeAdmin = () => {
  const [info, setInfo] = useState({});
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("email", info.email);

    axios
      .post("https://agile-hamlet-17796.herokuapp.com/addAdmin", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <div>
      <div className="row">
        <Sidebar />
        <div className="col-md-8" style={{ background: "#c1d3fe" }}>
          <form onSubmit={handleSubmit} className="mt-5 pt-5">
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
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

export default MakeAdmin;
