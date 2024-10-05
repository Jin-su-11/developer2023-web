import React from 'react';

const TeamBox = ({ team }) => {
    return (
        <div className="team-card">
            <h3 className="team-name">{team.teamName}</h3>
            <span className="team-members">{team.members.length}명</span>
            <div className="member-list">
                {team.members.map((member) => (
                    <div key={member.id} className="member-item">
                        <span className="member-name">{member.memberName}</span>
                        <span className="member-role">
                            {Array.isArray(member.memberRole) ? (
                                member.memberRole.join(', ')
                            ) : (
                                member.memberRole || '역할 미정'
                            )}
                        </span>
                        <div className="member-icons">
                            {member.githubUrl && (
                                <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
                            )}
                            {member.otherLink && (
                                <a href={member.otherLink} target="_blank" rel="noopener noreferrer">Other</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamBox;
