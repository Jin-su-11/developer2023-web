import React from "react";
import About from "./About";
import Team from "./Team";
import Project from "./Project";
import Progress from "./Progress";

/**
 * About 컴포넌트
 * @author 김진수
 * @since 2024.09.17
 * @lastmodified 2024.10.26
 */

const MainContainer = ({ children }) => {
    return (
        <div className="main-container-outside">
            {React.Children.map(children, (child) => {
                let backgroundColor = "#000000"; // 기본 배경색

                // 각 child의 타입에 따라 배경색을 변경
                if (child.type === About) {
                    backgroundColor = "#191919";
                } else if (child.type === Team) {
                    backgroundColor = "#000000";
                } else if (child.type === Project) {
                    backgroundColor = "#191919";
                } else if (child.type === Progress) {
                    backgroundColor = "#000000";
                }
                // 개별 child를 배경색을 가진 div로 감싸고, .main-container 스타일 유지
                return (
                    <div style={{ backgroundColor }}>
                        <div className="main-container">
                            {child}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MainContainer;
