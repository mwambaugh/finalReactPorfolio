import React from "react";
import { GithubFilled} from "@ant-design/icons";
import { Button, Carousel} from "antd";

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



const Project = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    // <Carousel afterChange={onChange}>
      <Carousel autoplay>
      <div>
        <h3 style={contentStyle}></h3>
        cover={
      <img
        alt="example"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679596642/yellowTable_sobxtf.jpg"
      />},
      actions={<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh"
      ></Button>}
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      <div>
        <h3 style={contentStyle}>5</h3>
      </div>
      <div>
        <h3 style={contentStyle}>6</h3>
      </div>

    </Carousel>
);
};

export default Project;