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
              </h1>
              <div>
                <div className="button-container">
                  <button className="div-button">
                    <a href="https://leetcode.com/amoghgarg20/">Leetcode</a>
                  </button>
                  <button className="div-button">
                    <a href="https://codeforces.com/profile/amoghgarg20">
                      Codeforces
                    </a>
                  </button>
                  <button className="div-button">
                    <a href="https://www.kaggle.com/amoghgarg20">Kaggle</a>
                  </button>
                  <button className="div-button">
                    <a href="https://auth.geeksforgeeks.org/user/amoghgarg9/practice">
                      GFG
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Bounce>
      </section>
    );
  }
}
