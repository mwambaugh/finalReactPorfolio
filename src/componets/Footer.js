import React from "react";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Button } from "antd";

function Footer() {
  return (
    <footer>
      <containter class="footer-container">
      <div>
      <Button
        type="text"
        icon={
          <LinkedinFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://www.linkedin.com/in/marta-wambaugh-94892824b/"
      ></Button>,
      <Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://github.com/mwambaugh"
      ></Button>,
      </div>
      </containter>
    </footer>
  );
}

export default Footer;