import "../../styles/teamMember.css";

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p className="bio">{member.bio}</p>
    </div>
  );
};

export default TeamMember;
