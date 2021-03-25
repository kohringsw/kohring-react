import React, { useState } from "react";
import resumeImg from "../../assets/images/shelby-kohring-resume.jpg";

function Resume() {
  return (
    <div>
      <a
        href="https://www.shelbykohring.com/assets/images/pdf/shelby-kohring-r%C3%A9sum%C3%A9.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <img src={resumeImg} alt="Shelby Kohring's resume" title="click to download resume" className="w-100"/>
      </a>
    </div>
  );
}

export default Resume;
