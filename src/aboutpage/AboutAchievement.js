/**
 *
 * AboutAchievement 컴포넌트
 * @author 김진수
 * @since 2024.11.26
 * @lastmodified
 */

import React from "react";
import '../css/style.css';  // CSS 파일을 불러옴
import '../css/practice.css';


function AboutAchievement() {
    return (

        <div className="text-align-center padding85-0">
            {/* 제목 */}
            <div className='font-size-36 weight-700' style= {{color:'#FFFFFF'}}>
                우리가 이룬 업적들
            </div>
        </div>
    );
}

export default AboutAchievement;