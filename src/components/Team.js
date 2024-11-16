import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import memberData from '../data/member.json';
import '../css/style.css';
import '../css/practice.css';
import '../css/team.css';

/**
 * ContactWidget
 * @since 2024.9.12
 * @author 임석진
 */

const Team = () => {
    const [season, setSeason] = useState('season2');
    const [teams, setTeams] = useState([]);

    const totalMembers = memberData['season1'].reduce((acc, team) => acc + team.members.length, 0) +
        memberData['season2'].reduce((acc, team) => acc + team.members.length, 0);

    useEffect(() => {
        if (season === 'season1') {
            setTeams(memberData['season1']);
        } else {
            setTeams(memberData['season2']);
        }
    }, [season]);

    const handleSeasonChange = (newSeason) => {
        setSeason(newSeason);
    };

    return (
        <div className="text-align-center padding85-0">
            <div className="display-flex flex-direction-column gap-1r margin-bottom-60">
                <h2 className="team-text">함께 할수록 즐거운 성장</h2>
                <p className="team-text2">즐거운 개발 여정을 디벨로퍼와 함께 해 보세요!</p>
            </div>

            <div className="season-selector">
                <h2
                    className={`season ${season === 'season2' ? 'active' : ''}`}
                    onClick={() => handleSeasonChange('season2')}
                >
                    SEASON2
                </h2>
                <h2
                    className={`season ${season === 'season1' ? 'active' : ''}`}
                    onClick={() => handleSeasonChange('season1')}
                >
                    SEASON1
                </h2>
            </div>

            <div className="team-section3">
                {teams.map((team, index) => (
                    <Link to="/member" key={index} className="member-card"> {/* Wrap in Link */}
                        <span className="team-name1">{team.teamName}</span><br />
                        <span className="team-members">{team.members.length}명</span>
                    </Link>
                ))}
            </div>

            <div className="total-members-section text-align-center">
                <p className="team-text3">누적 활동 인원</p>
                <h2 className="font-size-48 weight-600">총 {totalMembers}명</h2>
                <a href="/member" className="font-size-16 weight-500">더 보러가기 ></a>
            </div>
        </div>
    );
};

export default Team;
