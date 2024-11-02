import React from 'react';

const ContactSection = () => {
    return (
      <div
        className="section-bg"
        style={{ backgroundImage: 'url(https://i.ibb.co/9p3Cnk9/slider-2.jpg)' }}
        data-scroll-index="7"
      >
        <div className="overlay pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="left-side-container">
                <div className="contact-info">
                  <h2 className="contact-title">Have Any Questions?</h2>
                  <p>
                   Reach out to us for any questions or inquiries you may have.<br></br> We are here to help you plan and nail successful event. 
                  </p>
                  <ul className="contact-info">
                    <li>
                      <div className="info-right">
                        <h4>+27 65 995 9135</h4>
                      </div>
                    </li>
                    <li>
                      <div className="info-right">
                        <h4>sellommathobe39@gmail.com</h4>
                      </div>
                    </li>
                    <li>
                      <div className="info-right">
                        <h4>Johannesburg, Gauteng</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-side-container">
                <div className="contact-form">
                  {/* Contact Form */}
                  <form id="contact-form" method="POST">
                    <input type="hidden" name="form-name" value="contactForm" />
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="first-name"
                            placeholder="Enter Your Name *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="description"
                            placeholder="Enter Your Message *"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="submit-button">
                        <button >
                         Send Us 
                        </button>
                      </div>
                  </form>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  };

  export default ContactSection;