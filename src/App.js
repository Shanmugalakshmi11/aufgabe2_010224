// App.js
import React from "react";
import Image from "./features/Gallery";
import NewDesign from "./features/NewDesign";
import ProfileInformation from "./features/ProfileInformation";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Main App Component</h1>
      <Image />
      <NewDesign />
      <ProfileInformation />
    </div>
  );
}

export default App;
