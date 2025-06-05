import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Landing.css";

const HomePage = () => {
  const [hovered, setHovered] = useState(null);

  const notify = (role) => {
    toast.info(`Navigating to ${role} portal`, { position: "top-center" });
  };

  const scrollToInfo = () => {
    const infoSection = document.getElementById("info-section");
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container-wrapper">
        <h1 className="heading">Welcome to Result Analyzer</h1>
        <div className="row g-4 text-center w-75">
          <div className="col-md-6">
            <Link
              to="/auth"
              className="text-decoration-none"
              onMouseEnter={() => setHovered("teacher")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => notify("Teacher")}
            >
              <div
                className={`card-style ${
                  hovered === "teacher" ? "teacher-hover" : "teacher"
                }`}
              >
                <h2 className="fw-bold">Teacher</h2>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link
              to="/view-result-student"
              className="text-decoration-none"
              onMouseEnter={() => setHovered("student")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => notify("Student")}
            >
              <div
                className={`card-style ${
                  hovered === "student" ? "student-hover" : "student"
                }`}
              >
                <h2 className="fw-bold">Student</h2>
              </div>
            </Link>
          </div>
        </div>

        <div
          className="scroll-down"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          ↓ Learn more
        </div>

        <ToastContainer autoClose={2000} />
      </div>

      <div id="info-section" className="info-section">
        <h2>What is Result Analyzer?</h2>
        <p>
          Result Analyzer is a web-based platform designed to simplify the
          process of managing and analyzing student results. Teachers can log
          in to upload, modify, and view student performance, while students can
          instantly access their grades and track their academic progress. The
          platform promotes transparency, efficiency, and performance tracking
          for both educators and learners.
        </p>
      </div>
    </>
  );
};

export default HomePage;
