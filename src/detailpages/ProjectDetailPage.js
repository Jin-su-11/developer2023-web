import React from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import projectData from "../data/project.json";
import gitIcon from "../images/icon/git_icon.png";
// import downloadIcon from "../images/icon/download_icon.png";
import "../css/practice.css";


/**
 * 프로젝트 상세 페이지
 * @since 2024.09.22
 * @lastmodified 2024.11.01
 */

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const projectIdNum = parseInt(projectId); // projectId를 숫자로 변환

    // 모든 시즌을 탐색하여 해당 projectId를 가진 프로젝트를 찾습니다.
    let project = null;
    Object.values(projectData).forEach(seasonProjects => {
        if (!project) {
            project = seasonProjects.find(p => p.projectId === projectIdNum);
        }
    });

    const handleGitClick = () => {
        if (project && project.gitUrl) {
            window.open(project.gitUrl, "_blank");
        }
    };

    // const handleDownloadClick = () => {
    //     if (project && project.downloadUrl) {
    //         window.open(project.downloadUrl, "_blank");
    //     }
    // };

    if (!project) {
        return (
            <MainContainer>
                <p className="text-align-center margin-top-30">해당 프로젝트를 불러올 수 없습니다.</p>
            </MainContainer>
        );
    }

    return (
        <>
            <div className="padding60-0">
                <div className="display-flex-column gap-2r">
                    <div className="display-flex-column gap-05r">
                        <div className="display-flex gap-2d5r">
                            <h1 style={{ color: "#FFFFFF" }}>{project.title}</h1>
                            <div className="display-flex gap-1r">
                                <img
                                    src={gitIcon}
                                    alt="git"
                                    className="hover-pointer"
                                    style={{ width: "30px", height: "30px" }}
                                    onClick={handleGitClick}
                                />
                                {/*<img*/}
                                {/*    src={downloadIcon}*/}
                                {/*    alt="download"*/}
                                {/*    className="hover-pointer"*/}
                                {/*    style={{ width: "27px", height: "27px" }}*/}
                                {/*    // onClick={handleDownloadClick}*/}
                                {/*/>*/}
                            </div>
                        </div>

                        <div className="display-flex-end gap-05r">
                            <p className="font-size-24 weight-600 representative-color">{project.team} |</p>
                            <p className="font-size-20 weight-500" style={{ color: "#FFFFFF" }}>{project.members}</p>
                        </div>
                    </div>

                    <div style={{ width: "500px" }}>
                        <p className="font-size-18 weight-400" style={{ color: "#D6D6D6" }}>{project.description}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProjectDetailPage;
