import React from "react";

import Footer from "../Footer/Footer";

function Projects() {
  return (
    <>
      <div className="container my-5">
        <h5 className="text-dark pt-4">
          Check out some of the work I've done, from web development to creative
          designs.
        </h5>
        <div className="container p-2 shadow-sm bg-white rounded-2">
          <video
            src="./Videos/zomato project.mp4"
            autoPlay
            loop
            muted
            playsInline
            type="video/mp4"
            className="w-100 border"
          >
            Video Not Supported
          </video>
          <div className="row justify-content-between align-items-center">
            <div className="col-md col-12 align-items-center">
              <h3 className="fw-bold fs-3">Zomato Clone (Frontend)</h3>
              <p>
                A responsive frontend for a restaurant discovery app built with
                Bootstrap 5, featuring a modern, grid-based layout and
                user-friendly design.
              </p>
            </div>
            <div className="col-md col-12 me-md-3">
              <a
                href="https://theab10hd.github.io/Zomato-Like-Clone/"
                target="_blank"
                className="float-md-end float-start btn btn-dark"
              >
                View
                <i className="fa-solid fa-arrow-up-right-from-square ms-2 fa-sm"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row gap-2 container justify-content-between mt-2 p-0 m-0">
          <div className="col-12 col-md bg-white d-flex flex-column shadow-sm align-items-center rounded-2 p-2">
            <img
              src="./Projects/eliteevents.png"
              className="img-fluid rounded-2"
            />
            <div className="mt-3 d-flex flex-column flex-grow-1">
              <a
                className="fw-bold nav-link d-flex align-items-center fs-3"
                href="https://theab10hd.github.io/Event-Management-Booking/"
                target="_blank"
              >
                Elite Events
                <i className="fa-solid fa-arrow-up-right-from-square ms-2 fs-6"></i>
              </a>
              <p className="mt-2">
                Elite Events is a top event management company known for
                crafting exceptional, memorable experiences.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/theab10hd/Event-Management-Booking"
                  target="_blank"
                  className="btn btn-outline-dark mt-2"
                >
                  <i className="fa-brands fa-github"></i> Go to Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md bg-white d-flex flex-column shadow-sm align-items-center rounded-2 p-2 ">
            <img
              src="./Projects/simplebank.png"
              className="img-fluid rounded-2"
            />
            <div className="mt-3 d-flex flex-column flex-grow-1">
              <div>
                <a
                  className="fw-bold nav-link fs-3 d-flex align-items-center"
                  target="_blank"
                  href="https://theab10hd.github.io/Simple-Online-Banking-Website/"
                >
                  Simple Bank (Localstorage)
                  <i className="fa-solid fa-arrow-up-right-from-square ms-2 fs-6"></i>
                </a>
                <p className="mt-2">
                  A basic banking website using Local Storage for functionality,
                  featuring login, logout, cash deposit, and withdrawal options.
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href="https://github.com/theab10hd/Simple-Online-Banking-Website"
                  target="_blank"
                  className="btn btn-outline-dark mt-2"
                >
                  <i className="fa-brands fa-github"></i> Go to Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md bg-white d-flex flex-column shadow-sm align-items-center rounded-2 p-2">
            <img
              src="./Projects/polyportal.png"
              className="img-fluid rounded-2"
            />
            <div className="mt-3 d-flex flex-column flex-grow-1">
              <a
                className="fw-bold nav-link d-flex align-items-center fs-3"
                href="https://polyportalstudents.netlify.app/"
              >
                Poly Portal
                <i className="fa-solid fa-arrow-up-right-from-square ms-2 fs-6"></i>
              </a>
              <p className="mt-2">
                PolyPortal is a comprehensive website offering study notes and
                module resources specifically tailored for diploma students.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/theab10hd/Poly-Portal"
                  target="_blank"
                  className="btn btn-outline-dark mt-2"
                >
                  <i className="fa-brands fa-github"></i> Go to Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row gap-2 container justify-content-between mt-2 p-0 m-0">
          <div className="col-12 col-md bg-white d-flex flex-column shadow-sm align-items-center rounded-2 p-2">
            <img
              src="./Projects/interest calculator.png"
              className="img-fluid rounded-2"
            />
            <div className="mt-3 d-flex flex-column flex-grow-1">
              <a
                className="fw-bold nav-link d-flex align-items-center fs-3"
                href="https://voluble-cheesecake-6286e6.netlify.app/"
                target="_blank"
              >
                Simple Interest Calculator
                <i className="fa-solid fa-arrow-up-right-from-square ms-2 fs-6"></i>
              </a>
              <p className="mt-2">
                A straightforward tool to calculate simple and compound interest
                quickly. It helps you estimate the growth of your savings or
                loans with an easy-to-use interface.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/theab10hd/Simple-Interest-Calculator-React"
                  target="_blank"
                  className="btn btn-outline-dark mt-2"
                >
                  <i className="fa-brands fa-github"></i> Go to Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md bg-white d-flex flex-column shadow-sm align-items-center rounded-2 p-2">
            <img
              src="./Projects/calculator.png"
              className="img-fluid rounded-2"
            />
            <div className="mt-3 d-flex flex-column flex-grow-1">
              <div>
                <a
                  className="fw-bold nav-link fs-3 d-flex align-items-center"
                  target="_blank"
                  href="https://theab10hd.github.io/Calculator/"
                >
                  Simple Calculator
                  <i className="fa-solid fa-arrow-up-right-from-square ms-2 fs-6"></i>
                </a>
                <p className="mt-2">
                  "A basic calculator for performing everyday arithmetic
                  operations like addition, subtraction, multiplication, and
                  division. Easy to use and perfect for quick calculations.
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href="https://github.com/theab10hd/Calculator"
                  target="_blank"
                  className="btn btn-outline-dark mt-2"
                >
                  <i className="fa-brands fa-github"></i> Go to Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md bg-white d-flex flex-column shadow-sm align-items-center rounded-2 p-2">
            <img src="./Projects/todo.png" className="img-fluid rounded-2" />
            <div className="mt-3 d-flex flex-column flex-grow-1">
              <a
                className="fw-bold nav-link d-flex align-items-center fs-3"
                href="https://theab10hd.github.io/Simple-Javascript-ToDo-/"
                target="_blank"
              >
                Todo
                <i className="fa-solid fa-arrow-up-right-from-square ms-2 fs-6"></i>
              </a>
              <p className="mt-2">
                A simple to-do list app that uses Local Storage to keep track of
                your tasks. Easily add and delete tasks, with your progress
                saved automatically for a seamless experience.
              </p>
              <div className="mt-auto">
                <a
                  href="https://github.com/theab10hd/Simple-Javascript-ToDo-"
                  target="_blank"
                  className="btn btn-outline-dark mt-2"
                >
                  <i className="fa-brands fa-github"></i> Go to Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
