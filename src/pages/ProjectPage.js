import React, { useState, useEffect, useRef } from "react";
import ProjectCardBox from "../components/ProjectCardBox";
import projectData from "../data/project.json";
import "../css/style.css";
import "../css/practice.css";
import "../css/team.css";
import top from "../images/icon/vector_top_black.png";
import bottom from "../images/icon/vector_bottom_black.png";

/**
 * ProjectPage 컴포넌트
 * @author 김진수
 * @since 2024.9.26
 * @lastmodified 2024.11.09
 */

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("기수");
    const [selectedCategory, setSelectedCategory] = useState("분야");
    const [seasons, setSeasons] = useState([]);
    const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [hoveredTeamOption, setHoveredTeamOption] = useState(null);
    const [hoveredCategoryOption, setHoveredCategoryOption] = useState(null);

    const teamDropdownRef = useRef(null);
    const categoryDropdownRef = useRef(null);

    useEffect(() => {
        let allProjects = [];
        let seasonList = [];

        Object.keys(projectData)
            .sort((a, b) => parseInt(b.replace("season", "")) - parseInt(a.replace("season", "")))
            .forEach((seasonKey) => {
                projectData[seasonKey].forEach((project) => {
                    allProjects.push({ ...project, season: seasonKey });
                });
                seasonList.push(seasonKey.replace("season", "") + "기");
            });

        setProjects(allProjects);
        setFilteredProjects(allProjects);
        setSeasons(seasonList);
    }, []);

    const toggleTeamDropdown = () => {
        setIsTeamDropdownOpen((prev) => !prev);
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen((prev) => !prev);
    };

    // 옵션 클릭 시 드롭다운을 닫는 함수
    const handleOptionClick = (type, value) => {
        if (type === "team") {
            setSelectedTeam(value === "전체" ? "기수" : value);
            setFilteredProjects(value === "전체" ? projects : projects.filter((project) => project.season === `season${value.replace("기", "")}`));
            setIsTeamDropdownOpen(true); // 옵션 클릭 시 팀 드롭다운 닫기
        } else if (type === "category") {
            setSelectedCategory(value === "전체" ? "분야" : value);
            setFilteredProjects(value === "전체" ? projects : projects.filter((project) => project.field === value));
            setIsCategoryDropdownOpen(true); // 옵션 클릭 시 카테고리 드롭다운 닫기
        }
    };

    const handleMouseEnter = (type, option) => {
        if (type === "team") {
            setHoveredTeamOption(option);
        } else if (type === "category") {
            setHoveredCategoryOption(option);
        }
    };

    const handleMouseLeave = (type) => {
        if (type === "team") {
            setHoveredTeamOption(null);
        } else if (type === "category") {
            setHoveredCategoryOption(null);
        }
    };

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (teamDropdownRef.current && !teamDropdownRef.current.contains(event.target)) {
                setIsTeamDropdownOpen(false);
            }
            if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
                setIsCategoryDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="project-container">
            <div className="text-align-center padding85-0">
                <h1 className="font-size-36 weight-700 color-white">
                    PROJECT
                </h1>
                <p className="font-size-20 weight-500 color-white padding-top-20">
                    함께이기에 완성할 수 있었던 우리의 결과물들
                </p>
            </div>

            <div className="filter-dropdowns">
                {/* 커스텀 기수 드롭다운 */}
                <div
                    className="dropdown-label font-size-16"
                    style={{
                        marginRight: "5px",
                    }}
                    ref={teamDropdownRef}
                    onClick={toggleTeamDropdown}
                >
                    <div style={{marginLeft:"10px"}}>
                        {selectedTeam}
                    </div>

                    <img src={isTeamDropdownOpen ? top : bottom} alt="dropdown icon"/>
                    {isTeamDropdownOpen && (
                        <ul className='dropdown-button'>
                            {["전체", ...seasons].map((team, index) => (
                                <li className= 'dropdown-toggle'
                                    key={index}
                                    onClick={() => handleOptionClick("team", team)}
                                    onMouseEnter={() => handleMouseEnter("team", team)}
                                    onMouseLeave={() => handleMouseLeave("team")}
                                    style={{color: hoveredTeamOption === team ? "#B751F2" : "#FFFFFF",}}>
                                    {team}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 커스텀 분야 드롭다운 */}
                <div
                    className="dropdown-label font-size-16"
                    style={{
                        marginRight: "0px",
                    }}
                    ref={categoryDropdownRef}
                    onClick={toggleCategoryDropdown}
                >
                    <div style={{marginLeft:"10px"}}>
                        {selectedCategory}
                    </div>
                    <img src={isCategoryDropdownOpen ? top : bottom} alt="dropdown icon"/>
                    {isCategoryDropdownOpen && (
                        <ul className='dropdown-button'>
                            {["전체", "웹", "앱"].map((category, index) => (
                                <li className='dropdown-toggle'
                                    key={index}
                                    onClick={() => handleOptionClick("category", category)}
                                    onMouseEnter={() => handleMouseEnter("category", category)}
                                    onMouseLeave={() => handleMouseLeave("category")}
                                    style={{color: hoveredCategoryOption === category ? "#B751F2" : "#FFFFFF",}}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div
                className="project-list"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    rowGap:"50px",
                    columnGap:"30px",
                    justifyItems: "center",
                }}
            >
                {filteredProjects.map((project, index) => (
                    <ProjectCardBox key={index} project={project} type="ProjectPage" />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
