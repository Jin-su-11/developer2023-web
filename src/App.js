import React from "react";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import MainHeaderLayout from "./layout/MainHeaderLayout";
import ProjectPage from "./pages/ProjectPage";
import MemberPage from "./pages/MemberPage";
import NotFound from "./components/NotFound";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { ScrollToTop } from "./components/CommonUtil";
import Footer from "./components/Footer";

const AppRoutes = () => {
    const routes = [
        { path: '/', element: <MainPage /> },
        {
            path: '/member',
            element: <MainHeaderLayout />,
            children: [
                {path: '', element: <MemberPage />}
            ]
        },
        {
            path: '/project',
            element: <MainHeaderLayout />,
            children: [
                { path: '', element: <ProjectPage />},
                { path: 'detail/:projectId', element: <ProjectDetailPage /> }
            ]
        },
        { path: '*', element: <NotFound />}
    ];

    return useRoutes(routes);
};

function App() {
  return (
    <Router>
        <ScrollToTop />
        <AppRoutes />
        <Footer />
    </Router>
  );
}

export default App;
