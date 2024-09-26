import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="display-flex-column gap-1r justify-center padding-70 width100"
                 style={{background: "rgb(34 47 63)"}}>
                <li>
                    <p className="color-white frank-800 font-size-24 text-align-center">DEVELOPER</p>
                </li>
                <p className="text-align-center weight-400 font-size-14 color-white"
                   style={{color: "#bdbdbd"}}>
                    &copy; {new Date().getFullYear()} DEVELOPER. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;