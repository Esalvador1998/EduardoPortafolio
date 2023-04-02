import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/eduardo-salvador-cardoze-1b7953191/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://www.instagram.com/luigisalvadorc_/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.twitter.com/eduardo29881504">
                <i className="fa fa-twitter"/>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Eduardo</span> I'm a
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Data and Product Associate",
                    1000,
                    "Energetic Innovator",
                    1000,
                    "Collaborative Problem Solver",
                    1000,
                    "Technical Strategist",
                    1000,
                    "API Integration Expert",
                    1000,
                    "E-commerce Expert",
                    1000,
                    "Reverse ETL Specialist",
                    1000,
                    "Hightouch Wizard",
                    1000,
                    "Result-Driven Achiever",
                    1000,
                    "Adaptable Learner",
                    1000,
                    "Zapier Guru",
                    1000,
                    "Fun-Loving Optimist",
                    1000,
                    "Tableau Visualizer",
                    1000,
                    "Snowflake Aficionado",
                    1000,
                    "R-Programming Pro",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Always looking for a new challenge to grow.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="EDUARDO SALVADOR RESUME.pdf" download="Eduardo Salvador.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
