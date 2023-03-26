import React from "react";
import { GithubFilled} from "@ant-design/icons";
import { Button, Carousel, Card} from "antd";

const contentStyle = {
  margin: 0,
  height: '10px',
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
        Group Project API Study{
      <img
        alt="Project 1 API Study"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679846120/Project1_djm9kx.png"
      />},
     Click the icon to visit the Github Repository{<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh/collaborativeAPIstudy"
      ></Button>}
      </div>


      <div>
        <h3 style={contentStyle}></h3>
        HTML Student Portfolio{
      <img
        alt="Student Portfolio"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679846121/StudentPortfolio_ltrxme.png"
      />},
      Click the icon to visit the Github Repository{<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh/student-portfolio"
      ></Button>}
      </div>


      <div>
        <h3 style={contentStyle}></h3>
        Workday Scheduler {
      <img
        alt="Workday Scheduler"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679846121/WorkdayScheduler_wmm0ee.png"
      />},
      Click the icon to visit the Github Repository{<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh/workdayscheduler"
      ></Button>}
      </div>


      <div>
        <h3 style={contentStyle}></h3>
        Weather Dashboard {
      <img
        alt="Weather Dashboard"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679846121/WeatherDashboard_ddc3zh.jpg"
      />},
      Click the icon to visit the Github Repository{<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh/ServerSideAPIWeatherDashboard"
      ></Button>}
      </div>

      <div>
        <h3 style={contentStyle}></h3>
        Note Taker {
      <img
        alt="Note Taker"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679846120/Notetaker2_gcmmab.jpg"
      />},
      Click the icon to visit the Github Repository{<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh/expressNoteTrackerHomework"
      ></Button>}
      </div>

      <div>
        <h3 style={contentStyle}></h3>
        Tech Blog {
      <img
        alt="Blog"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679846120/ModelViewController_youiea.jpg"
      />},
      Click the icon to visit the Github Repository{<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "20px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh/ModelViewControllerTechBlog"
      ></Button>}
      </div>

      <div>
        <h3 style={contentStyle}></h3>
        Password Generator {
      <img
        alt="Password Generator"
        src="https://res.cloudinary.com/docfmlnne/image/upload/v1679846120/PasswordGenerator_tgczyc.png"
      />},
      Click the icon to visit the Github Repository{<Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#black", fontSize: "50px" }}
            key="link"/>
        }
        href="https://github.com/mwambaugh/Password-Generator"
      ></Button>}
      </div>

    </Carousel>
);
};

export default Project;