import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
export default class Album extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Bounce left>
      <section id="album">
        <div className="text-container">
          <div className="row">
          <h1>ALBUM</h1>
            <div className="two columns header-col">
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                        <li>
                          <blockquote>
                            <p>
                            Click on the link to gain access to view my accolades.<br/>
                            <a href="https://drive.google.com/drive/folders/1g-uj3aeuTEZcnwG5pZLYsw2Q7ymQDsoX?usp=sharing">Accolades</a>  
                            </p>
                            
                          </blockquote>
                        </li>
                        <li>
                          <blockquote>
                            <p>
                            Click on the link to gain access to view my personal album.<br/>
                            <a href="https://drive.google.com/drive/folders/1g-uj3aeuTEZcnwG5pZLYsw2Q7ymQDsoX?usp=sharing">Personal-Album</a>
                            </p>
                            
                          </blockquote>
                        </li>
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
      </Bounce>
        );
  }
}