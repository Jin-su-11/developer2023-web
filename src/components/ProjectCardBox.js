import React from "react";
import { useNavigate } from "react-router";

const ProjectCardBox = ({ project, type }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/project/detail/${project.projectId}`);
    };

    // Assume project has a `season` property directly
    const season = project.season; // You can adjust this based on how you retrieve season info.

    // Set card box size when type is 'ProjectPage'
    const cardStyle = {
        width: type === "ProjectPage" ? "320px" : "300px", // Larger size when 'ProjectPage'
        height: type === "ProjectPage" ? "430px" : "400px",
        border: "1px solid #d1d1d1",
        borderRadius: "8px",
    };

    // Always fix image size to 220px
    const imgStyle = {
        height: "220px", // fixed image height
        width: "100%",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
    };

    return (
        <div className="radius-8 margin-bottom-10" style={cardStyle} onClick={handleCardClick}>
            <img className="width100" style={imgStyle} src={project.imageUrl} alt={project.title} />

            <div className="padding-15 flex-direction-column gap-5p">
                <div className="display-flex justify-between">
                    <h3 className="text-align-start">{project.title}</h3>
                    {/* Display the season if available in the project data */}
                    {season && (
                        <span className="season-label" style={{ padding: '5px', border: '1px solid #000', borderRadius: '5px', fontSize: '12px' }}>
                            {season}
                        </span>
                    )}
                </div>

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