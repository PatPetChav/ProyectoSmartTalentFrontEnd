import dataset from "./../../assets/data/resumeData.json";
import Fade from "react-reveal";

const Header = () => {
  return (
    <header id="home" className="baner-inicio">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current ">
            <a className="smoothscroll " href="#home">
              Inicio
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              Nosotros
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Smart Talent
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contactatenos
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner ">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{dataset.main.name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{dataset.main.description}.</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href={"/cards-home"} className="button btn postula-btn">
                <i className="fa fa-book"></i>Postulantes
              </a>
              <a
                href={"/sign-in"}
                target="_self"
                className="button btn empresa-btn"
              >
                <i className="fa fa-check-circle"></i>Empresas
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="fa fa-angle-down"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
