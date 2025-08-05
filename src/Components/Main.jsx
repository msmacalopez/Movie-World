import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <main className="contentSection">
      <div className="mainBtns">
        <button className="mainBtnAll">All</button>
        <button className="mainBtnDrama">Drama</button>
        <button className="mainBtnAction">Action</button>
        <p>3 movies listed</p>
      </div>
      <div className="mainCards">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Main;
