import React from "react";

function Nav(props) {
  const { sectionSelected, setSectionSelected } = props;

  return (
    <nav>
      <ul>
        <li>
          <a
            href="#About"
            onClick={() => setSectionSelected("About")}
            className={`${sectionSelected === "About" && "nav-active"}`}
          >
            ABOUT ME
          </a>
        </li>
        <li>
          <a
            href="#Project"
            onClick={() => setSectionSelected("Project")}
            className={`${sectionSelected === "Project" && "nav-active"}`}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            onClick={() => setSectionSelected("Contact")}
            className={`${sectionSelected === "Contact" && "nav-active"}`}
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            href="#Resume"
            onClick={() => setSectionSelected("Resume")}
            className={`${sectionSelected === "Resume" && "nav-active"}`}
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
