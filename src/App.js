import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import MainHeaderLayout from "./layout/MainHeaderLayout";
import ProjectPage from "./pages/ProjectPage";
import MemberPage from "./pages/MemberPage";
import NotFound from "./components/NotFound";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { ScrollToTop } from "./components/CommonUtil";
import Footer from "./components/Footer";
import ContactWidget from "./components/ContactWidget";  // ContactWidget 추가
import JoinPage from "./pages/JoinPage";  // JoinPage 추가

const AppRoutes = () => {
    const routes = [
        { path: '/', element: <MainPage /> },
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
                { path: 'detail/:projectId', element: <ProjectDetailPage /> }
            ]
        },

        {
            path: '/Join',
            element: <MainHeaderLayout />,
            children: [
                { path: '', element: <JoinPage /> },
                { path: 'detail/:JoinPage', element: <JoinPage /> }
            ]
        },

        { path: '*', element: <NotFound /> }
    ];

    return useRoutes(routes);
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppRoutes />
            <Footer />       {/* 모든 페이지에 Footer */}
            <ContactWidget /> {/* 모든 페이지에 ContactWidget 추가 */}
        </Router>
    );
}

export default App;
