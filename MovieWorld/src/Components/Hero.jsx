import React from "react";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="photoSection">
      <div className="titleNavBar">
        <h1>Movie World</h1>
      </div>
      <form className="topForm" action="">
        <input
          className="inputSearch"
          type="text"
          placeholder="Search movie by name"
          aria-label="Search movie by name"
        />
        <button className="btnSearch">Search</button>
      </form>
      <Card />
    </div>
  );
};
export default Hero;
