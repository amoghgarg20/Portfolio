import React, { Component } from "react";
import AnimatedBounce from "./AnimatedBounce";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <AnimatedBounce>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>
                Check Out Some of My Works.
                <br />
                Right click and open the link in new tab to know more about the
                project.
              </h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {resumeData.portfolio &&
                  resumeData.portfolio.map((item) => {
                    return (
                      <div className="columns portfolio-item">
                        <div className="item-wrap">
                          {/* <img src={`${item.imgurl}`} className="item-img"/> */}
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                              <a href={`${item.siteurl}`}> Explore more...</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </AnimatedBounce>
      </section>
    );
  }
}
