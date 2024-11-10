import React from 'react';
import { FaDesktop } from 'react-icons/fa'; // 아이맥을 위한 react-icon 사용
import '../css/progress.css'; // 추가적인 스타일 적용
import '../css/practice.css'
import '../css/style.css';
import soft_cat from '../images/practice/soft_cat.png'
import soft_cat_mark from '../images/practice/soft_cat_mark.png'
import stack_up from '../images/practice/stack_up.png'
import stack_up_mark from '../images/practice/stack_up_mark.png'

/**
 * ContactWidget
 * @since 2024.10.12
 * @lastmodified 2024.11.09
 * @author 임석진, 김진수
 */


const Progress = () => {
    return (
        <div className="text-align-center padding85-0">
            <div className="font-size-36 weight-700" style={{'color':'#FFFFFF'}}>
                저희는 계속해서 발전하는 중이에요!
            </div>

            <div className="content">
                <div className="progress-image-container">
                    <div className="image-placeholder"> {/* 실제 이미지를 나중에 추가 */}
                        <img src={stack_up} alt="Stack Up" className="imac-image" />
                    </div>
                </div>

                <div className="prgress-text-section">
                    <div className="progress-text-container">
                        <p className='progress-text'># 열정으로 빚어진 크루</p>
                        <p className='progress-text representative-color'># 스택-업</p>
                        <p className='progress-text'># 너의 실력도 업</p>
                        <p className='progress-text'># 멘토 & 멘티 활동</p>
                        <p className='progress-text'># 알고리즘 스터디</p>
                    </div>

                    <div className="progress-logo-button">
                        <div className="progress-button-content">
                            <img src={stack_up_mark} alt="StackUp Logo" className="progress-logo-image" />
                            <p>더 알고 싶다면 <span className="representative-color">CLICK!</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
