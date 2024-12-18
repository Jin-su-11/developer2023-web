 /**
  * ContactWidget
  * @since 2024.9.12
  * @author 임석진
  */

 import React, { useEffect, useRef, useState } from "react";
 import { Link } from "react-router-dom";
 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
 import memberData from "../data/member.json";
 import "../css/style.css";
 import "../css/practice.css";
 import "../css/team.css";

 gsap.registerPlugin(ScrollTrigger);

 const Team = () => {
     const [season, setSeason] = useState("season2");
     const [teams, setTeams] = useState([]);
     const sectionRef = useRef(null);
     const headerRef = useRef(null);
     const totalMembersRef = useRef(null);
     const linkRefs = useRef([]);

     const totalMembers =
         memberData["season1"].reduce((acc, team) => acc + team.members.length, 0) +
         memberData["season2"].reduce((acc, team) => acc + team.members.length, 0);

     useEffect(() => {
         if (season === "season1") {
             setTeams(memberData["season1"]);
         } else {
             setTeams(memberData["season2"]);
         }
     }, [season]);

     useEffect(() => {
         gsap.fromTo(
             headerRef.current,
             { opacity: 0, y: -50 },
             {
                 opacity: 1,
                 y: 0,
                 duration: 1,
                 ease: "power3.out",
                 scrollTrigger: {
                     trigger: headerRef.current,
                     start: "top 80%",
                     toggleActions: "play none none reverse",
                 },
             }
         );

         gsap.fromTo(
             totalMembersRef.current,
             { opacity: 0, scale: 0.8 },
             {
                 opacity: 1,
                 scale: 1,
                 duration: 1,
                 ease: "power3.out",
                 scrollTrigger: {
                     trigger: totalMembersRef.current,
                     start: "top 80%",
                     toggleActions: "play none none reverse",
                 },
             }
         );

         linkRefs.current.forEach((el, index) => {
             gsap.fromTo(
                 el,
                 { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                 {
                     opacity: 1,
                     x: 0,
                     duration: 1,
                     ease: "power3.out",
                     scrollTrigger: {
                         trigger: el,
                         start: "top 85%",
                         toggleActions: "play none none reverse",
                     },
                 }
             );
         });
     }, [teams]);

     const handleSeasonChange = (newSeason) => {
         setSeason(newSeason);
     };

     return (
         <div className="text-align-center padding100-0" ref={sectionRef}>
             <div className="display-flex flex-direction-column align-items-center gap-1r margin-bottom-60"
                 ref={headerRef}>
                 <h2 className="font-size-36 weight-700 color-white">
                     함께 할수록 즐거운 성장
                 </h2>
                 <p className="weight-500 color-white font-size-22">
                     즐거운 개발 여정을 디벨로퍼와 함께 해 보세요!
                 </p>
             </div>

             <div className="season-selector">
                 <h2
                     className={`season ${season === "season2" ? "active" : ""}`}
                     onClick={() => handleSeasonChange("season2")}
                 >
                     SEASON2
                 </h2>
                 <h2
                     className={`season ${season === "season1" ? "active" : ""}`}
                     onClick={() => handleSeasonChange("season1")}
                 >
                     SEASON1
                 </h2>
             </div>

             <div className="team-section3">
                 {teams.map((team, index) => (
                     <Link
                         to="/member"
                         key={index}
                         className="member-card"
                         ref={(el) => (linkRefs.current[index] = el)}
                     >
                         <span className="team-name1">{team.teamName}</span>
                         <span className="team-members">{team.members.length}명</span>
                     </Link>
                 ))}
             </div>

             <div
                 className="margin-top-30 text-align-center"
                 ref={totalMembersRef}
             >
                 <p className="font-size-24 weight-700 color-light-gray-third">누적 활동 인원</p>
                 <h2 className="font-size-42 weight-700 color-white padding-bottom-20">총 {totalMembers}명</h2>
                 <a href="/member" className="font-size-16 weight-500 color-gray">
                     더 보러가기 >
                 </a>
             </div>
         </div>
     );
 };

 export default Team;

