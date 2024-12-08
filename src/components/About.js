/**
 * About 컴포넌트
 * @author 김진수
 * @since 2024.09.17
 * @lastmodified 2024.09.20
 */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/style.css';
import '../css/practice.css';
import img from '../images/practice/img.png';
import img2 from '../images/practice/img2.png';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            imgRef1.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: imgRef1.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                },
            }
        );

        textRefs.current.forEach((textRef, index) => {
            gsap.fromTo(
                textRef,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: textRef,
                        start: "top 75%",
                        end: "bottom 25%",
                        scrub: 1,
                    },
                }
            );
        });

        gsap.fromTo(
            imgRef2.current,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: imgRef2.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                },
            }
        );

        textRefs.current.forEach((textRef, index) => {
            if (index >= 4) {
                gsap.fromTo(
                    textRef,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: textRef,
                            start: "top 75%",
                            end: "bottom 25%",
                            scrub: 1,
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <div className="padding100-0">
            {/* 제목 */}
            <div className="display-flex flex-direction-column gap-05r">
                <h2
                    className="font-size-36 weight-700"
                    style={{ color: "#FFFFFF" }}
                    ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                >
                    끊임없이 만들어지는 우리의 이야기
                </h2>
            </div>

            {/* 첫 번째 섹션: 이미지와 텍스트를 가로로 배치 */}
            <div className="section padding85-0">
                <img
                    ref={imgRef1}
                    src={img}
                    alt="팀 활동 이미지"
                    className="about-image"
                    style={{ marginRight: "60px" }}
                />
                <div className="about-text">
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        <span className="weight-600 representative-color">DEVELOPER</span>는
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        개발자의 꿈을 가진, 성장하고 싶은 대학생을 위한
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        <span className="weight-600 representative-color">IT 학술 동아리</span>입니다.
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        <br />
                        틀에 박힌 딱딱한 공부가 아닌,
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        직접 창작하고 개발하는{" "}
                        <span className="weight-600 representative-color">프로젝트형 활동방식</span>
                        을 추구하여
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        스스로의 역량을 계속해서 발전시킬 기회를 제공합니다.
                    </p>
                </div>
            </div>

            {/* 두 번째 섹션: 이미지와 텍스트를 좌우 반전하여 배치 */}
            <div className="section reverse">
                <img
                    ref={imgRef2}
                    src={img2}
                    alt="발표 이미지"
                    className="about-image"
                />
                <div className="about-text">
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        팀원들과 함께 원하는 개발 프로젝트를 진행하고,
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        발표를 통해 다른 팀들과 피드백을 하며 성장하세요.
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        <br />
                        자유롭게 열려있는 분위기 속에서 팀원들과
                    </p>
                    <p
                        ref={(el) => textRefs.current.push(el)} // 텍스트 ref 추가
                        style={{ color: "#FFFFFF" }}
                    >
                        <span className="weight-600 representative-color">협업 활동</span>을 통해{" "}
                        <span className="weight-600 representative-color">실력 상승</span>을 경험해 보세요!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
