import React from 'react';
import memberData from '../data/member.json';
import "../css/style.css"
import "../css/practice.css"
import reviewImg from "../images/practice/review_img.png";

/**
 * ProjectReview 컴포넌트
 * @author 김진수
 * @since 2024.10.31
 * @lastmodified 2024.11.01
 */

const ProjectReview = ({ projectId }) => {
    // season1과 season2 데이터를 합친 후 projectId가 일치하는 팀을 찾고, 해당 팀의 멤버 중 review가 있는 멤버만 필터링합니다.
    const reviews = memberData.season1
        .concat(memberData.season2) // 모든 season 데이터 합치기
        .find(team => team.projectId === projectId) // 해당 projectId에 해당하는 팀 찾기
        ?.members.filter(member => member.review); // 멤버 중 리뷰가 있는 멤버만 필터링

    // 리뷰가 없을 때
    if (!reviews || reviews.length === 0) {
        return <p>리뷰가 없습니다.</p>;
    }

    return (
        <div className="detail-container" style={{ paddingBottom: "85px" }}>
            <div className="text-align-center padding85-0">
                <h2 className="font-size-36 weight-700" style={{ color: "#FFFFFF" }}>프로젝트 후기</h2>
            </div>
            <div style={{paddingBottom: '85px'}}>
                {reviews.map((reviewer, index) => (
                    <div key={index} className="review-card representative-color">
                        <div className="reviewer-avatar">
                            <img src={reviewImg} alt="리뷰 사진" className="review-img" />
                        </div>
                        <div className="review-content ">
                            <h3 className="reviewer-name">{reviewer.memberName} <span className="font-size-14 representative-color">{Array.isArray(reviewer.memberRole) ? reviewer.memberRole.join(', ') : reviewer.memberRole}</span></h3>
                            <p className="review-text">{reviewer.review}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProjectReview;
