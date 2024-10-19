import React from "react";
import "./About.css";
import GetMail from "../GetMail/GetMail";

function About() {
  return (
    <>
      <section className="vh-100 container d-flex flex-column justify-content-start justify-content-lg-center align-items-lg-center ">
        <div className="row gap-3 mt-5 mt-lg-0">
          <div className="col-lg-7 col-12 mt-5 mt-lg-0 py-3 py-lg-0">
            <h3 className="fw-bold">ABOUT ME</h3>
            <h5 className="mt-lg-5 mt-3">
              Hi, I'm Abhijith Gaganan, a passionate MERN stack developer and
              creative graphic designer. I specialize in building dynamic web
              applications using the power of the MERN stack while also crafting
              visually engaging designs. I love merging code and creativity to
              deliver seamless digital experiences that look as good as they
              function.
            </h5>
            <div className="row mt-4">
              <h5 className="col-12 ">
                <i className="fa-solid fa-location-dot me-2"></i>Kochi, Kerala
              </h5>
              <h5 className="col-12 ">
                <i className="fa-solid fa-envelope me-2"></i>
                theab10hd@gmail.com
              </h5>
              <h5 className="col-12 ">
                <i className="fa-solid fa-phone me-2"></i>+91 8078 5564 11
              </h5>
            </div>
            <div className="row mt-2 w-50">
              <a
                className="col-3 col-md-2 nav-link"
                href=" https://www.linkedin.com/in/abhijith-gaganan/"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-linkedin fa-2xl p-3"></i>
              </a>

              <a
                className="col-3 col-md-2 nav-link"
                href=" https://api.whatsapp.com/send/?phone=918078556411&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-whatsapp fa-2xl p-3"></i>
              </a>

              <a
                className="col-3 col-md-2 nav-link"
                href=" https://github.com/theab10hd"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-github fa-2xl p-3"></i>
              </a>

              <a
                className="col-3 col-md-2 nav-link"
                href=" https://www.instagram.com/itsabhijithhere/"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-instagram fa-2xl p-3"></i>
              </a>
            </div>
            <div className="btn btn-dark mt-4">
              <i class="fa-solid fa-download me-2"></i>Resume
            </div>
          </div>
          <hr class="divider-vr bg-secondary p-0 d-lg-block d-none " />
          <hr class="divider-hr bg-secondary p-0 d-block d-lg-none" />
          <div className="col-md text-lg-end py-3 py-lg-0">
            <h3 className="fw-bold">SKILLS</h3>
            <div class="mt-lg-5 mt-3">
              <div class="row  justify-content-lg-end justify-content-evenly">
                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-bootstrap fa-2xl p-3"></i>
                  <span>bootstrap</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-html5 fa-2xl p-3"></i>
                  <span>html</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-css3 fa-2xl p-3"></i>
                  <span>css</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-js fa-2xl p-3"></i>
                  <span>javascript</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-css3-alt fa-2xl p-3"></i>
                  <span>tailwind</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-node fa-2xl p-3"></i>
                  <span>node</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-react fa-2xl p-3"></i>
                  <span>react</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-angular fa-2xl p-3"></i>
                  <span>angular</span>
                </div>
                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-solid fa-laptop fa-2xl p-3"></i>
                  <span>photoshop</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-solid fa-laptop fa-2xl p-3"></i>
                  <span>aftereffects</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-solid fa-laptop fa-2xl p-3"></i>
                  <span>premierepro</span>
                </div>

                <div class="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i class="fa-brands fa-figma fa-2xl p-3"></i>
                  <span>figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <GetMail />
          <p className="text-center mt-2">
            Stay connected! Get a mail from me to receive <br /> updates on my
            projects and insights.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
