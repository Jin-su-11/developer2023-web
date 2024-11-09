import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../css/practice.css'

/**
 * 프로젝트 상세 페이지
 * @since 2024.09.22
 * @lastmodified 2024.11.09
 */

const ProjectCardBox = ({ project, type }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false); // 마우스 오버 상태 추가

    const handleCardClick = () => {
        navigate(`/project/detail/${project.projectId}`);
    };

    // 카드 스타일 설정
    const cardStyle = {
        width: type === "ProjectPage" ? "320px" : "300px",
        height: type === "ProjectPage" ? "430px" : "400px",
        borderRadius: "8px",
        background: "white",
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)", // 마우스 오버 시 확대
        cursor: "pointer",
    };

    // 이미지 스타일 설정
    const imgStyle = {
        height: "50%",
        width: "100%",
        borderTopLeftRadius: type === "ProjectPage" ? "8px" : "6px",
        borderTopRightRadius: type === "ProjectPage" ? "8px" : "6px",
    };

    // 시즌 표시 스타일 설정
    const seasonBoxStyle = {
        width: type === "ProjectPage" ? "60px" : "50px",
        height: type === "ProjectPage" ? "16px" : "14px",
        borderRadius: type === "ProjectPage" ? "7px" : "5px",
        paddingTop: type === "ProjectPage" ? "5px" : "3px",
        fontSize: type === "ProjectPage" ? "15px" : "13px",
    };

    return (
        <div
            className="radius-8 margin-bottom-10 project-card"
            style={cardStyle}
            onClick={handleCardClick}
            onMouseEnter={() => setIsHovered(true)} // 마우스 오버 시 상태 변경
            onMouseLeave={() => setIsHovered(false)} // 마우스 아웃 시 상태 변경
        >
            <img className="width100" style={imgStyle} src={project.imageUrl} alt={project.title} />

            <div className="padding-15 flex-direction-column gap-5p">
                <div className="display-flex justify-between">
                    <h3 className="text-align-start">{project.title}</h3>
                    <span className="season-label" style={seasonBoxStyle}>{project.season}</span>
                </div>

                <div className="display-flex-end gap-5p">
                    <p className="weight-400 color-gray">{project.team} |</p>
                    <p className="text-align-start weight-400 color-gray">{project.members}</p>
                </div>

                <p className="text-align-start margin-top-10 weight-400">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCardBox;
