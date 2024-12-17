import React from 'react';
import memberData from '../data/member.json';
import reviewImg from "../images/practice/review_img.png";
import "../css/style.css";


/**
 * ProjectReview 컴포넌트
 * @author 김진수
 * @since 2024.10.31
 * @lastmodified 2024.11.01
 */

const ProjectReview = ({ projectId }) => {
    const reviews = memberData.season1
        .concat(memberData.season2)
        .find(team => team.projectId === projectId)
        ?.members.filter(member => member.review);

    if (!reviews || reviews.length === 0) {
        return <p>리뷰가 없습니다.</p>;
    }

    return (
        <div className="detail-container" style={{ paddingBottom: "85px" }}>
            <div className="text-align-center padding85-0">
                <h2 className="font-size-36 weight-700" style={{ color: "#FFFFFF" }}>프로젝트 후기</h2>
            </div>
            <div style={{ paddingBottom: '85px' }}>
                {reviews.map((reviewer, index) => (
                    <div key={index} className="review-card representative-color">
                        <div className="reviewer-avatar">
                            <img src={reviewImg} alt="리뷰 사진" className="review-img" />
                        </div>
                        <div className="review-content">
                            <h3 className="reviewer-name">
                                {reviewer.memberName}{" "}
                                <span className="font-size-14 representative-color">
                                    {Array.isArray(reviewer.memberRole) ? reviewer.memberRole.join(', ') : reviewer.memberRole}
                                </span>
                            </h3>
                            <p className="review-text">
                                {reviewer.review.split('\n').map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectReview;
