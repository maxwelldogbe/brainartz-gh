const TeamMember = ({ name, position, image, description }) => {
    return (
      <div className="team-member">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    );
  };
  
  export default TeamMember;