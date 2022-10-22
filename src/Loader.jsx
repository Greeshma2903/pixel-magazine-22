import React from "react";

const Loader = () => {
  setTimeout(() => {
    document.querySelector(".loader-div").className = "loader-div hide";
    document.querySelector("body").className = "hide";
  }, 6000);

  return (
    <div className="loader-div">
      <h1>Pixel '22</h1>
      <div className="three col">
        <div className="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p>👉 images may take a few seconds to load 👈</p>
    </div>
  );
};
export default Loader;
