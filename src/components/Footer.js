import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="footer">
        <footer>
          <div className="row">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.54648884804!2d77.33700601432491!3d28.643351290343617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfad1264584db%3A0xe3c1bc4344ee2351!2sAjnara%20Landmark!5e0!3m2!1sen!2sin!4v1641711468489!5m2!1sen!2sin"
                width="80%"
                height="40%"
                allowfullscreen=""
                loading="lazy"
                title="address"
              />
            </div>
            <div className="twelve columns">
              <ul className="social-links">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li>
                        <a href={item.url}>
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
            <div class="copyright">
              <ul>
                <li>Last Updated Dec'2024</li>
                <li>Copyright © Amogh Garg</li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}
