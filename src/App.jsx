// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error404 from "./pages/Error404";

import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
