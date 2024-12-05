import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import memberData from '../data/member.json';
import '../css/style.css';
import '../css/practice.css';
import '../css/memberpage.css';
import { FaGithub, FaLink } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/**
 * ContactWidget
 * @since 2024.9.12
 * @modified 2024.12.05
 * @author 임석진
 */

const MemberPage = () => {
    const [season, setSeason] = useState('all');
    const [teams, setTeams] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState('SEASON ▾');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const pageRef = useRef(null);
    const teamBoxRefs = useRef([]);
    const headerRef = useRef(null);

    const totalMembers = memberData.season1.reduce((count, team) => count + team.members.length, 0)
        + memberData.season2.reduce((count, team) => count + team.members.length, 0);

    useEffect(() => {
        if (season === 'season1') {
            setTeams(memberData['season1']);
            setSelectedSeason('SEASON 1');
        } else if (season === 'season2') {
            setTeams(memberData['season2']);
            setSelectedSeason('SEASON 2');
        } else {
            setTeams([...memberData['season2'], ...memberData['season1']]);
            setSelectedSeason('SEASON');
        }
    }, [season]);

    const handleSeasonChange = (newSeason) => {
        setSeason(newSeason);
        setIsDropdownOpen(false);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // GSAP 애니메이션 설정
    useEffect(() => {
        if (!pageRef.current) return;

        // 헤더 애니메이션
        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // 팀 박스 애니메이션
        teamBoxRefs.current.forEach((box, index) => {
            gsap.fromTo(
                box,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, [teams]);

    return (
        <div className="member-page" ref={pageRef}>
            <div className="text-align-center padding85-0" ref={headerRef}>
                <h1 className="font-size-46 weight-700 color-white">MEMBER</h1>
                <p className="font-size-24 title-description-spacing color-white">
                    <span className="highlight-total">총 {totalMembers}명</span>의 팀원들이 디벨로퍼와 함께했어요!
                </p>
            </div>

            <div className="filter-container">
                <button
                    className={`filter-button ${season === 'all' ? 'active' : ''}`}
                    onClick={() => handleSeasonChange('all')}
                >
                    ALL
                </button>
                <div className="dropdown" ref={dropdownRef}>
                    <button
                        className={`dropbtn ${isDropdownOpen ? 'active' : ''}`}
                        onClick={handleDropdownToggle}
                    >
                        {selectedSeason}
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content is-visible">
                            <button
                                className={season === 'season2' ? 'selected' : ''}
                                onClick={() => handleSeasonChange('season2')}
                            >
                                SEASON 2
                            </button>
                            <button
                                className={season === 'season1' ? 'selected' : ''}
                                onClick={() => handleSeasonChange('season1')}
                            >
                                SEASON 1
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="team-section2">
                {teams.map((team, index) => (
                    <div
                        key={index}
                        className="team-box"
                        ref={(el) => (teamBoxRefs.current[index] = el)}
                    >
                        <div className="team-header">
                            <h3 className="team-name">{team.teamName} <span>{team.members.length}명</span></h3>
                            <span className="season-badge">
                                {memberData.season1.includes(team) ? 'season1' : 'season2'}
                            </span>
                        </div>
                        <div className="team-members-row">
                            {team.members.map((member, i) => (
                                <div key={i} className="team-member-card">
                                    <div className="member-image" />
                                    <div className="member-info">
                                        <span className="member-name">{member.memberName}</span>
                                    </div>
                                    <div className="member-roles">
                                        {Array.isArray(member.memberRole) ? (
                                            member.memberRole.map((role, idx) => (
                                                <span key={idx} className="member-role">{role}</span>
                                            ))
                                        ) : (
                                            <span className="member-role">{member.memberRole}</span>
                                        )}
                                    </div>
                                    <div className="member-links">
                                        {member.githubUrl && (
                                            <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={24} />
                                            </a>
                                        )}
                                        {member.otherLink && (
                                            <a href={member.otherLink} target="_blank" rel="noopener noreferrer">
                                                <FaLink size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberPage;
