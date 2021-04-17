import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer/MainContainer";
import Wrapper from "./components/Wrapper/Wrapper";
import './components/styles.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
        <MainContainer />
        </Wrapper>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
