import React from "react";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";


const { Meta } = Card;

const AboutMeCard = () => (
  <Card
    hoverable={true}
    style={{ width: 500, display: "flex", flexDirection: "column" }}
    cover={
      <img
        alt=""
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679764337/laptopPJs_nx3ay0.jpg"
      />
    }
    actions={[
      <Button
        type="text"
        icon={
          <LinkedinFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://www.linkedin.com/in/marta-wambaugh-94892824b/"
      ></Button>,
      <Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://github.com/mwambaugh"
      ></Button>,
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://res.cloudinary.com/docfmlnne/image/upload/v1679764633/IMG_9460_1_xrfkow.jpg" />
      }
      title="About Marta"
      description="Marta Wambaugh is a junior full stack web developer based out of Seattle, WA and Washington, D.C. Marta is a talented painter and photographer. She enjoys consulting and developing polished UI and excells at project managment. Marta's years of experience in Visual Art and Health education are evident in her organized, efficent, and compassionate leadership. "
    />
  </Card>
);

export default AboutMeCard;