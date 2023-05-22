import React from "react";
import "./ProjectPanelStyle.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
function ProjectPanel() {
  return (
    <>
      <div className="project-panel">
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
            <h3>Bandhej Hub - An Ecommerce Website </h3>
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
        </div>

        <div className="pro-project-panel">
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
              <a href="/">
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
        </div>

       
      </div>
    </>
  );
}

export default ProjectPanel;
