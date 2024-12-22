import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../css/practice.css'

/**
 * 프로젝트 상세 페이지
 * @since 2024.09.22
 * @lastmodified 2024.11.09
 */

const ProjectCardBox = ({ project, type,moveEvent,moveEventReverse,index }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false); // 마우스 오버 상태 추가

    const handleCardClick = () => {
        navigate(`/project/detail/${project.projectId}`);
    };





    return (
        <div
            className={`radius-8 margin-bottom-10 project-card box box${index} ${moveEvent?`effect${index}`:""} ${moveEventReverse?`effectReverse${index}`:""}`}
            onClick={handleCardClick}
            onMouseEnter={() => setIsHovered(true)} // 마우스 오버 시 상태 변경
            onMouseLeave={() => setIsHovered(false)} // 마우스 아웃 시 상태 변경
        >
            <div className="flex flex-col gap-0" style={{display:"flex",flexDirection:"column"}}>
                <img className="width100" style={{borderRadius:"8px 8px 0px 0px"}} src={project.imageUrl} alt={project.title} />

                <div className="padding-15 flex-direction-column gap-5p" style={{background:"#FFF",height:"180px",borderRadius:"0px 0px 8px 8px"}}>
                    <div className="display-flex justify-between padding-bottom-2">
                        <h3 className="text-align-start padding-top-5">{project.title}</h3>
                        <span className="season-label" style={{borderRadius:"8px"}}>{project.season}</span>
                    </div>

                    <div className="display-flex-end gap-5p">
                        <p className="weight-400 color-gray">{project.team} |</p>
                        <p className="text-align-start weight-400 color-gray">{project.members}</p>
                    </div>

                    <p className="text-align-start margin-top-10 weight-400" style={{
                        overflow: 'hidden',  		// 을 사용해 영역을 감출 것
                        textOverflow: 'ellipsis',  	// 로 ... 을 만들기 
                        wordBreak:'break-all',
                        width: '100%',
                        height: '95px',
                        display: '-webkit-box',
                        WebkitLineClamp:'5',
                        WebkitBoxOrient:'vertical'

                    }}>{project.description}{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardBox;
