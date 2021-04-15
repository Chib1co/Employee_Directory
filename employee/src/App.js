import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer";
import './components/styles.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContainer />
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
