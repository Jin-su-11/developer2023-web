    import React, { useEffect, useState, useRef } from "react";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import ProjectCardBox from "./ProjectCardBox";
    import projectsData from "../data/project.json";
    import "../css/style.css";

    /**
     * ProjectPage 컴포넌트
     * @since 2024.9.26
     * @lastmodified 2024.12.08
     */

    gsap.registerPlugin(ScrollTrigger);

    const Project = () => {
        const [projects, setProjects] = useState([]); // 프로젝트 데이터
        const [currentIndex, setCurrentIndex] = useState(1); // 현재 활성화된 카드 인덱스
        const [isTransitioning, setIsTransitioning] = useState(false); // 전환 애니메이션 상태

        const containerRef = useRef(null);
        const cardsRef = useRef([]);

        // 프로젝트 데이터 설정
        useEffect(() => {
            let filteredProjects = [];
            Object.keys(projectsData).forEach((seasonKey) => {
                projectsData[seasonKey].forEach((project) => {
                    if (project.aword) {
                        filteredProjects.push({ ...project, season: seasonKey });
                    }
                });
            });
            filteredProjects.reverse(); // 최신 시즌이 먼저 나오도록 역순
            setProjects([
                filteredProjects[filteredProjects.length - 1], // 마지막 카드 복제
                ...filteredProjects,
                filteredProjects[0], // 첫 번째 카드 복제
            ]);
        }, []);

        // 자동 슬라이드
        useEffect(() => {
            const interval = setInterval(() => {
                setIsTransitioning(true);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 8000);

            return () => clearInterval(interval);
        }, []);

        // GSAP 애니메이션 설정 (초기 렌더링 시)
        useEffect(() => {
            if (!containerRef.current || projects.length === 0) return;

            const projectTextElements = containerRef.current.querySelectorAll(".project-text");
            const projectLink = containerRef.current.querySelector(".project-link");

            // 제목과 설명 애니메이션
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

            // "더 보러가기" 링크 애니메이션
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

        // 전환 애니메이션 종료 처리
        const handleTransitionEnd = () => {
            setIsTransitioning(false);

            // 마지막에서 첫 번째 카드로 자연스럽게 이동
            if (currentIndex >= projects.length - 1) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(1); // 첫 번째 카드로 바로 이동
                }, 50); // 약간의 지연을 추가해 자연스럽게 이어짐
            }

            // 첫 번째에서 마지막 카드로 이동
            else if (currentIndex <= 0) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(projects.length - 2);
                }, 50);
            }
        };

        // 하단 점 클릭 시 슬라이드 이동
        const handleDotClick = (index) => {
            if (currentIndex !== index + 1) {
                setIsTransitioning(true);
                setCurrentIndex(index + 1);
            }
        };

        return (
            <div className="text-align-center padding85-0" ref={containerRef}>
                <div className="display-flex flex-direction-column gap-1r margin-bottom-60">
                    <h2 className="font-size-36 weight-700 project-text color-white">
                        달려온 결과
                    </h2>
                    <p className="font-size-22 weight-400 project-text color-white">
                        저희가 만든 프로젝트, 궁금하신가요?
                    </p>
                </div>

                {/* 캐러셀 영역 */}
                <div className="overflow-hidden position-relative project-text" style={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
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
                            const isCenter = index === currentIndex; // 중앙 카드 확인
                            const scale = isCenter ? 0.95 : 0.8; // 중앙 강조 크기
                            const opacity = isCenter ? 0.95 : 0.7; // 중앙 강조 투명도

                            return (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)} // GSAP 참조
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

                {/* 하단 점 */}
                <div className="display-flex justify-center project-text" style={{ position: 'relative', gap: '10px', marginTop: '20px' }}>
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

                {/* 더 보기 링크 */}
                <div className="project-text" style={{ marginTop: '20px', cursor: 'pointer', color: "#FFFFFF" }}>
                    <p className="font-size-16 weight-400 color-gray project-link" onClick={() => window.location.href = "/project"}>
                        더 보러가기 &gt;
                    </p>
                </div>
            </div>
        );
    };

    export default Project;
