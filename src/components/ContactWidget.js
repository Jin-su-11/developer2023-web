import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import kakaoLogo from '../images/backgroundAndPicture/kakao_logo.png';

const ContactWidget = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);
    const cardRef = useRef(null);

    const toggleCardVisibility = () => {
        setIsCardVisible(!isCardVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsCardVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div style={styles.widgetButton} onClick={toggleCardVisibility}>
                <FontAwesomeIcon icon={faEnvelope} style={styles.mailIcon} />
            </div>

            {isCardVisible && (
                <div ref={cardRef} style={styles.cardContainer}>
                    <h2 style={styles.header}>문의하기</h2>
                    <p style={styles.description}>문의사항이 있으실 경우 아래로 연락 주세요!</p>
                    <div style={styles.contactBox}>
                        <FontAwesomeIcon icon={faPhoneAlt} style={styles.contactIcon} />
                        <span style={styles.contactText}>010-5109-0625</span>
                    </div>
                    <a
                        href="https://open.kakao.com/o/s2BRO63g"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.kakaoButton}
                    >
                        <img src={kakaoLogo} alt="KakaoTalk" style={styles.kakaoIcon} />
                        카카오톡으로 문의하기
                    </a>
                    <button style={styles.closeButton} onClick={toggleCardVisibility}>X</button>
                </div>
            )}
        </>
    );
};

const styles = {
    widgetButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        backgroundColor: '#6200ea',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 9999,
    },
    mailIcon: {
        color: 'white',
        fontSize: '26px',
    },
    cardContainer: {
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        width: '300px',
        height: '190px',
        padding: '20px',
        background: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        zIndex: 9999,
    },
    header: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        fontSize: '14px',
        color: '#3B3B3B',
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
    contactIcon: {
        fontSize: '24px',
        marginRight: '10px',
        color: '#333',
    },
    contactText: {
        fontSize: '18px',
        color: '#191919',
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
        marginBottom: '20px',
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

export default ContactWidget;
