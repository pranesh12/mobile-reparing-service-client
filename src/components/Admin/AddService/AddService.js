import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
const axios = require("axios");

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("title", info.title);
    data.append("description", info.description);
    data.append("price", info.price);
    data.append("file", file);

    axios
      .post("https://agile-hamlet-17796.herokuapp.com/addService", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    e.preventDefault();
  };

  return (
    <div>
      <div className="row">
        <Sidebar />

        <div className="col-md-8" style={{ background: "#c1d3fe" }}>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="title"
                placeholder="Service title"
              />
            </div>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="number"
                className="form-control"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <label>Upload a image</label>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control"
                placeholder="Picture"
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

export default AddService;
