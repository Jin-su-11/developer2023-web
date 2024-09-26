import React from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import projectData from "../data/project.json";
import gitIcon from "../images/icon/git_icon.png";
import downloadIcon from "../images/icon/download_icon.png";

/**
 * 프로젝트 상세 페이지
 * @author 권민지
 * @since 2024.09.22
 * @lastmodified 2024.09.27
 */
const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = projectData.find((project) => project.projectId === parseInt(projectId));

    const handleGitClick = () => {
        window.open(project.gitUrl, "_blank");
    };

    const handleDownloadClick = () => {
        window.open(project.downloadUrl, "_blank");
    };

    if (!project) {
        return (
            <MainContainer>
                <p className="text-align-center margin-top-30">해당 프로젝트를 불러올 수 없습니다.</p>
            </MainContainer>
        );
    }

    return (
        <>
            <MainContainer>
                <div className="padding60-0">
                    <div className="display-flex-column gap-2r">
                        <div className="display-flex-column gap-05r">
                            <div className="display-flex gap-2d5r">
                                <h1>{project.title}</h1>
                                <div className="display-flex gap-1r">
                                    <img src={gitIcon} alt="git"
                                         className="hover-pointer"
                                         style={{width: "20px", height: "20px"}}
                                         onClick={handleGitClick}
                                    />
                                    <img src={downloadIcon} alt="git"
                                         className="hover-pointer"
                                         style={{width: "27px", height: "27px"}}
                                         onClick={handleDownloadClick}
                                    />
                                </div>
                            </div>

                            <div className="display-flex-end gap-05r">
                            <p className="font-size-24 weight-600">{project.team} |</p>
                                <p className="font-size-20 weight-500" style={{color: "rgb(75 75 75)"}}>{project.members}</p>
                            </div>
                        </div>

                        <div style={{width: "500px"}}>
                            <p className="font-size-18 weight-400">{project.description}</p>
                        </div>
                    </div>
                </div>
            </MainContainer>
            <div className="width100" style={{height: "1000px", background: "#e0e0e0"}}>

            </div>
        </>
    );
};

export default ProjectDetailPage;