import React, { useState } from "react";
import AboutMeCard from "./AboutMeCard";
import ContactMe from "./ContactCard";
import Project from "./Project";
import Resume from "./Resume";
// import DownloadResume from "./DownloadResume"



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

      case "Resume":
        return <Resume/>;

        // case "downloadResume":
        // return <DownloadResume />;

      default:
        return <AboutMeCard />;
    }
  };

  const renderPageChange = (page) => setCurrentPage(page);
  return (
    <div >
      <div >
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
              href="#Project"
              onClick={() => renderPageChange("Project")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              Project
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

          <ul className="nav-item">
            <a
              href="#Resume"
              onClick={() => renderPageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </ul>

          {/* <ul className="nav-item">
            <a
              href="#DownloadResume"
              onClick={() => renderPageChange("DownloadResume")}
              className={
                currentPage === "DownloadResume" ? "nav-link active" : "nav-link"
              }
            >
              Download Resume
            </a>
          </ul> */}

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