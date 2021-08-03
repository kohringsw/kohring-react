import React from "react";
import Nav from "../Nav";
import skDesignsLogo from "../../assets/images/SK-Designs.png";

function Header(props) {
  const { sectionSelected, setSectionSelected } = props;

  return (
    <header className="header-box">
      <div>
        <img src={skDesignsLogo} className="logo m-4" alt="SK Designs Logo" />
      </div>
      <Nav
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      />
    </header>
  );
}

export default Header;
