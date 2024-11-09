import React, { useRef, useEffect } from 'react';
import kakaoLogo from '../images/backgroundAndPicture/kakao_logo.png';
import paperPlaneImage from '../images/backgroundAndPicture/paper_plane.png';
import chatIconImage from '../images/backgroundAndPicture/chat_icon.png';

const JoinWidget = ({ onClose }) => {
    const cardRef = useRef(null);

    // 현재 날짜를 기준으로 11월 또는 12월이면 모집 기간으로 설정
    const currentMonth = new Date().getMonth() + 1; // 0부터 시작하므로 +1
    const isJoinPeriod = currentMonth === 11 || currentMonth === 12;

    // 카드 외부 클릭 시 카드 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={cardRef} style={styles.cardContainer}>
            {isJoinPeriod ? (
                <>
                    <img src={chatIconImage} alt="Chat Icon" style={styles.iconImage} />
                    <h2 style={styles.header}>부원 모집 중 이에요!</h2>
                    <p style={styles.description}>
                        저희는 언제나 여러분을 기다리고 있습니다. 함께 즐거운 개발 여정에 참여하고 싶으시다면, 주저하지 말고 아래 연락처나 카카오 오픈 채팅으로 연락 주세요!
                    </p>
                    <div style={styles.contactBox}>
                        <span style={styles.contactText}>010-0000-0000</span>
                    </div>
                    <a
                        href="https://open.kakao.com/o/g9e5BCWg"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.kakaoButton}
                    >
                        <img src={kakaoLogo} alt="KakaoTalk" style={styles.kakaoIcon} />
                        카카오톡으로 문의하기
                    </a>
                </>
            ) : (
                <>
                    <img src={paperPlaneImage} alt="Paper Plane" style={styles.iconImage} />
                    <h2 style={styles.header}>지금은 모집 기간이 아니에요!</h2>
                    <p style={styles.description}>
                        모집 기간이 궁금하시다면 문의를 해 주세요.
                    </p>
                </>
            )}
            <button style={styles.closeButton} onClick={onClose}>X</button>
        </div>
    );
};

// 스타일 정의
const styles = {
    cardContainer: {
        width: '441px',
        height: '441px',
        padding: '20px',
        background: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        position: 'relative',
    },
    iconImage: {
        width: '100px', // 원하는 크기로 설정
        height: '100px',
        marginBottom: '15px',
    },
    header: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    },
    description: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '20px',
    },
    contactBox: {
        backgroundColor: '#f0f0f0',
        padding: '10px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    contactText: {
        fontSize: '16px',
        color: '#333',
    },
    kakaoButton: {
        backgroundColor: '#fee500',
        color: 'black',
        textDecoration: 'none',
        padding: '12px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    kakaoIcon: {
        width: '20px',
        marginRight: '10px',
    },
    closeButton: {
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        width: '30px',
        height: '30px',
        borderRadius: '5px',
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    },
};

export default JoinWidget;

