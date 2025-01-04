import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import MainHeaderLayout from "./layout/MainHeaderLayout";
import ProjectPage from "./pages/ProjectPage";
import MemberPage from "./pages/MemberPage";
import NotFound from "./components/NotFound";
import DetailPage from "./detailpages/DetailPage";
import { ScrollToTop } from "./components/CommonUtil";
import Footer from "./components/Footer";
import ContactWidget from "./components/ContactWidget";
import JoinWidget from "./components/JoinWidget";
import Header from "./components/Header";
import AboutPage from "./pages/aboutpage/AboutPage";

const AppRoutes = () => {
    const routes = [
        { path: '/', element: <MainPage /> },
        {
            path: '/about',
            element: <AboutPage />,
            children: [
                { path: '/about', element: <AboutPage /> },
            ]
        },
        {
            path: '/member',
            element: <MainHeaderLayout />,
            children: [
                { path: '', element: <MemberPage /> }
            ]
        },
        {
            path: '/project',
            element: <MainHeaderLayout />,
            children: [
                { path: '', element: <ProjectPage /> },
                { path: 'detail/:projectId', element: <DetailPage /> }
            ]
        },



        { path: '*', element: <NotFound /> }
    ];

    return useRoutes(routes);
};

function App() {
    const [isJoinPopupVisible, setIsJoinPopupVisible] = useState(false);

    const handleJoinClick = () => {
        setIsJoinPopupVisible(true);
    };


    const handleCloseJoinPopup = () => {
        setIsJoinPopupVisible(false);
    };

    return (
        <Router>
            <ScrollToTop />
            <Header onJoinClick={handleJoinClick} />
            <AppRoutes />
            <ContactWidget />
            <div className="padding-top-180">
                <Footer />
            </div>


            {isJoinPopupVisible && (
                <div style={styles.overlay}>
                    <JoinWidget onClose={handleCloseJoinPopup} />
                </div>
            )}
        </Router>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
};

export default App;
