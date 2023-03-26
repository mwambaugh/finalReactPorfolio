import React from "react";
import Octocat from "../assets/Photos/octocat-icon.svg";
import LinkedIn from "../assets/Photos/linkedin-icon.svg";

function Footer() {
  return (
    <footer>
      <containter class="footer-container">
      <div>
        <ul id="octo">
            <a
              href="https://github.com/mwambaugh"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Octocat}
                alt={"Clickable GitHub icon that opens my GitHub profile."}
                width="62px"
              />
            </a>
            </ul>
          <ul id="linked">
            <a
              href="https://www.linkedin.com/in/marta-wambaugh-94892824b/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedIn}
                alt={"Clickable LinkedIn icon that opens my LinkedIn profile."}
                width="52px"
              />
            </a>
        </ul>
      </div>
      </containter>
    </footer>
  );
}

export default Footer;