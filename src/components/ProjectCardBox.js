import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../css/practice.css'

/**
 * 프로젝트 상세 페이지
 * @since 2024.09.22
 * @lastmodified 2024.11.09
 */

const ProjectCardBox = ({ project, type, moveEvent,moveEventReverse,index }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false); // 마우스 오버 상태 추가

    const handleCardClick = () => {
        navigate(`/project/detail/${project.projectId}`);
    };

    const cardStyle = {
        width: type === "ProjectPage" ? "320px" : "MainPage" ? "300px" : "210px",
        height: type === "ProjectPage" ? "430px" : "MainPage" ? "400px" : "250px",
        borderRadius: "8px",
        background: "white",
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)", // 마우스 오버 시 확대
        cursor: "pointer",
    };

    const imgStyle = {
        height: "50%",
        width: "100%",
        borderTopLeftRadius: type === "ProjectPage" ? "8px" : "6px",
        borderTopRightRadius: type === "ProjectPage" ? "8px" : "6px",
    };

    // 시즌 표시 스타일 설정
    const seasonBoxStyle = {
        width: type === "ProjectPage" ? "60px" : "50px",
        // height: type === "ProjectPage" ? "16px" : "14px",
        borderRadius: type === "ProjectPage" ? "7px" : "5px",
        // paddingTop: type === "ProjectPage" ? "5px" : "3px",
        fontSize: type === "ProjectPage" ? "14px" : "13px",
        marginBottom: type === "ProjectPage" ? "5px" : "3px",
    };

    // const titleStyle = {
    //     fontSize: type === "DetailPage" ? "16px" : "18px",
    // }
    //
    // const teamStyle = {
    //     fontSize: type === "DetailPage" ? "14px" : "16px",
    // }

    const descriptionStyle = {
        overflow: 'hidden',  		// 을 사용해 영역을 감출 것
        textOverflow: 'ellipsis',  	// 로 ... 을 만들기
        wordBreak:'break-all',
        width: '100%',
        height: type === "DetailPage" ? "67px" : "75px",
        display: '-webkit-box',
        WebkitLineClamp:'4',
        WebkitBoxOrient:'vertical',
        fontSize: type === "DetailPage" ? "14px" : "16px",
    }

    return (
        <div
            className={`radius-8 project-card box box${index} ${moveEvent?`effect${index}`:""} ${moveEventReverse?`effectReverse${index}`:""}`}
            onClick={handleCardClick}
            onMouseEnter={() => setIsHovered(true)} // 마우스 오버 시 상태 변경
            onMouseLeave={() => setIsHovered(false)} // 마우스 아웃 시 상태 변경
            style={cardStyle}
        >
            <div className="flex flex-col gap-0" style={{display:"flex",flexDirection:"column"}}>
                <img className="width100" style={imgStyle} src={project.imageUrl} alt={project.title}/>

                <div className="padding-15 flex-direction-column gap-5p" style={{background:"#FFF",height:"180px",borderRadius:"0px 0px 8px 8px"}}>
                    <div className="display-flex justify-between padding-bottom-2">
                        <h3 className="text-align-start padding-top-5">{project.title}</h3>
                        <span className="season-label" style={seasonBoxStyle}>{project.season}</span>
                    </div>

                    <div className="display-flex-end gap-5p">
                        <p className="weight-400 color-gray">{project.team} |</p>
                        <p className="text-align-start weight-400 color-gray">{project.members}</p>
                    </div>

                    <p className="text-align-start margin-top-10 weight-400" style={descriptionStyle}>{project.description}{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardBox;
