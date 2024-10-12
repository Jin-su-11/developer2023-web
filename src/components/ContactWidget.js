import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentDots } from '@fortawesome/free-solid-svg-icons';  // Font Awesome 아이콘

/**
 * ContactWidget
 * @since 2024.10.10
 * @author 임석진
 */

const ContactWidget = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);

    // 위젯 클릭 시 연락처 카드 표시/숨김
    const toggleCardVisibility = () => {
        setIsCardVisible(!isCardVisible);
    };

    return (
        <>
            {/* 메일 버튼 */}
            <div style={styles.widgetButton} onClick={toggleCardVisibility}>
                <FontAwesomeIcon icon={faEnvelope} style={styles.mailIcon} />
            </div>

            {/* 연락처 카드 */}
            {isCardVisible && (
                <div style={styles.cardContainer}>
                    <div style={styles.cardBox}>
                        <h2 style={styles.header}>DEVELOPER</h2>
                        <div style={styles.profileCard}>
                            <div style={styles.profileImagePlaceholder}></div>
                            <div style={styles.infoContainer}>
                                <p style={styles.name}>관리자</p>
                                <p style={styles.contact}>010-1234-5678</p>
                                <p style={styles.email}>ee@email.com</p>
                            </div>
                        </div>
                        <div style={styles.inquiryWrapper}>
                            {/* 하나의 버튼 안에 아이콘과 텍스트를 배치 */}
                            <button style={styles.inquiryButton}>
                                <FontAwesomeIcon icon={faCommentDots} style={styles.inquiryIconInButton} />
                                동아리 가입/활동 문의
                            </button>
                        </div>
                        <button style={styles.closeButton} onClick={toggleCardVisibility}>X</button>
                    </div>
                </div>
            )}
        </>
    );
};

// 스타일 정의
const styles = {
    widgetButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        backgroundColor: '#a852ff',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    mailIcon: {
        color: 'white',
        fontSize: '30px',
    },
    cardContainer: {
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        width: '250px',
        padding: '20px',
        background: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '360px',
    },
    cardBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    header: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: '"Times New Roman", Times, serif',
        color: '#333',
        marginBottom: '30px',  // 하단 여백 유지
    },
    profileCard: {
        background: 'linear-gradient(180deg, #f5e5ff 0%, #d8ecff 100%)',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '130px',
        marginBottom: '35px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profileImagePlaceholder: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#ddd',
        marginBottom: '10px',
    },
    infoContainer: {
        textAlign: 'center',
    },
    name: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    contact: {
        fontSize: '14px',
        marginBottom: '5px',
    },
    email: {
        fontSize: '14px',
        marginBottom: '15px',
    },
    inquiryWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    inquiryButton: {
        backgroundColor: '#a852ff',
        color: 'white',
        border: 'none',
        padding: '12px 25px',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: '1',
        display: 'flex',
        alignItems: 'center',  // 아이콘과 텍스트를 같은 라인에 정렬
    },
    inquiryIconInButton: {
        fontSize: '20px',
        color: 'white',
        marginRight: '8px',  // 아이콘과 텍스트 간격
    },
    closeButton: {
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        width: '30px',
        height: '30px',
        borderRadius: '5px',
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        cursor: 'pointer',
    },
};

export default ContactWidget;
