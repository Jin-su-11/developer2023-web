import React, { useEffect, useState } from "react";
import projectsData from '../data/project.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/style.css';
import '../css/practice.css';
import '../css/team.css';


/**
 * Team 컴포넌트
 * @author 임석진
 * @since 2024.09.14
 * @lastmodified 2024.09.20
 */
const Team = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    if (!projects || projects.length === 0) {
        return <p>Loading...</p>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        arrows: false,
    };

    return (
        <div className="text-align-center padding85-0">
            <div className="display-flex flex-direction-column gap-1r margin-bottom-60">
                <h2 className="font-size-36 weight-700">함께 할수록 즐거운 성장</h2>
                <p className="font-size-20 weight-400">즐거운 개발 여정을 디벨로퍼와 함께 해 보세요!</p>
            </div>

            {/* SEASON1과 SEASON2가 바로 아래로 위치하도록 수정 */}
            <div className="season-title-container display-flex justify-center gap-2r">
                <h2 className="font-size-24 season-title">SEASON2</h2>
                <h2 className="font-size-24">SEASON1</h2>
            </div>

            {/* TEAM SECTION */}
            <div className="team-section">
                <div className="team-card">
                    <span className="team-name">GAME TEAM</span><br/>
                    <span className="team-members">4명</span>
                </div>
                <div className="team-card">
                    <span className="team-name">WEB TEAM</span><br/>
                    <span className="team-members">5명</span>
                </div>
                <div className="team-card">
                    <span className="team-name">APP TEAM</span><br/>
                    <span className="team-members">5명</span>
                </div>
                <div className="team-card study-team">
                    <span className="team-name">STUDY TEAM</span><br/>
                    <span className="team-members">6명</span>
                </div>

                {/*<div className="team-card-row">*/}


                {/*</div>*/}

                {/*/!* Study Team을 위한 별도의 row *!/*/}
                {/*<div className="team-card-row study-team-row">*/}

                {/*</div>*/}

            </div>


            {/* Total Activity Members Section */}
            <div className="total-members-section text-align-center margin-top-40">
                <p className="font-size-24 weight-300">누적 활동 인원</p>
                <h2 className="font-size-48 weight-600">총 45명</h2>
                <a href="/more" className="font-size-16 weight-500">더 보러가기 ></a>
            </div>
        </div>
    );
}

export default Team;
