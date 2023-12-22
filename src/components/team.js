import TeamMember from "./member";

const Team = () => {
  const teamMembers = [
    {
      name: "Richard Babah Deladem",
      position: "Gen.Manager",
      image: "/images/Deladem.jpg",
      description: "Graphic & Textiles Designer",
    },
   
    {
      name: "Dogbe Maxwell",
      // position: "Designer",
      image: "jane.jpg",
      description: "Website & Software developer",
    }, 

    // Add more team members as needed
  ];

  return (
    <>
    <section className='management'>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default Team;
