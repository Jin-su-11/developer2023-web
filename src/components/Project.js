import React, {useEffect, useState} from "react";
import ProjectCardBox from "./ProjectCardBox";
import projectsData from '../data/project.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    if (!projects || projects.length === 0) {
        return <p>Loading...</p>;
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="text-align-center padding85-200">
            <div className="display-flex flex-direction-column gap-05r margin-bottom-60">
                <h2 className="font-size-36 weight-700">달려온 결과</h2>
                <p className="font-size-20 weight-400">저희가 만든 프로젝트, 궁금하신가요?</p>
            </div>
            <Slider {...settings}>
                { projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCardBox project={project} />
                    </div>
                )) }
            </Slider>
            <p className="color-gray margin-top-30 text-align-end" style={{marginRight: "25px"}}>더 보러가기 ></p>
        </div>
    );
}

export default Project;