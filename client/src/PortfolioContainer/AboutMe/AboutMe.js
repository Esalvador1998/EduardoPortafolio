import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Hey there! I'm Eduardo, a spirited Data and Product Associate with a passion for taking on challenges and learning new things. Hailing from Panama City, I've come a long way, driven by my relentless ambition, curiosity, and zest for life. As a proud Virginia Tech alumnus with a degree in Industrial & Systems Engineering and a minor in Economics, I've been able to apply my skills and knowledge to make a positive impact in the tech world. I believe that my diverse background and energetic personality bring a unique and refreshing perspective to the table. Throughout my journey, I've always sought to break boundaries and explore new horizons. This adventurous spirit has led me to master various technical skills, collaborate with professionals from different cultures, and engage in a range of exciting projects. In my downtime, I love to indulge in my creative side by playing piano and guitar, thanks to my grandma's encouragement. I also enjoy staying active through hiking and sports, which help me recharge and maintain a healthy balance in life. So, let's connect and chat about how my vibrant personality, strong work ethic, and unique background can contribute to your organization's success!",
    highlights: {
      bullets: [
        "NISS Data Competiton of Statistically Accurate Interactive Display representing Virginia Tech",
        "Six Sigma Green Belt Certification",
        "Automated lead distribution, data management",
        "Created KPI dasboard with Tableau, Snowflake",
        "Implemented partner API integrations, webhooks",
        "Managed global e-commerce development teams",
        "Optimized email UI/UX design"
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="EDUARDO SALVADOR RESUME.pdf" download="Eduardo Salvador Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
