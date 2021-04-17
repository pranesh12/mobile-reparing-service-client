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
      .post("http://localhost:5000/addAdmin", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col">
          <form onSubmit={handleSubmit}>
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
