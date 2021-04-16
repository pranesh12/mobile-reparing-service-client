import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const Book = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col">
          <h3>Books</h3>
        </div>
      </div>
    </div>
  );
};

export default Book;
