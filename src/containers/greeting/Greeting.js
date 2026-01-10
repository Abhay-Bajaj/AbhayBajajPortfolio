import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/GreetingRobot";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={isDark ? "greet-main dark-mode" : "greet-main"} id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title}{" "}
              </h1>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              <div id="resume" className="empty-div"></div>

              <div className="cta-grid">
                <SocialMedia />

                <div className="button-greeting-div">
                  <a href="#contact" className="icon-button btn-like">
                    Contact Me
                  </a>

                  {greeting.resumeLink && (
                    <a
                      href={greeting.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button btn-like"
                    >
                      My Resume
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
