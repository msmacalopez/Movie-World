import React from "react";

const Card = () => {
  return (
    <section className="card">
      <img
        src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        alt="Movie"
      />
      <h2>StartWorld</h2>
      <small>IMDB Rating: 6.5</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ea.
      </p>
      <button className="btnDrama">Drama</button>
      <button className="btnAction">Action</button>
      <button className="btnDelete">Delete</button>
    </section>
  );
};

export default Card;
