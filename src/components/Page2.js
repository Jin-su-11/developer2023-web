import React from "react";
import '../css/style.css';  // CSS 파일을 불러옴
import img from '../images/practice/img.png';
import img2 from '../images/practice/img2.png';

function Page2() {
    return (
        <div className="page2" style={{ backgroundColor: "white", padding: "40px 20px" }}>
            {/* 제목 */}
            <header className="header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>끊임없이 만들어지는 우리의 이야기</h1>
            </header>

            {/* 첫 번째 섹션: 이미지와 텍스트를 가로로 배치 */}
            <div className="section" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "40px", maxWidth: "1200px", margin: "0 auto" }}>
                <img src={img} alt="팀 활동 이미지" className="image" />
                <div className="text" style={{ flex: 1, maxWidth: '600px', textAlign: 'left' }}>
                    <p>
                        <strong>DEVELOPER는</strong><br/> 개발자의 꿈을 가진, 성장하고 싶은 대학생을 위한 <strong>IT 학술 동아리</strong>입니다. <br/><br/>
                        틀에 박힌 딱딱한 공부가 아닌,<br/> 직접 참가하고 개발하는 <strong>프로젝트형 활동방식</strong>을 추구하여<br/> 스스로의 역량을 계속해서 발전시킬 기회를 제공합니다.
                    </p>
                </div>
            </div>

            {/* 두 번째 섹션: 이미지와 텍스트를 좌우 반전하여 배치 */}
            <div className="section" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "40px", maxWidth: "1200px", margin: "0 auto", flexDirection: "row-reverse" }}>
                <img src={img2} alt="발표 이미지" className="image" />
                <div className="text" style={{ flex: 1, maxWidth: '600px', textAlign: 'left' }}>
                    <p>
                        팀원들과 함께 원하는 개발 프로젝트를 진행하고,<br/> 발표를 통해 다른 팀들과 피드백을 하며 성장하세요. <br/><br/>
                        자유롭게 열려있는 분위기 속에서 팀원들과<br/> <strong>협업 활동</strong>을 통해 <strong>실력 상승</strong>을 경험해 보세요!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page2;
