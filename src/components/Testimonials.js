import React, { Component } from "react";
import AnimatedBounce from "./AnimatedBounce";
export default class Testimonials extends Component {
  render() {
    return (
      <AnimatedBounce>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <h1>TESTIMONIAL</h1>
              <div className="two columns header-col" />
              {/* <div className="ten columns flex-container"> */}
              <img src="images/5.jpg" id="zoomA" alt="Testimonial" />
              {/* <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> div.flexslider ends */}
              {/* </div> div.flex-container ends */}
            </div>{" "}
            {/* row ends */}
          </div>{" "}
          {/* text-container ends */}
        </section>
      </AnimatedBounce>
    );
  }
}
