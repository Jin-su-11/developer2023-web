import React, {useEffect, useState, useRef} from "react";
import ProjectCardBox from "./ProjectCardBox";
import projectsData from '../data/project.json';

/**
 * 프로젝트 슬라이더 리스트 컴포넌트
 * @author 권민지
 * @since 2024.09.09
 * @lastmodified 2024.09.20
 */
const Project = () => {
    const projects = [...projectsData];
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = projects.length;
    const visibleSlides = 3;
    const slideWidth = 1030 / visibleSlides;  // 개별 슬라이드 너비
    const gap = 1.4;

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

        // 컴포넌트 언마운트 시 인터벌 정리
        return () => clearInterval(interval);
    }, []);

    /**
     * 다음 슬라이드로 넘어가는 함수
     */
    const goToNextSlide = () => {
        isTransitioning.current = true;
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    /**
     * 슬라이드 전환 시 transitioning 상태를 false로 변경
     */
    useEffect(() => {
        isTransitioning.current = false;
    }, [currentSlide]);

    // 슬라이드가 움직이는 거리
    const translateValue = (currentSlide % totalSlides) * (slideWidth + gap * 16);

    return (
        <div className="text-align-center padding85-0">
            <div className="width100 position-absolute z-index--100"
                 style={{background: "rgb(241 241 241)", height: "830px", top: "1920px", left: 0}}></div>
            <div className="display-flex flex-direction-column gap-05r margin-bottom-60">
                <h2 className="font-size-36 weight-700">달려온 결과</h2>
                <p className="font-size-20 weight-400">저희가 만든 프로젝트, 궁금하신가요?</p>
            </div>

            <div className="overflow-hidden position-relative" style={{width: "1030px"}}>
                <div
                    ref={slideRef}
                    className="display-flex"
                    style={{
                        transform: `translateX(-${translateValue}px)`,
                        transition: "transform 0.8s ease-in-out",
                        width: `${(totalSlides + 2) * (slideWidth + gap * 16)}px`,
                        gap: `${gap}rem`,
                        height: "480px"
                    }}
                >
                    <div
                        style={{
                            flexShrink: 0,
                            width: `${slideWidth}px`,
                            transform: `scale(0.8)`,
                            opacity: "0.5",
                        }}
                    >
                        <ProjectCardBox project={projects[totalSlides - 1]}/>
                    </div>

                    {projects.map((project, index) => {
                        // 중앙 슬라이드를 크게 보이도록 설정
                        const scale = index === currentSlide ? 1.1 : 0.8;
                        const opacity = index === currentSlide ? 1 : 0.5;

                        return (
                            <div
                                key={index}
                                style={{
                                    flexShrink: 0,
                                    width: `${slideWidth}px`,
                                    transition: "transform 0.8s ease-in-out",
                                    transform: `scale(${scale})`,
                                    opacity: `${opacity}`,
                                }}
                            >
                                <ProjectCardBox project={project}/>
                            </div>
                        );
                    })}

                    <div
                        style={{
                            flexShrink: 0,
                            width: `${slideWidth}px`,
                            transform: `scale(0.8)`,
                            opacity: "0.5",
                        }}
                    >
                        <ProjectCardBox project={projects[0]}/>
                    </div>
                </div>
            </div>

            <ul
                className="display-flex justify-center position-relative gap-10p margin-0 padding-0"
                style={{
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    listStyleType: "none"
                }}
            >
                {projects.map((_, index) => (
                    <li key={index}
                        className="hover-pointer"
                        style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            backgroundColor: currentSlide === index ? "black" : "gray"
                        }}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </ul>

            <div className="margin-top-30 display-flex"
                 style={{marginRight: "25px", flexDirection: "row-reverse"}}>
                <p className="color-gray hover-pointer hover-underline"
                   onClick={() => window.location.href = "/project"}>
                    더 보러가기 &gt;
                </p>
            </div>
        </div>
    );
};

export default Project;
