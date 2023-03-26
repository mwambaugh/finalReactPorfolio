import React from "react";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Avatar} from "antd";
import { Card, Col, Row } from 'antd';

const Resume = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Education" bordered={false}>
       Education
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Experience" bordered={false}>
       Experience
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Refrences" bordered={false}>
        Refrences
      </Card>
    </Col>
  </Row>
);
export default Resume;