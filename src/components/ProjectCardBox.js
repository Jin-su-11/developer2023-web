import React from "react";

const ProjectCardBox = ({project}) => {
    return (
        <div className="radius-8 margin-bottom-10" style={{width: "300px", border: "1px solid #d1d1d1"}}>
            <img className="width100"
                 style={{height: "220px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}
                 src={project.imageUrl}
                 alt={project.title}
            />

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