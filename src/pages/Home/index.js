// Importando react-router
import { Link } from "react-router-dom";
// Importando estilos
import "./../../styles/page/home/default.css"
import "./../../styles/page/home/layout.css"
import "./../../styles/page/home/media-queries.css"

// import { ButtonModal } from "../../components/ButtonModal";
import Header from "./../../components/Home/Header";
import Footer from "./../../components/Home/Footer";
import About from "./../../components/Home/About";
import Contact from "./../../components/Home/Contact";



import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }  

  render(){
    return (
      <>
        <Header />
        <About />
        <Contact data={this.state.resumeData.main} />
        <Footer />        
      </>
    );
  }
}

// const Home = () => {
  
//   return (
//     <>
//       <Header data={this.state.resumeData.main} />
//       <About data={this.state.resumeData.main} />
//       <Contact data={this.state.resumeData.main} />
//       <Footer data={this.state.resumeData.main} />        
//     </>
//   );
// };

export default Home;
