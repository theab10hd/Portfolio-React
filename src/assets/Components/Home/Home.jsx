import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section class="vh-100 container d-flex justify-content-center align-items-center flex-column">
      <div className="container p-0 heading fw-bold text-start">
        Designing, <br />
        Development.
      </div>
      <div className="container p-0 d-flex align-items-end mt-2">
        <h3 className="text-dark">
          <span className="fw-bold text-black mt-3 mt-lg-0 me-1">
            Hey, I'm Abhijith Gaganan.
          </span>
          I do full-stack web development and designing, crafting seamless and
          visually compelling digital experiences from end to end.
        </h3>
      </div>
      <div className="container p-0 d-block d-lg-none text-start">
        <Link to="/projects">
          <div className="btn btn-outline-dark me-2">Projects</div>
        </Link>
        <Link to="/about">
          <div className="btn btn-outline-dark ">About Me</div>
        </Link>
      </div>
    </section>
  );
}

export default Home;
