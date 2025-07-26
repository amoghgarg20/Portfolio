import React, { Component } from "react";
import AnimatedBounce from "./AnimatedBounce";
export default class Profile extends Component {
  render() {
    return (
      <section id="profile">
        <AnimatedBounce>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>
                Explore my coding platform profiles.
                <br />
              </h1>
              <div>
                <div className="button-container">
                  <a href="https://leetcode.com/amoghgarg20/" target="_blank" rel="noreferrer">
                    <button className="div-button">Leetcode</button>
                  </a>

                  <a
                    href="https://codeforces.com/profile/amoghgarg20"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="div-button">Codeforces</button>
                  </a>

                  <a href="https://www.kaggle.com/amoghgarg20" target="_blank" rel="noreferrer">
                    <button className="div-button">Kaggle</button>
                  </a>

                  <a
                    href="https://auth.geeksforgeeks.org/user/amoghgarg9/practice"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="div-button">GFG</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBounce>
      </section>
    );
  }
}
