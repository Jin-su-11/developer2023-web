import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../css/mainbanner.css';

/**
 * ContactWidget
 * @since 2024.10.10
 * @author 임석진
 */

const MainBackground = () => {
    const text = `if user == "developer":\n` +
        `    input("Keep coding,\n` +
        `           keep learning,\n` +
        `           keep growing!")\n` +
        `    print("Success is your life!")\n` +
        `else:\n` +
        `    print("Curiosity is the first step.")`;

    return (
        <div className="main-background">
            <div className="left-container">
                <p className="white-text">개발을 통해 성장하는 우리들의 이야기</p>
                <div className="developer-text">DEVELOPER</div>
            </div>

            <div className="right-container">
                <div className="code-output fade-in">
                    <pre
                        style={{
                            position: "relative",
                            color: "rgba(88, 237, 36, 0.52)",
                            fontFamily: "'Frank Ruhl Libre', serif",
                            fontSize: "56px",
                            fontStyle: "normal",
                            fontWeight: 900,
                            lineHeight: "normal",
                            zIndex: 10
                        }}
                    >
                        <Typewriter
                            words={[text]}
                            loop={1}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default MainBackground;
