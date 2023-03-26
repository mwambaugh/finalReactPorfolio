// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./index.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
// const { Header, Content, Footer, Sider } = Layout;
// import { Layout, Menu, theme } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


function App() {
  return (
<layout>
<header><Header/></header>
<layout>
<content></content>
</layout>
<footer><Footer/></footer>
</layout>
  );
}

export default App;