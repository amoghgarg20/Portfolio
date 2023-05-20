import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";
export default class Profile extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="profile">
        <Bounce left>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>
                Check out some of my coding platform's profiles.
                <br />
                Right click and open the link in new tab.
              </h1>
              <div>
                <div className="button-container">
                  <button className="div-button">Click Me</button>
                  <button className="div-button">Click Me</button>
                </div>
              </div>
            </div>
          </div>
        </Bounce>
      </section>
    );
  }
}
