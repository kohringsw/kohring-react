import React from "react";
import githubIcon from "../../assets/images/icons/github.svg";
import instagramIcon from "../../assets/images/icons/instagram.svg";
import linkedinIcon from "../../assets/images/icons/linkedIn.svg";
import emailIcon from "../../assets/images/icons/email.svg";
import twitterIcon from "../../assets/images/icons/twitter.svg";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="footer">
          <a
            className="icon my-3 mx-4"
            href="mailto:kohringsw@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={emailIcon} alt="email icon"></img>
          </a>
          <a
            className="icon my-3 mx-4"
            href="https://github.com/kohringsw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github icon"></img>
          </a>
          <a
            className="icon my-3 mx-4"
            href="https://www.linkedin.com/in/shelby-kohring-3335171b8/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin icon"></img>
          </a>
          <a
            className="icon my-3 mx-4"
            href="https://www.instagram.com/shelbykohring/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="instagram icon"></img>
          </a>
          <a
            className="icon my-3 mx-4"
            href="https://www.twitter.com/shelbykohring/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="twitter icon"></img>
          </a>
        </div>
        <div className="bg-none row justify-content-center text-dark mt-3">
          <p>created by Shelby Kohring, © 2021</p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
