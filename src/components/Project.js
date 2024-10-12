import React, { useEffect, useState } from "react";
import ProjectCardBox from "./ProjectCardBox";
import projectsData from '../data/project.json'; // 프로젝트 데이터를 가져옴

const Project = () => {
    const [projects, setProjects] = useState([]); // 모든 프로젝트 데이터를 저장

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
        setProjects(filteredProjects); // aword 속성이 있는 프로젝트만 저장
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
    const visibleSlides = 3; // 한 번에 보이는 카드 개수

    const goToNextSlide = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToProjectPage = () => {
        window.location.href = "http://localhost:3000/project"; // URL을 직접 변경하여 이동
    };

    return (
        <div className="text-align-center padding85-0">
            {/* 제목과 설명 */}
            <div className="display-flex flex-direction-column gap-1r margin-bottom-60">
                <h2 className="font-size-36 weight-700">달려온 결과</h2>
                <p className="font-size-20 weight-400">저희가 만든 프로젝트, 궁금하신가요?</p>
            </div>

            {/* 슬라이더 */}
            <div className="overflow-hidden position-relative" style={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
                <div
                    className="display-flex"
                    style={{
                        display: 'flex',
                        justifyContent: 'start',  // 슬라이드를 왼쪽 정렬
                        gap: '20px',
                        transform: `translateX(-${currentIndex * (300 + 20)}px)`, // 슬라이드를 이동시킴 (카드 크기 300px 기준)
                        transition: "transform 0.8s ease", // 부드러운 슬라이드 애니메이션
                    }}
                >
                    {/* 슬라이드에서 전체 프로젝트를 렌더링 */}
                    {projects.map((project, index) => {
                        const isCenter = index === currentIndex + 1;
                        const scale = isCenter ? 1 : 0.8; // 중앙에 있는 카드만 크게, 나머지는 작게
                        const opacity = isCenter ? 1 : 0.7; // 중앙 카드만 불투명하게

                        return (
                            <div
                                key={index}
                                style={{
                                    flexShrink: 0,
                                    width: '300px',
                                    height: '420px',
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

            {/* 좌우 클릭 점과 중앙 강조 점 */}
            <div className="display-flex justify-center" style={{ position: 'relative', gap: '10px', marginTop: '20px' }}>
                {/* 왼쪽 클릭 점 */}
                <div
                    onClick={goToPrevSlide}
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: currentIndex > 0 ? '#ccc' : '#eee',
                        cursor: currentIndex > 0 ? 'pointer' : 'default',
                    }}
                />

                {/* 중앙 강조 점 */}
                <div
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#000', // 중앙 점은 항상 검정색으로 강조
                        cursor: 'default',
                    }}
                />

                {/* 오른쪽 클릭 점 */}
                <div
                    onClick={goToNextSlide}
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: currentIndex < projects.length - visibleSlides ? '#ccc' : '#eee',
                        cursor: currentIndex < projects.length - visibleSlides ? 'pointer' : 'default',
                    }}
                />
            </div>

            {/* 더 보러가기 버튼 */}
            <div style={{ marginTop: '20px', cursor: 'pointer' }}>
                <p className="font-size-16 weight-400 color-gray" onClick={goToProjectPage}>
                    더 보러가기 &gt;
                </p>
            </div>
        </div>
    );
};

export default Project;
