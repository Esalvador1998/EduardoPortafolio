import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Tableau", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 90 },
    { skill: "Zapier", ratingPercentage: 85 },
    { skill: "Hightouch", ratingPercentage: 85 },
    { skill: "Webhooks", ratingPercentage: 80 },
    { skill: "R Programming", ratingPercentage: 80 },
    { skill: "API Integrations", ratingPercentage: 60 },
    { skill: "Snowflake", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "Personal Website",
      duration: { fromDate: "2022", toDate: "2022" },
      subHeading: "Technologies Used: React, Bootsrap, Java, CSS",
    },
    {
      title: "Company KPI Dashboards",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Built interactive dashboards for leadership by cleaning and joining multiple data sources for informed decision-making.",
      subHeading:
        "Technologies Used:  R-Script, SQL, Snowflake, Tableau",
    },
    {
      title: "API & Webhook Integrations",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Improved system communication and vendor relationships by executing multiple partner API POST integrations and webhooks.",
      subHeading:
        "Technologies Used: Zapier, Partner API, Postman",
    },
    {
      title: "E-Commerce Development",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Led global collaboration with development teams in Argentina and India to continuously enhance e-commerce platform.",
      subHeading:
        "Technologies Used: Product Management, UI/UX",
    },

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Virginia Tech College of Engineering, Virginia"}
        subHeading={"BACHELOR OF SCIENCE INDUSTRIAL & SYSTEMS ENGINEERING w/MINOR IN ECONOMICS"}
        fromDate={"2017"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Education First"}
        subHeading={"As highschool student seeking experience in higher education went to Oglethorpe University. Atlanta"}
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Activities and societies: Physics Honors, Physics Olympic Team, Varsity Soccer & Varsity Basketball"}
        fromDate={"2012"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <ResumeHeading
          heading={"PetScreening"}
          subHeading={"DATA & PRODUCT - ASSOCIATE"}
          fromDate={"2022"}
          toDate={"2023"}
        />
        <ResumeHeading
          heading={"Kennametals"}
          subHeading={"DATA SCIENTIST SPECIALIST"}
          fromDate={"2021"}
          toDate={"2022"}
        />
       <ResumeHeading
          heading={"KPMG Virtual Internship"}
          subHeading={"DATA ANALYST INTERN"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <ResumeHeading
          heading={"COPA Airlines"}
          subHeading={"DATA SCIENTIST INTERN"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <ResumeHeading
          heading={"MMG Bank"}
          subHeading={"INVESTMENT BANKING ANALYST INTERN"}
          fromDate={"2019"}
          toDate={"2019"}
        />
        <ResumeHeading
          heading={"SweetWaters Security"}
          subHeading={"ADMINISTRATIVE ASSISTANT INTERN"}
          fromDate={"2017"}
          toDate={"2017"}
        />
      </div>
    </div>,
    

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Piano and Guitar"
        description="Passionate about playing and mastering piano and guitar - shoutout to my grandma for making me take classes as a kid"
      />
      <ResumeHeading
        heading="Team Sports"
        description="Driven by a lifelong involvement in high-level competitive sports, I thrive on excercise and the energizing boost it brings."
      />
      <ResumeHeading
        heading="Hiking Adventures"
        description="Recently introduced to hiking by my girlfriend, and now hooked! a perfect way to disconnect, snap cool pictures and create memories"
      />
      <ResumeHeading
        heading="World Travel"
        description="Eager to uncover new cultures, landscapes and flavors, as I explore the globe with an insatiable appetite for adventure."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
