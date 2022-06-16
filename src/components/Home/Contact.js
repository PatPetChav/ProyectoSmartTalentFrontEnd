import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import dataset from "./../../assets/data/resumeData.json";
import imageLoader from "./../../assets/img/loader.gif" ;



class Contact extends Component {
  
  render() {
    if (!this.props.data) return null;

    return (
      <section id="contact" >
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Contactenos</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead ">{dataset.main.contactmessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="send.php" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Nombre <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                  
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Título</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Mensaje <span className="required">*</span>
                    </label>
                    <textarea
                 
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div >
                    <button className="contact-btn">Enviar</button>
                    <span id="image-loader">
                      <img alt="" src={imageLoader}/>
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Datos de Contacto:</h4>
                <p className="lead">
                  {dataset.main.name}
                  <br />
                  {dataset.main.address.street} <br />
                  {dataset.main.address.city}, {dataset.main.address.state} 
                  <br />
                  <span>{dataset.main.email}</span>
                </p>
              </div>         
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;