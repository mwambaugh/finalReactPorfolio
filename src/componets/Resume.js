import React from "react";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Avatar} from "antd";
import { Card, Col, Row } from 'antd';

const Resume = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Education" bordered={false}>
        <ul>
          <li>University of Washington Full Stack Website Development</li>
          <li>Western Washington University: Woodring College of Education</li>
          <ul>Bachlor Preschool-12th Grade Art Education</ul>
          <li>South Seattle College</li>
          <ul>Career and Technical Education Courses</ul>
          <li>Whatcom College</li>
          <ul>Associates Degree</ul>
          <li>Shoreline College</li>
          <li>Bishop Blanchet High School</li>
        </ul>
        
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Experience" bordered={false}>
       <ul>
          <li>Seattle Public Schools Teacher:2016-2022 </li>
          <ul>High School Photography, Ceramics, Independent Living, Family Health </ul>
          <ul>Grade 6/7/8 Art Education</ul>
          <ul>Building Leadership Team</ul>
          <ul>Cross-Country Coach</ul>
          <li>Minor Avenue Children's House: 2015</li>
          <li>Chinook's at Salmon Bay: 2015</li>
          <li>Havelock North High School, New Zealand: 2014</li>
          <li>Label's Consignment: 2011-2014</li>

          
      </ul>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Refrences" bordered={false}>
        <li>Mrs. Anne Erickson</li>
        <ul>206 953 1104</ul>
        <li>Ms. Nancy Wilder</li>
        <ul>206 890 6180</ul>
        <ul>nancywilder@yahoo.com</ul>
        <li>Mr. Tyler Wilson</li>
        <ul>206 484 9854</ul>
        <ul>tgidwilson@gmail.com</ul>
      </Card>
    </Col>
  </Row>
);
export default Resume;