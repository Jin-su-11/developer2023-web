import React from 'react';
import { useParams } from 'react-router-dom';  // useParams를 가져옵니다.
import ProjectDetailPage from "../detailpages/ProjectDetailPage";
import DetailContainer from "../detailpages/DetailContainer";
import ProjectIntroduce from "../detailpages/ProjectIntroduce";
import ProjectReview from "../detailpages/ProjectReview";
import OtherProjects from "./OtherProjects";

/**
 * DetailPage 컴포넌트
 * @author 김진수
 * @since 2024.10.31
 * @lastmodified 2024.11.01
 */

const DetailPage = () => {
    const { projectId } = useParams(); // 현재 URL에서 projectId를 가져옵니다.
    const projectIdNum = parseInt(projectId);

    return (
        <div>
            <DetailContainer>
                <ProjectDetailPage />
                <ProjectIntroduce />
                <ProjectReview projectId={projectIdNum} />  {/* projectId를 전달합니다 */}
                <OtherProjects />
            </DetailContainer>
        </div>
    );
};

export default DetailPage;
