import React from "react";
import "./About.css";
import GetMail from "../GetMail/GetMail";

function About() {
  return (
    <>
      <section className="vh-100 container d-flex flex-column justify-content-start justify-content-lg-center align-items-lg-center">
        <div className="row gap-3 mt-5 mt-lg-0">
          <div className="col-lg-7 text-center text-lg-start col-12 mt-5 mt-lg-0 py-3 py-lg-0">
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
            <div className="row mt-2 mx-auto w-50 m-lg-0">
              <a
                className="col-3 col-lg-2 nav-link"
                href=" https://www.linkedin.com/in/abhijith-gaganan/"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-linkedin fa-2xl p-3"></i>
              </a>

              <a
                className="col-3 col-lg-2 nav-link"
                href=" https://api.whatsapp.com/send/?phone=918078556411&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-whatsapp fa-2xl p-3"></i>
              </a>

              <a
                className="col-3 col-lg-2 nav-link"
                href=" https://github.com/theab10hd"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-github fa-2xl p-3"></i>
              </a>

              <a
                className="col-3 col-lg-2 nav-link"
                href=" https://www.instagram.com/itsabhijithhere/"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-instagram fa-2xl p-3"></i>
              </a>
            </div>
            <a
              className="btn btn-dark mt-4"
              href="/Files/Resume.pdf"
              download="Resume-AbhijithGaganan.pdf"
            >
              <i className="fa-solid fa-download me-2"></i>Resume
            </a>
          </div>
          <hr className="divider-vr bg-secondary p-0 d-lg-block d-none " />
          <hr className="divider-hr bg-secondary p-0 d-block d-lg-none" />
          <div className="col-md  text-center text-lg-end py-3 py-lg-0">
            <h3 className="fw-bold">SKILLS</h3>
            <div className="mt-lg-5 mt-3">
              <div className="row  justify-content-lg-end justify-content-evenly px-3">
                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-bootstrap fa-2xl p-3"></i>
                  <span>bootstrap</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-html5 fa-2xl p-3"></i>
                  <span>html</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-css3 fa-2xl p-3"></i>
                  <span>css</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-js fa-2xl p-3"></i>
                  <span>javascript</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-css3-alt fa-2xl p-3"></i>
                  <span>tailwind</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-node fa-2xl p-3"></i>
                  <span>node</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-react fa-2xl p-3"></i>
                  <span>react</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-angular fa-2xl p-3"></i>
                  <span>angular</span>
                </div>
                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-solid fa-laptop fa-2xl p-3"></i>
                  <span>photoshop</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-solid fa-laptop fa-2xl p-3"></i>
                  <span>aftereffects</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-solid fa-laptop fa-2xl p-3"></i>
                  <span>premierepro</span>
                </div>

                <div className="col d-flex flex-column flex-grow-0 align-items-center justify-content-center p-2">
                  <i className="fa-brands fa-figma fa-2xl p-3"></i>
                  <span>figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 p-3 bg-dark d-flex flex-column align-items-center justify-content-center text-light rounded-2 shadow">
          <GetMail />
          <p className="text-center mt-2 mb-0">
            Stay connected! Get a mail from me to receive <br /> updates on my
            projects and insights.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
