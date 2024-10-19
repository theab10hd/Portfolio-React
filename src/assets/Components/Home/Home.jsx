import React from "react";
import "./Home.css";

function Home() {
  return (
    <section class="vh-100 container d-flex justify-content-center align-items-center flex-column">
      <div className="container p-0 heading fw-bold text-start">
        Designing <br />
        Future!
      </div>
      <div className="container p-0 d-flex align-items-end mt-2">
        <h3 className="text-dark">
          <span className="fw-bold text-black">Hey, I'm Abhijith Gaganan,</span>
          I do full-stack web development and designing, crafting seamless and
          visually compelling digital experiences from end to end.
        </h3>
      </div>
    </section>
  );
}

export default Home;
