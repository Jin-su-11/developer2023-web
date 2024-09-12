import React from "react";
import Header from "./components/Header"
import MainBanner from "./components/MainBanner";
import Project from "./components/Project";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainBanner />
        <MainContainer>
            <Project />
        </MainContainer>
    </div>
  );
}

export default App;
