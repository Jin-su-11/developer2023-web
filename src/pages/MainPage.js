import React from 'react';
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import MainContainer from "../components/MainContainer";
import Project from "../components/Project";

const MainPage = () => {
    return (
        <div>
            <Header />
            <MainBanner />
            <MainContainer>
                <Project />
            </MainContainer>
        </div>
    );
};

export default MainPage;