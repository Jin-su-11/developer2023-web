import React from 'react';
import { useParams } from 'react-router-dom';  // useParams를 가져옵니다.
import AboutContainer from "./AboutContainer";
import About from "../components/About";
import Progress from "../components/Progress";
import AboutAchievement from "./AboutAchievement";

/**
 * AboutPage 컴포넌트
 * @author 김진수
 * @since 2024.11.26
 * @lastmodified 2024.11.01
 */

const DetailPage = () => {
    const { projectId } = useParams(); // 현재 URL에서 projectId를 가져옵니다.
    const projectIdNum = parseInt(projectId);

    return (
        <div>
            <AboutContainer>
                <About />
                <AboutAchievement />
                <Progress />
            </AboutContainer>
        </div>
    );
};

export default DetailPage;