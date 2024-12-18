/**
 *
 * AboutAchievement 컴포넌트
 * @author 김진수, 권민지
 * @since 2024.11.26
 * @lastmodified 2024.12.09
 */

import React, {useEffect, useRef} from "react";
import '../../css/style.css';
import '../../css/practice.css';
import hackertonImg2_2 from '../../images/achievements/hackerton2_2.png';
import hackertonImg1_1 from '../../images/achievements/hackerton1_1.png';
import hackertonImg1_2 from '../../images/achievements/hackerton1_2.png';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutAchievement() {
    const textRefs = useRef([]);

    useEffect(() => {
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
        <div className="padding100-0 display-flex-column align-items-center">
            <div className="display-flex-column align-items-center padding-bottom-40">
                <p className='font-size-36 weight-700 color-white'
                   ref={(el) => textRefs.current.push(el)}>
                    우리가 이룬 업적들
                </p>
            </div>

            <div className="display-flex-column align-items-center padding-bottom-60">
                <div className="display-flex padding-20">
                    <img src={hackertonImg2_2} style={{width: "500px"}}
                         alt="2024 경주 지역문제해결 해커톤 최우수상"
                         className="radius-12 padding-20"
                         ref={(el) => textRefs.current.push(el)}/>
                    <img src={hackertonImg2_2} style={{width: "500px"}}
                            alt="2024 경주 지역문제해결 해커톤 최우수상"
                         className="radius-12 padding-20"
                         ref={(el) => textRefs.current.push(el)}/>
                </div>

                <p className="font-size-28 color-purple weight-600 padding-bottom-10"
                   ref={(el) => textRefs.current.push(el)}
                >
                    2024 경주 지역문제해결 해커톤 최우수상
                </p>
                <p className="font-size-20 color-white weight-500"
                   ref={(el) => textRefs.current.push(el)}
                >
                    권민지, 김이현, 전상은, 전형주
                </p>
            </div>

            <div className="display-flex-column align-items-center">
                <div className="display-flex padding-20">
                    <img src={hackertonImg1_1} style={{width: "500px"}}
                         alt="2024 Hackers Ground 해커톤 최우수상"
                         className="radius-12 padding-20"
                         ref={(el) => textRefs.current.push(el)}/>
                    <img src={hackertonImg1_2} style={{width: "500px"}}
                         alt="2024 Hackers Ground 해커톤 최우수상"
                         className="radius-12 padding-20"
                         ref={(el) => textRefs.current.push(el)}/>
                </div>

                <p className="font-size-28 color-purple weight-600 padding-bottom-10"
                   ref={(el) => textRefs.current.push(el)}
                >
                    2024 Hackers Ground 해커톤 최우수상
                </p>
                <p className="font-size-20 color-white weight-500"
                   ref={(el) => textRefs.current.push(el)}>
                    김동민, 김현나
                </p>
            </div>
        </div>
    );
}

export default AboutAchievement;