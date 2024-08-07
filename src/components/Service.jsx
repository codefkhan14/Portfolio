import React from "react";
import "../styles/Service.css";

function Service({ cssClass }) {
  return (
    <>
      <div className={`service ${cssClass}`}>
        <h2>Services Offer</h2>
        <p>
          Is give may shall likeness made yielding spirit a itself togeth
          created after sea
        </p>
        <div className="service-item">
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s1.png"
              alt=""
            />
            <div className="service-detail">
              <h3>Web Development</h3>
              <p>
                We'll work with you to create a website that meets your unique
                needs and goals.
              </p>
            </div>
          </div>
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s2.png"
              alt=""
            />
            <div className="service-detail">
              <h3>UI/UX Design</h3>
              <p>
                We'll craft intuitive, visually stunning interfaces that
                captivate your audience and drive results.
              </p>
            </div>
          </div>
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s3.png"
              alt=""
            />
            <div className="service-detail">
              <h3>SEO</h3>
              <p>
                Boost your online visibility and drive more traffic to your
                website with our SEO services.
              </p>
            </div>
          </div>
          <div className="service-item1">
            <img
              src="https://themewagon.github.io/satner/img/services/s4.png"
              alt=""
            />
            <div className="service-detail">
              <h3>E-commerce</h3>
              <p>
                Take your online store to the next level with our e-commerce
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
