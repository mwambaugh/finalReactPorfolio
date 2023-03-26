import React, { useState } from "react";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Footer from "./componets/Footer";
import Page from "./componets/Page";
import Header from "./componets/Header";
import AboutMe from "./componets/AboutMeCard";
import Navigation from "./componets/Navigation";
import ContactCard from "./componets/ContactCard";

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <AboutMe/>
      <ContactCard/>
      <Footer/>
    </div>
  )
}
// function App() {
//   const [Page] = useState([
//     { name: "About Me" },
//     { name: "Portfolio" },
//     { name: "Contact" },
//     { name: "Resume" },
//   ]);
  

//   const [currentPage, setCurrentPage] = useState(Page[0]);
//   const [pageSelected, setPageSelected] = useState(false);

//   return (
//     <div>
//       <Navigation
//         page={Page}
//         setCurrentPage={setCurrentPage}
//         currentPage={currentPage}
//         pageSelected={pageSelected}
//         setPageSelected={setPageSelected}
//       />
//       <section className="hero">
//         <div className="hero-name">
//           <p>Marta Wambaugh</p>
//         </div>
//       </section>
//       <main>
//         <Page currentPage={currentPage} />
//       </main>
//       <Footer />
//     </div>
//   );
// }

export default App;