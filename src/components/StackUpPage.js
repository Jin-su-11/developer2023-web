import React from 'react';
import { FaDesktop } from 'react-icons/fa'; // 아이맥을 위한 react-icon 사용
import '../css/stackup.css'; // 추가적인 스타일 적용

/**
 * ContactWidget
 * @since 2024.10.12
 * @author 임석진
 */


const StackUpPage = () => {
    return (
        <div className="stackup-page">
            <div className="header-text">
                저희는 계속해서 발전하는 중이에요!
            </div>

            <div className="content">
                <div className="image-container">
                    <FaDesktop className="imac-icon" /> {/* 아이맥 아이콘 */}
                    <div className="image-placeholder"> {/* 실제 이미지를 나중에 추가 */}
                        <img src="/path/to/your/image.png" alt="Stack Up" className="imac-image" />
                    </div>
                </div>

                <div className="text-section">
                    <div className="text-container">
                        <p className="text"># 열정으로 빚어진 크루</p>
                        <p className="highlight"># 스택-업</p>
                        <p className="text"># 너의 실력도 업</p>
                        <p className="text"># 멘토 & 멘티 활동</p>
                        <p className="text"># 알고리즘 스터디</p>
                    </div>

                    <div className="stackup-button">
                        <div className="button-content">
                            <img src="/path/to/stackup-logo.png" alt="StackUp Logo" className="stackup-logo" />
                            <p>더 알고 싶다면 <span className="click-text">CLICK!</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StackUpPage;
