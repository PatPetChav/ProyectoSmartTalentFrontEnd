import dataset from "./../../assets/data/resumeData.json";
import Fade from "react-reveal";
import githubProject from "./../../assets/img/GitHub-logo2.png";

  const Footer = () => {
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
                 <img className="github-btn" src={githubProject} alt="github proyecto"></img>
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

export default Footer;