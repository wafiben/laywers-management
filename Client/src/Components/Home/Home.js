import React from "react";
import "./Home.css";
import Contact from "../Contact/Contact";

function Home() {

  return (
    <div>
      <div className="about-section">
        <h1 className="About-title">
          <u>ABOUT</u>
        </h1>
        <section className="section">
          Our platform's mission is to facilitate interaction and communication
          between our various lawyers and clients who want to follow up on their
          cases. Our team of lawyers is a perfermant and effective team. If you
          are lawyer you can join us to work with a good team , client can
          easily follow their cases with typing only the number of case
        </section>
      </div>
      <div className="contact-section">
        <h1>
          <u>
            CONTACT
          </u>
        </h1>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
