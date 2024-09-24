/**
 * About 컴포넌트
 * @author 김진수
 * @since 2024.09.22
 * @lastmodified 2024.09.20
 */

import React, { useState, useEffect } from "react";
import ProjectCardBox from "../components/ProjectCardBox";
import projectData from "../data/project.json"; // project.json 파일에서 데이터 가져오기
import '../css/style.css';  // CSS 파일을 불러옴
import '../css/practice.css'; // 프로젝트 전용 CSS

const ProjectPage = () => {
    const [projects, setProjects] = useState([]); // 모든 프로젝트 데이터를 저장
    const [filteredProjects, setFilteredProjects] = useState([]); // 필터링된 프로젝트 데이터를 저장
    const [selectedTeam, setSelectedTeam] = useState("전체"); // 선택된 기수
    const [selectedCategory, setSelectedCategory] = useState("전체"); // 선택된 분야

    // 컴포넌트가 마운트될 때 project.json 데이터를 가져옴
    useEffect(() => {
        setProjects(projectData); // project.json 데이터를 state에 저장
        setFilteredProjects(projectData); // 초기 상태에서는 모든 프로젝트를 보여줌
    }, []);

    // 선택된 팀과 분야에 따라 프로젝트 필터링
    useEffect(() => {
        let filtered = projects;

        if (selectedTeam !== "전체") {
            filtered = filtered.filter(project => project.team === selectedTeam);
        }

        if (selectedCategory !== "전체") {
            filtered = filtered.filter(project => project.category === selectedCategory);
        }

        setFilteredProjects(filtered);
    }, [selectedTeam, selectedCategory, projects]);

    return (
        <div className="project-page">
            {/* 페이지 제목 */}
            <h1 className="title">PROJECT</h1>
            <p className="subtitle">함께이기에 완성할 수 있었던 우리의 결과물들</p>

            {/* 필터링 드롭다운 */}
            <div className="filter-dropdowns">
                {/* 기수 선택 드롭다운 */}
                <label className="dropdown-label">
                    기수
                    <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                        <option value="전체">전체</option>
                        <option value="1기">1기</option>
                        <option value="2기">2기</option>
                    </select>
                </label>

                {/* 분야 선택 드롭다운 */}
                <label className="dropdown-label">
                    분야
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="전체">전체</option>
                        <option value="웹">웹</option>
                        <option value="앱">앱</option>
                    </select>
                </label>
            </div>

            {/* 프로젝트 카드 목록 */}
            <div className="project-list">
                {filteredProjects.map((project, index) => (
                    <ProjectCardBox key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
