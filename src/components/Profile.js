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
                Explore my coding platform profiles.
                <br />
              </h1>
              <div>
                <div className="button-container">
                  <a href="https://leetcode.com/amoghgarg20/" target="_blank">
                    <button className="div-button">Leetcode</button>
                  </a>

                  <a
                    href="https://codeforces.com/profile/amoghgarg20"
                    target="_blank"
                  >
                    <button className="div-button">Codeforces</button>
                  </a>

                  <a href="https://www.kaggle.com/amoghgarg20" target="_blank">
                    <button className="div-button">Kaggle</button>
                  </a>

                  <a
                    href="https://auth.geeksforgeeks.org/user/amoghgarg9/practice"
                    target="_blank"
                  >
                    <button className="div-button">GFG</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Bounce>
      </section>
    );
  }
}
