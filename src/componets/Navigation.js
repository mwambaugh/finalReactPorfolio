import React, { useState } from "react";
import AboutMeCard from "./AboutMeCard";
import ContactMe from "./ContactCard";
import Project from "./Project";



function Navigation() {
  const [currentPage, setCurrentPage] = useState("AboutMeCard");

  const render = () => {
    switch (currentPage) {
      case "AboutMeCard":
        return <AboutMeCard/>;

      case "Project":
        return <Project />;

      case "ContactMe":
        return <ContactMe/>;

      default:
        return <AboutMeCard />;
    }
  };

  const renderPageChange = (page) => setCurrentPage(page);
  //   const pages = ["AboutMe", "Portfolio"];
  return (
    <div>
      <div>
        <ul className="nav nav-tabs">
          <ul className="nav-item">
            <a
              href="#AboutMeCard"
              onClick={() => renderPageChange("AboutMeCard")}
              className={
                currentPage === "AboutMeCard" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </ul>
          <ul className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => renderPageChange("Portfolio")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </ul>
          <ul className="nav-item">
            <a
              href="#ContactMe"
              onClick={() => renderPageChange("ContactMe")}
              className={
                currentPage === "ContactMe" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </a>
          </ul>
        </ul>
      </div>
      <main>
        <div className="myCard">
          <div>{render(currentPage)}</div>
        </div>
      </main>
    </div>
  );
}

export default Navigation;