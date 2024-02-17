import React from "react";
import "../styles/ProjectPanel.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Inter from "../inter.png";
import Portfolio from "../portfolio.png";
import bandhejhub from "../bandhejhub.png";
function ProjectPanel({ cssClass }) {
  return (
    <>
      <div className={`project-panel ${cssClass}`}>
        <h2>Our Projects</h2>
        <p className="project-p">
          Here are some of my projects. These projects showcase my work and
          skills that i've tried to put to use in real world applications. These
          projects help me learn and grow as a developer.
        </p>
        <div className="projects-list">
          <div className="card">
            <img src={Inter} className="card-img-top" alt="Loading..." />
            <div className={`card-body ${cssClass}`}>
              <h5 className="card-title">Inter</h5>
              <p className="card-text">
                Inter is a club, it's a vibrant community where technology
                enthusiasts come together.
              </p>
              <div className="project-btn">
                <a
                  href="https://github.com/codefkhan14/Inter-Club"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://interccslub.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={bandhejhub} className="card-img-top" alt="Loading..." />
            <div className={`card-body ${cssClass}`}>
              <h5 className="card-title">Bandhej Hub</h5>
              <p className="card-text">
                Bandhej Hub" is an ecommerce platform specializing in bandhani
                products
              </p>
              <div className="project-btn">
                <a href="#" className="btn btn-primary">
                  Github
                </a>
                <a href="#" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Portfolio} className="card-img-top" alt="Loading..." />
            <div className={`card-body ${cssClass}`}>
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">
                A Portfolio website, where i have presented myself and showcase
                my skills projects and more.
              </p>
              <div className="project-btn">
                <a
                  href="https://github.com/codefkhan14/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://codefkhan14.github.io/Portfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://global.discourse-cdn.com/standard17/uploads/threejs/optimized/3X/a/a/aa87ec7839bcddc55ffeed0fe454ac1d9c8f6ba4_2_1035x646.jpeg"
              className="card-img-top"
              alt="Loading..."
            />
            <div className={`card-body ${cssClass}`}>
              <h5 className="card-title">Bandhej Hub</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="project-btn">
                <a href="#" className="btn btn-primary">
                  Github
                </a>
                <a href="#" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`project-panel ${cssClass}`}>
        <h2 style={{ textAlign: "center" }}>Our Project</h2>
        <p style={{ textAlign: "center" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
          asperiores.
        </p>

        <div className="pro-project-panel">
          <div className="project-panel-imgg">
            <img
              src="https://themewagon.github.io/satner/img/banner/home-right.png"
              alt=""
              className="project-panel-img"
            />
          </div>
          <div className="project-panel-detail">
            {/* <span>prjecffj1</span> */}
      {/* <h3>Bandhej Hub - An Ecommerce Website </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              vitae, voluptate asperiores odio quasi obcaecati sed, maxime
              tempora voluptatibus facilis deleniti ipsum laboriosam illo quis
              quae. Autem eaque similique officiis?
            </p>
            <div className="project-panel-icons">
             
              <a href="https://github.com/codefkhan14" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://codefkhan14.github.io/Bandhej-Hub---A-Collection-Of-Bandhani-Items/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div> */}

      {/* <div className="pro-project-panel">
          <div className="project-panel-detail">
            <h3>Personal Portfolio Website </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              vitae, voluptate asperiores odio quasi obcaecati sed, maxime
              tempora voluptatibus facilis deleniti ipsum laboriosam illo quis
              quae. Autem eaque similique officiis?
            </p>
            <div className="project-panel-icons">
             
              <a href="https://github.com/codefkhan14" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://codefkhan14.github.io/Portfolio/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="project-panel-imgg">
            <img
              src="https://themewagon.github.io/satner/img/banner/home-right.png"
              alt=""
              className="project-panel-img"
            />
          </div>
        </div>

        <div className="pro-project-panel">
          <div className="project-panel-imgg">
            <img
              src="https://themewagon.github.io/satner/img/banner/home-right.png"
              alt=""
              className="project-panel-img"
            />
          </div>
          <div className="project-panel-detail">
            <h3>To-Do List </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              vitae, voluptate asperiores odio quasi obcaecati sed, maxime
              tempora voluptatibus facilis deleniti ipsum laboriosam illo quis
              quae. Autem eaque similique officiis?
            </p>
            <div className="project-panel-icons">
           
              <a href="https://github.com/codefkhan14" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://codefkhan14.github.io/To-Do-List/" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div> */}

      {/* </div> */}
    </>
  );
}

export default ProjectPanel;
