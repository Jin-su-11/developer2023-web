import React from "react";
import '../css/style.css'
import vectorRight from '../images/icon/vector_right_white.png'

const Header = ({style}) => {
    return (
      <header className="padding-20" style={{...style}}>
          <nav>
              <ul className="display-flex justify-between margin-0">
                  <li>
                      <a className="color-white frank-800 font-size-18" href="/">DEVELOPER</a>
                  </li>

                  <div className="display-flex gap-1r">
                      <li>
                          <a className="color-white weight-400 hover-color-blue60" href="/">About</a>
                      </li>
                      <li>
                          <a className="color-white weight-400 hover-color-blue60" href="/member">Member</a>
                      </li>
                      <li>
                          <a className="color-white weight-400 hover-color-blue60" href="/project">Project</a>
                      </li>
                      <li>
                          <a className="color-white weight-400 hover-color-blue60" href="/">Contact</a>
                      </li>
                      <button className="custom-btn-primary color-white padding10-16 radius-8 weight-500 display-flex gap-5p hover-pointer hover-color-black10">
                          <p>가입하러 가기</p>
                          <img src={vectorRight} className="width-12" />
                      </button>
                  </div>
              </ul>
          </nav>
      </header>
    );
}

// 기본 프롭스 설정
Header.defaultProps = {
    style: {background: "rgb(0 0 0 / 8%)"}
}

export default Header;