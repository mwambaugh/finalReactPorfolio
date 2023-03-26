import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Navigation from "./Navigation";


function Header() {
  return (
    <header className="text-3xl font-bold underline">
      <Avatar
        // src={<img src={url} alt="avatar" />}
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
        src={
          "https://res.cloudinary.com/docfmlnne/image/upload/v1679764633/IMG_9460_1_xrfkow.jpg"
        }
      />
      <p>Marta Wambaugh</p>
      <Navigation />
    </header>
  );
}

export default Header;
