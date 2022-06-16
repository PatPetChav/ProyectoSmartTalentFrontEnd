import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
      
              <ul className="copyright">
                <li>&copy; Copyright 2022 Smart Talent</li>
              
              </ul>
            </div>
            <a href={"https://github.com/KarinaMendietta/smart_talent.git"} >
                 <img className="github-btn" src="../assets/img/GitHub-logo2.png"></img>
            </a>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="fa fa-angle-up"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;