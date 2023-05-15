import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
export default class Testimonials extends Component {
  render() {
    
    let resumeData = this.props.resumeData;
    return (
      <Bounce right>
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
          <h1>TESTIMONIAL</h1>
            <div className="two columns header-col">
            
            </div>
            {/* <div className="ten columns flex-container"> */}
              <img src="images/5.jpg" id="zoomA"></img>
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
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
      </Bounce>
        );
        
  }
}