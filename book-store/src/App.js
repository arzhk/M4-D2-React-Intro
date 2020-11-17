import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import LatestReleases from "./components/LatestReleases";
import MyContent from "./components/Content";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <LatestReleases />
      <MyContent />
      <MyFooter />
    </>
  );
}

export default App;
