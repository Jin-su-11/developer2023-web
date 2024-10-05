import React, { useEffect, useState, useRef } from "react";
import ProjectCardBox from "./ProjectCardBox";
import projectsData from '../data/project.json';

/**
 * 프로젝트 슬라이더 리스트 컴포넌트
 * @author 권민지
 * @since 2024.09.09
 * @lastmodified 2024.09.20
 */

const Project = () => {
    const projects = [...projectsData.season1]; // 시즌 데이터를 가져옵니다.
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = projects.length;
    const visibleSlides = 3; // 한 번에 보이는 슬라이드 개수
    const slideWidth = 300; // 슬라이드 너비 고정
    const gap = 20; // 슬라이드 사이 간격

    const slideRef = useRef(null);
    const isTransitioning = useRef(false);

    /**
     * 5초마다 슬라이드를 넘기는 자동 슬라이드
     */
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning.current) {
                goToNextSlide();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        isTransitioning.current = true;
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    useEffect(() => {
        isTransitioning.current = false;
    }, [currentSlide]);

    // 중앙 배치를 위한 슬라이드 이동 거리 계산 (중앙에 강조된 슬라이드가 위치하도록 조정)
    const translateValue = (currentSlide - Math.floor(visibleSlides / 2)) * (slideWidth + gap);

    return (
        <div className="project-section text-align-center padding85-0">
            {/* 배경 색상 조정 */}
            <div className="width100 position-absolute z-index--100"
                 style={{ background: "rgb(241 241 241)", height: "830px", top: "1920px", left: 0 }}>
            </div>

            {/* 제목과 설명 */}
            <div className="display-flex flex-direction-column gap-05r margin-bottom-60">
                <h2 className="font-size-36 weight-700">달려온 결과</h2>
                <p className="font-size-20 weight-400">저희가 만든 프로젝트, 궁금하신가요?</p>
            </div>

            {/* 슬라이더 */}
            <div className="overflow-hidden position-relative project-slider-container" style={{ width: `${visibleSlides * (slideWidth + gap)}px`, margin: '0 auto' }}>
                <div
                    ref={slideRef}
                    className="display-flex project-slider"
                    style={{
                        transform: `translateX(-${translateValue}px)`,
                        transition: "transform 0.8s ease-in-out",
                        width: `${(totalSlides + 2) * (slideWidth + gap)}px`,
                        gap: `${gap}px`,
                        height: "480px"
                    }}>

                    {/* 첫 번째 슬라이드 - 마지막 카드 복제 */}
                    <div style={{ flexShrink: 0, width: `${slideWidth}px`, transform: "scale(0.8)", opacity: "0.5" }}>
                        <ProjectCardBox project={projects[totalSlides - 1]} />
                    </div>

                    {/* 실제 슬라이드들 */}
                    {projects.map((project, index) => {
                        const scale = index === currentSlide ? 1 : 0.8; // 중앙 슬라이드를 크게 보이도록
                        const opacity = index === currentSlide ? 1 : 0.5;

                        return (
                            <div
                                key={index}
                                style={{
                                    flexShrink: 0,
                                    width: `${slideWidth}px`,
                                    transition: "transform 0.8s ease-in-out",
                                    transform: `scale(${scale})`,
                                    opacity: `${opacity}`
                                }}>
                                <ProjectCardBox project={project} />
                            </div>
                        );
                    })}

                    {/* 마지막 슬라이드 - 첫 번째 카드 복제 */}
                    <div style={{ flexShrink: 0, width: `${slideWidth}px`, transform: "scale(0.8)", opacity: "0.5" }}>
                        <ProjectCardBox project={projects[0]} />
                    </div>
                </div>
            </div>

            {/* 슬라이드 이동 버튼 */}
            <ul className="display-flex justify-center position-relative gap-10p margin-0 padding-0"
                style={{ listStyleType: "none", marginTop: "20px" }}>
                {projects.map((_, index) => (
                    <li
                        key={index}
                        className="hover-pointer"
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: currentSlide === index ? "black" : "gray"
                        }}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </ul>

            {/* 더 보기 버튼 */}
            <div className="margin-top-30 display-flex" style={{ marginTop: "30px", justifyContent: "center" }}>
                <p className="color-gray hover-pointer hover-underline" onClick={() => window.location.href = "/project"}>
                    더 보러가기 &gt;
                </p>
            </div>
        </div>
    );
};

export default Project;