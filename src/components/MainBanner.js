import React from "react";
import mainBack from "../images/backgroundAndPicture/main_back.png";

/**
 * MainBanner
 * @since 2024.09.09
 * @author 권민지
 */
const MainBanner = () => {
    return (
        <div className="main-banner width100 position-absolute z-index--100" style={{height: "800px", top: 0}}>
            <div className="text-align-center align-content-around">
                <h1 className="frank-800 color-white font-size-60">DEVELOPER</h1>
                <p className="color-white weight-400">개발을 통해 성장하는 우리들의 이야기</p>
            </div>
        </div>
    );
}

export default MainBanner;