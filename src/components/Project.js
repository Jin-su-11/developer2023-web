import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCardBox from "./ProjectCardBox";
import projectsData from "../data/project.json";
import "../css/style.css";

/**
 * About 컴포넌트
 * @author 김진수
 * @since 2024.09.17
 * @lastmodified 2024.09.20
 */


gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let filteredProjects = [];
        Object.keys(projectsData).forEach((seasonKey) => {
            projectsData[seasonKey].forEach((project) => {
                if (project.aword) {
                    filteredProjects.push({ ...project, season: seasonKey });
                }
            });
        });
        filteredProjects.reverse();
        setProjects([
            filteredProjects[filteredProjects.length - 1],
            ...filteredProjects,
            filteredProjects[0],
        ]);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!containerRef.current || projects.length === 0) return;

        const projectTextElements = containerRef.current.querySelectorAll(".project-text");
        if (projectTextElements.length > 0) {
            gsap.fromTo(
                projectTextElements,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        end: "bottom 25%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        if (cardsRef.current.length > 0) {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        end: "bottom 25%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        const projectLink = containerRef.current.querySelector(".project-link");
        if (projectLink) {
            gsap.fromTo(
                projectLink,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: projectLink,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [projects]);


    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex >= projects.length - 1) {
            setCurrentIndex(1);
        } else if (currentIndex <= 0) {
            setCurrentIndex(projects.length - 2);
        }
    };

    const handleDotClick = (index) => {
        if (currentIndex !== index + 1) {
            setIsTransitioning(true);
            setCurrentIndex(index + 1);
        }
    };

    return (
        <div className="text-align-center padding85-0" ref={containerRef}>
            {/* 제목 및 설명 */}
            <div className="display-flex flex-direction-column gap-1r margin-bottom-60">
                <h2
                    className="font-size-36 weight-700 project-text"
                    style={{ color: "#FFFFFF" }}
                >
                    달려온 결과
                </h2>
                <p
                    className="font-size-20 weight-400 project-text"
                    style={{ color: "#FFFFFF" }}
                >
                    저희가 만든 프로젝트, 궁금하신가요?
                </p>
            </div>

            {/* 캐러셀 영역 */}
            <div
                className="overflow-hidden position-relative"
                style={{ width: "100%", maxWidth: "960px", margin: "0 auto" }}
            >
                <div
                    className="display-flex"
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        gap: "20px",
                        transform: `translateX(-${(currentIndex - 1) * (300 + 20)}px)`,
                        transition: isTransitioning ? "transform 0.8s ease" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {projects.map((project, index) => {
                        const isCenter = index === currentIndex;
                        const scale = isCenter ? 0.95 : 0.8;
                        const opacity = isCenter ? 0.95 : 0.7;

                        return (
                            <div
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                style={{
                                    flexShrink: 0,
                                    transform: `scale(${scale})`,
                                    opacity: `${opacity}`,
                                    transition: "transform 0.5s ease, opacity 0.5s ease",
                                }}
                            >
                                <ProjectCardBox project={project} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 하단 점 */}
            <div
                className="display-flex justify-center"
                style={{
                    position: "relative",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >
                {projects.slice(1, -1).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            backgroundColor: currentIndex === index + 1 ? "#FFFFFF" : "#777",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                    />
                ))}
            </div>

            {/* 더 보기 링크 */}
            <div
                style={{
                    marginTop: "20px",
                    cursor: "pointer",
                    color: "#FFFFFF",
                }}
            >
                <p
                    className="font-size-16 weight-400 color-gray project-link"
                    onClick={() =>
                        (window.location.href = "http://localhost:3000/project")
                    }
                >
                    더 보러가기 &gt;
                </p>
            </div>
        </div>
    );
};

export default Project;
