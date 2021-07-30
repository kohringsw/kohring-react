import React, { useState } from "react";

function Resume() {
  return (
    <section className="d-flex justify-content-center font-weight-light">
      <div className="m-5 col-10">
        <h1 className="projects font-weight-light d-flex justify-content-center mt-4 mb-3">
          SHELBY KOHRING
        </h1>
        <p className="text-center mb-4">
          Phone:{" "}
          <a href="tel: 6154266948" target="_blank" rel="noreferrer">
            615.426.6948
          </a>{" "}
          | Email:{" "}
          <a
            href="mailto: kohringsw@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            kohringsw@gmail.com
          </a>{" "}
          | Bethpage, TN 37022
          <br></br>
          Portfolio:{" "}
          <a href="www.shelbykohring.com" target="_blank" rel="noreferrer">
            shelbykohring.com
          </a>{" "}
          | GitHub:{" "}
          <a
            href="http://github.com/shelbykohring"
            target="_blank"
            rel="noreferrer"
          >
            /shelbykohring
          </a>{" "}
          | LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/shelbykohring"
            target="_blank"
            rel="noreferrer"
          >
            /shelbykohring
          </a>
        </p>
        <p className="mb-4">
          Graphic designer and web developer with years of professional
          experience in relational team-building, communications, public
          speaking and presentations, seeking to integrate past work with newly
          acquired skills to help businesses and organizations better represent
          themselves online with high quality user interface to engage and
          captivate users of all kinds.
        </p>
        <h5 className="font-weight-light">TECHNICAL SKILLS</h5>
        <p className="mb-4">
          <b className="font-weight-bold">Graphic Design</b> | Adobe Creative
          Suite, Photoshop and Illustrator; digital and print <br></br>
          <b className="font-weight-bold">Languages</b> | HTML5, CSS3,
          JavaScript ES6+ <br></br>
          <b className="font-weight-bold">Applications</b> | GitHub, MongoDB,
          MySQL <br></br>
          <b className="font-weight-bold">Tools</b> | Express, React, Node,
          Bootstrap, Tailwind CSS, Query, jQuery
        </p>
        <h5 className="font-weight-light">PROJECTS</h5>
        <p className="mb-4">
          <b className="font-weight-bold font-italic">HIKE NOW</b> | Hiking app
          to search for the best trails in every state <br></br>
          GitHub |{" "}
          <a
            href="http://github.com/shelbykohring/hike-now"
            target="_blank"
            rel="noreferrer"
          >
            http://github.com/shelbykohring/hike-now
          </a>{" "}
          <br></br>
          Deployment |{" "}
          <a
            href="https://shelbykohring.github.io/hike-now"
            target="_blank"
            rel="noreferrer"
          >
            https://shelbykohring.github.io/hike-now
          </a>{" "}
          <br></br>
          Tools | HTML5, TailwindCSS, JavaScript, Hiking Project API <br></br>
          Role | Project manager/UI design and development <br></br>
        </p>
        <p className="mb-4">
          <b className="font-weight-bold font-italic">SIMPLY PLAN IT</b> |
          Planning app to simplify your daily to-do list <br></br>
          GitHub |{" "}
          <a
            href="http://github.com/shelbykohring/simply-plan-it"
            target="_blank"
            rel="noreferrer"
          >
            http://github.com/shelbykohring/simply-plan-it
          </a>{" "}
          <br></br>
          Deployment |{" "}
          <a
            href="https://shelbykohring.github.io/simply-plan-it"
            target="_blank"
            rel="noreferrer"
          >
            https://shelbykohring.github.io/simply-plan-it
          </a>{" "}
          <br></br>
          Tools | HTML5, CSS3, Bootstrap, jQuery, Moment.js <br></br>
          Role | Sole Author <br></br>
        </p>
        <p className="mb-4">
          <b className="font-weight-bold font-italic">WEATHER DASHBOARD</b> |
          Weather app to search and save the weather reports you need <br></br>
          GitHub |{" "}
          <a
            href="http://github.com/shelbykohring/weather-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            http://github.com/shelbykohring/weather-dashboard
          </a>{" "}
          <br></br>
          Deployment |{" "}
          <a
            href="https://shelbykohring.github.io/weather-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            https://shelbykohring.github.io/weather-dashboard
          </a>{" "}
          <br></br>
          Tools | HTML5, CSS3, Bootstrap, jQuery, Moment.js, Open Weather API{" "}
          <br></br>
          Role | Sole Author <br></br>
        </p>
        <h5 className="font-weight-light">PROFESSIONAL EXPERIENCE</h5>
        <p className="mb-4">
          <b className="font-weight-bold font-italic">IMPACT BOARD</b> |
          2012-Present, Lipscomb University<br></br>• Director of graphics and
          design, as well as set and stage design, managing teams of 15-20
          college students who implement the envisioned plans <br></br>•
          Designing and incorporating graphics for our program theme and
          presentation <br></br>
        </p>
        <p className="mb-4">
          <b className="font-weight-bold font-italic">JOVENES EN CAMINO</b> |
          2019-Present <br></br>• Investing in the purpose of a non-profit in
          Honduras, designing as a volunteer to provide graphics for their
          website, email and print distribution, conveying their global impact
        </p>
        <p className="mb-4">
          <b className="font-weight-bold font-italic">STUDENT MINISTRY</b> |
          2008–2021, McMinnville, TN; Huntsville, AL; Hendersonville, TN{" "}
          <br></br>• Developing a professional skill set in relational
          team-building, communications, public speaking and presentations, and
          graphic design, while focusing on the community of our 6th–12th
          graders
        </p>
        <h5 className="font-weight-light">EDUCATION</h5>
        <p className="mb-5">
          <b className="font-weight-bold font-italic">VANDERBILT UNIVERSITY</b>{" "}
          | 2020–21, Coding Bootcamp Certificate in Full Stack Web Development
          <br></br>
          <b className="font-weight-bold font-italic">
            LIPSCOMB UNIVERSITY
          </b>{" "}
          | 2003–07, Bachelor of Arts in Student Ministry
        </p>
      </div>
    </section>
  );
}

export default Resume;
