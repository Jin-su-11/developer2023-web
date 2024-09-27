import React from "react";
import {useNavigate} from "react-router";

const ProjectCardBox = ({ project, type }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/projects/detail/${project.projectId}`);
    }

    // 'ProjectPage' 타입일 때 카드 박스 크기 설정
    const cardStyle = {
        width: type === "ProjectPage" ? "420px" : "300px", // 'ProjectPage'일 때 더 큰 크기
        height: type === "ProjectPage" ? "550px" : "350px",
        border: "1px solid #d1d1d1",
        borderRadius: "8px",
    };

    const imgStyle = {
        height: type === "ProjectPage" ? "300px" : "220px", // 이미지 크기도 type에 따라 다르게 설정
        width: "100%",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
    };

    return (
        <div className="radius-8 margin-bottom-10" style={cardStyle} onClick={handleCardClick}>
            <img className="width100" style={imgStyle} src={project.imageUrl} alt={project.title} />

            <div className="padding-15 flex-direction-column gap-5p">
                <h3 className="text-align-start">{project.title}</h3>

                <div className="display-flex-end gap-5p">
                    <p className="weight-400 color-gray">{project.team} |</p>
                    <p className="text-align-start weight-400 color-gray">{project.members}</p>
                </div>

                <p className="text-align-start margin-top-10 weight-400">{project.description}</p>

                <div className="display-flex justify-end gap-5p margin-top-10 weight-400 font-size-14">
                    <p>{project.like} like</p>
                    <p>{project.view} view</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCardBox;
