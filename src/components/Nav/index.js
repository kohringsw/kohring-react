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
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#Design"
            onClick={() => setSectionSelected("Design")}
            className={`${sectionSelected === "Design" && "nav-active"}`}
          >
            DESIGN
          </a>
        </li>
        <li>
          <a
            href="#Development"
            onClick={() => setSectionSelected("Development")}
            className={`${sectionSelected === "Development" && "nav-active"}`}
          >
            DEVELOPMENT
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
