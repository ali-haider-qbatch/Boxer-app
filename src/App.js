import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Main from "./Component/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
