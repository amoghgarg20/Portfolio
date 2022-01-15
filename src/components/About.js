import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
       <Bounce left>
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/Passport Size Photo.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						   <span>Address: {resumeData.address}
                    </span>
                    <br></br>
                    <span>Contact Number: {resumeData.mobile}</span>
                    <br></br>
                    <span>Email-ID: <a href="mailto: amoghgarg9@gmail.com">amoghgarg9@gmail.com</a></span>
                    <br/>
                    <span>Resume: <a href="/images/1.png" download="Amogh Garg-CV">
          Click to Download
        </a></span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </Bounce>
    );
  }
}