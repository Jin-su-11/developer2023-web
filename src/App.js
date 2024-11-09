import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import MainHeaderLayout from "./layout/MainHeaderLayout";
import ProjectPage from "./pages/ProjectPage";
import MemberPage from "./pages/MemberPage";
import NotFound from "./components/NotFound";
import ProjectDetailPage from "./detailpages/ProjectDetailPage";
import { ScrollToTop } from "./components/CommonUtil";
import Footer from "./components/Footer";
import ContactWidget from "./components/ContactWidget";
import JoinWidget from "./components/JoinWidget";
import Header from "./components/Header";

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
        { path: '*', element: <NotFound /> }
    ];

    return useRoutes(routes);
};

function App() {
    const [isJoinPopupVisible, setIsJoinPopupVisible] = useState(false);

    // "가입하러 가기" 버튼을 클릭하면 JoinWidget을 열기
    const handleJoinClick = () => {
        setIsJoinPopupVisible(true);
    };

    // JoinWidget을 닫기 위한 함수
    const handleCloseJoinPopup = () => {
        setIsJoinPopupVisible(false);
    };

    return (
        <Router>
            <ScrollToTop />
            <Header onJoinClick={handleJoinClick} /> {/* onJoinClick 전달 */}
            <AppRoutes />
            <Footer />
            <ContactWidget />  {/* ContactWidget 상시 표시 */}

            {/* JoinWidget은 필요할 때만 중앙에 표시 */}
            {isJoinPopupVisible && (
                <div style={styles.overlay}>
                    <JoinWidget onClose={handleCloseJoinPopup} />
                </div>
            )}
        </Router>
    );
}

// 중앙에 JoinWidget을 표시하기 위한 오버레이 스타일
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
        zIndex: 1000, // 다른 요소 위에 표시
    },
};

export default App;
