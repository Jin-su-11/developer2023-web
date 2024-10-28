import React, { useEffect, useState } from "react";
import ProjectCardBox from "./ProjectCardBox";
import projectsData from '../data/project.json';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        let filteredProjects = [];
        Object.keys(projectsData).forEach(seasonKey => {
            projectsData[seasonKey].forEach(project => {
                if (project.aword) {
                    filteredProjects.push({ ...project, season: seasonKey });
                }
            });
        });
        filteredProjects.reverse();
        setProjects([
            filteredProjects[filteredProjects.length - 1],
            ...filteredProjects,
            filteredProjects[0]
        ]);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 3000); // 3초마다 자동 슬라이드

        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex >= projects.length - 1) {
            setCurrentIndex(1); // 마지막 복제 카드에서 실제 첫 번째 카드로 이동
        } else if (currentIndex <= 0) {
            setCurrentIndex(projects.length - 2); // 첫 번째 복제 카드에서 실제 마지막 카드로 이동
        }
    };

    const handleDotClick = (index) => {
        if (currentIndex !== index + 1) {
            setIsTransitioning(true);
            setCurrentIndex(index + 1);
        }
    };

    return (
        <div className="text-align-center padding85-0">
            <div className="display-flex flex-direction-column gap-1r margin-bottom-60">
                <h2 className="font-size-36 weight-700" style={{ color: "#FFFFFF" }}>달려온 결과</h2>
                <p className="font-size-20 weight-400" style={{ color: "#FFFFFF" }}>저희가 만든 프로젝트, 궁금하신가요?</p>
            </div>

            <div className="overflow-hidden position-relative" style={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
                <div
                    className="display-flex"
                    style={{
                        display: 'flex',
                        justifyContent: 'start',
                        gap: '20px',
                        transform: `translateX(-${(currentIndex - 1) * (300 + 20)}px)`,
                        transition: isTransitioning ? "transform 0.8s ease" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {projects.map((project, index) => {
                        const isCenter = index === currentIndex;
                        const scale = isCenter ? 1 : 0.8;
                        const opacity = isCenter ? 1 : 0.7;

                        return (
                            <div
                                key={index}
                                style={{
                                    flexShrink: 0,
                                    transform: `scale(${scale})`,
                                    opacity: `${opacity}`,
                                    transition: 'transform 0.5s ease, opacity 0.5s ease'
                                }}
                            >
                                <ProjectCardBox project={project} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="display-flex justify-center" style={{ position: 'relative', gap: '10px', marginTop: '20px' }}>
                {projects.slice(1, -1).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            backgroundColor: currentIndex === index + 1 ? '#FFFFFF' : '#777',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }}
                    />
                ))}
            </div>

            <div style={{ marginTop: '20px', cursor: 'pointer', color: "#FFFFFF" }}>
                <p className="font-size-16 weight-400 color-gray" onClick={() => window.location.href = "http://localhost:3000/project"}>
                    더 보러가기 &gt;
                </p>
            </div>
        </div>
    );
};

export default Project;
