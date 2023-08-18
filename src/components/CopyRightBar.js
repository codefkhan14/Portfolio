import React from "react";
import "./CopyRightBarStyle.css";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
function CopyRightBar({cssClass}) {
  return (
    <>
      <section className={`copyrightandicon ${cssClass}`}>
        <div className="copyright">copyright © 2023 | @codefkhan Portfolio</div>

        <div className="baricons">
          <li>
            <a href="https://www.linkedin.com/in/mohammed-furkan14/"  target="_blank" rel="noreferrer">
              <GrLinkedinOption />
            </a>
          </li>
          <li>
            <a href="https://github.com/codefkhan14" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/furkan.14_"  target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/smarty.fk.925"  target="_blank" rel="noreferrer">
              <GrFacebookOption />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/fkfurkan14"  target="_blank" rel="noreferrer">
              <AiOutlineTwitter />
            </a>
          </li>
        </div>
      </section>
    </>
  );
}

export default CopyRightBar;
