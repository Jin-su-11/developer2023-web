import React from 'react';
import '../css/progress.css'; // 스타일 적용
import '../css/practice.css';
import '../css/style.css';
import soft_cat from '../images/practice/soft_cat.png';
import soft_cat_mark from '../images/practice/soft_cat_mark.png';
import stack_up from '../images/practice/stack_up.png';
import stack_up_mark from '../images/practice/stack_up_mark.png';

/**
 * Progress
 * @since 2024.10.12
 * @lastmodified 2024.11.26
 * @author 김진수, 임석진
 */

const Progress = () => {
    // 버튼 클릭 시 링크 이동 함수
    const handleStackUpClick = () => {
        window.open("https://stack-up.notion.site/STACK-UP-HOME-bec5a8d5c19e42588054614f874b9571?pvs=74", "_blank");
    };

    const handleSoftCatClick = () => {
        window.open("https://softcat.co.kr", "_blank");
    };

    return (
        <div className="text-align-center padding85-0">
            <div className="font-size-36 weight-700" style={{'color': '#FFFFFF'}}>
                저희는 계속해서 발전하는 중이에요!
            </div>

            <div className="content">
                <div className="progress-image-container">
                    <div className="image-placeholder">
                        <img src={stack_up} alt="Stack Up" className="imac-image" />
                    </div>
                </div>

                <div style={{ marginRight: "20px" }}>
                    <div className="progress-text-container progress-text-align-right">
                        <p className='progress-text weight-700'># 열정으로 빚어진 크루</p>
                        <p className='progress-text representative-color weight-700'># 스택-업</p>
                        <p className='progress-text weight-700'># 너의 실력도 업</p>
                        <p className='progress-text weight-700'># 멘토 & 멘티 활동</p>
                        <p className='progress-text weight-700'># 알고리즘 스터디</p>
                    </div>

                    <div
                        className="progress-logo-button"
                        style={{ width: "280px", height: "60px" }}
                        onClick={handleStackUpClick}
                    >
                        <div className="progress-button-content" style={{ marginRight: "5px" }}>
                            <img src={stack_up_mark} alt="StackUp Logo" className="stack-up-logo-image" />
                            <p className="weight-700">더 알고 싶다면 <span className="representative-color">CLICK!</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content reverse">
                <div className="progress-image-container">
                    <div className="image-placeholder">
                        <img src={soft_cat} alt="Stack Up" className="imac-image" />
                    </div>
                </div>

                <div className="progress-text-section" style={{ marginLeft: "50px" }}>
                    <div className="progress-text-container progress-text-align-left">
                        <p className='progress-text weight-700'># 창업 동아리</p>
                        <p className='progress-text weight-700'># 열정과 끈기</p>
                        <p className='progress-text softcat-color weight-700'># 소프트 캣</p>
                        <p className='progress-text weight-700'># 꿈을 현실로!</p>
                        <p className='progress-text weight-700'># 실전 경험치 한가득</p>
                    </div>

                    <div
                        className="progress-logo-button"
                        style={{ width: "300px", height: "63px" }}
                        onClick={handleSoftCatClick}
                    >
                        <div className="progress-button-content" style={{ marginRight: "10px" }}>
                            <img src={soft_cat_mark} alt="SoftCat Logo" className="soft-cat-logo-image" />
                            <p className="weight-700">더 알고 싶다면 <span className="softcat-color">CLICK!</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
