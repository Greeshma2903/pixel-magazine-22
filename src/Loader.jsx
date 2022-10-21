import React from "react";

const Loader = () => {
  setTimeout(() => {
    document.querySelector(".loader-div").className = "loader-div hide";
    document.querySelector("body").className = "hide";
  }, 5000);

  return (
    <div className="loader-div">
      <div className="three col">
        <div className="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Loader;
