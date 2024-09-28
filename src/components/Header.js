import React from "react";
import '../css/style.css'
import vectorRight from '../images/icon/vector_right_white.png'
import { Link } from "react-scroll";
import {useLocation} from "react-router-dom";

const Header = ({ style = {background: "rgb(0 0 0 / 8%)"} }) => {
    const location = useLocation();

    return (
        <header className="padding-20" style={{...style}}>
            <nav>
                <ul className="display-flex justify-between margin-0">
                    <li>
                        <a className="color-white frank-800 font-size-18" href="/">DEVELOPER</a>
                    </li>

                    <div className="display-flex gap-1r">
                        <li>
                            <Link
                                to="About"
                                smooth={true}
                                duration={500}
                                className="color-white weight-400 hover-color-blue60 hover-pointer"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <a className={`hover-color-blue60 
                          ${location.pathname.startsWith('/member') ? 'color-blue weight-500' : 'color-white weight-400'}`}
                               href="/member">Member</a>
                        </li>
                        <li>
                            <a className={`hover-color-blue60 
                          ${location.pathname.startsWith('/project') ? 'color-blue weight-500' : 'color-white weight-400'}`}
                               href="/project">Project</a>
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



export default Header;