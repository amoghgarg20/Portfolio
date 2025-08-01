import React, { Component } from "react";
import AnimatedBounce from "./AnimatedBounce";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <AnimatedBounce>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.internship &&
                resumeData.internship.map((item, index) => {
                  return (
                    <div key={index} className="row item">
                      <div className="twelve columns">
                        <h3>{item.OrgName}</h3>
                        <p className="info">
                          {item.role}
                          <span>&bull;</span> {item.location}
                          <span>&bull;</span>{" "}
                          <em className="date"> {item.time}</em>
                        </p>
                        <p>{item.Description}</p>
                        <p>
                          {" "}
                          <b>Skills :</b> {item.Skills}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.education &&
                resumeData.education.map((item, index) => {
                  return (
                    <div key={index} className="row item">
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span>{" "}
                          <em className="date">{item.YearOfPassing}</em>
                        </p>
                        <p className="grade">
                          <b>Grades:</b> {item.Marks}
                        </p>
                        <p className="grade">
                          Transcipt:{" "}
                          <a href={item.link} download={item.n}>
                            Download
                          </a>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Society</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.work &&
                resumeData.work.map((item, index) => {
                  return (
                    <div key={index} className="row item">
                      <div className="twelve columns">
                        <h3>{item.CompanyName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span>{" "}
                          <em className="date"> {item.YearOfLeaving}</em>
                        </p>
                        <p>{item.Description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </AnimatedBounce>
        <AnimatedBounce>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Technical Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <ul className="skills">
                  {resumeData.skills &&
                    resumeData.skills.map((item, index) => {
                      return (
                        <li key={index}>
                          <h5>{item.skillname}</h5>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedBounce>
        <AnimatedBounce>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Sport Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <ul className="skills">
                  {resumeData.sport_skills &&
                    resumeData.sport_skills.map((item, index) => {
                      return (
                        <li key={index}>
                          <h5>{item.skillname}</h5>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedBounce>
      </section>
    );
  }
}
