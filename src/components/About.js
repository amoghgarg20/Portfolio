import React from "react";
import AnimatedBounce from "./AnimatedBounce";

const About = React.memo(({ resumeData }) => {
  return (
    <AnimatedBounce>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/Profile.jpg"
              alt="Amogh Garg"
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Location: {resumeData.address}</span>
                  <br />
                  <span>Contact Number: {resumeData.mobile}</span>
                  <br />
                  <span>
                    Email-ID:{" "}
                    <a href="mailto: amoghgarg9@gmail.com">
                      amoghgarg9@gmail.com
                    </a>
                  </span>
                  <br />
                  <span>
                    Resume:{" "}
                    <a
                      href="/images/Amogh Garg-Resume.pdf"
                      download="Amogh Garg-Resume"
                    >
                      Download
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBounce>
  );
});

About.displayName = 'About';

export default About;
