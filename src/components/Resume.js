import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      <section id="resume">
          <Bounce right>
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.YearOfPassing}</em></p>
                          <p>
                            Grades: {item.Marks}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Society</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date"> {item.YearOfLeaving}</em></p>
                          
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
          </Bounce>
          <Bounce left>
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Technical Skills</span></h1>
            </div>

            <div className="nine columns main-col">

   				<div>
   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li><h5>{item.skillname}</h5></li>
              
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>
         </Bounce>
         <Bounce right>
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Sport Skills</span></h1>
            </div>

            <div className="nine columns main-col">

   				<div>
   				   <ul className="skills">
                {
                  resumeData.sport_skills && resumeData.sport_skills.map((item) => {
                    return(
                      <li><h5>{item.skillname}</h5></li>
              
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>
         </Bounce>
      </section>
    );
  }
}