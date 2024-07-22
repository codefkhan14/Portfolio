import React from "react";
import "../styles/Footer.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
function Footer({ cssClass }) {
  return (
    <div className={`top-footer ${cssClass}`}>
      <div className="footer">
        <div className="footer-container">
          <div className="lefty">
            <div className="location">
              <i style={{ fontSize: "20px" }}>
                {" "}
                <MdLocationOn />
              </i>
              <div>
                <p>New Delhi, Delhi</p>
                <p>india - 110067</p>
              </div>
            </div>
            <div className="location">
              <i>
                {" "}
                <BsTelephoneFill />
              </i>
              <div>
                <h4>+91 9571604650</h4>
              </div>
            </div>
            <div className="location">
              <i style={{ fontSize: "20px" }}>
                {" "}
                <MdEmail />
              </i>
              <div>
                <a
                  href="mailto:furkarangrej200@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  work.furkan14@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="righty">
            <h4>About</h4>
            <p>
              I'm an Computer Science Engineering undergrad aspiring to become a
              skilled software developer. I'm an avid learner and always looking
              for oppurtunities to increase my skillset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
