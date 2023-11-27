import TeamMember from "./member";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Developer",
      image: "john.jpg",
      description: "lorem ipsum ",
    },
   
    {
      name: "Jane Smith",
      position: "Designer",
      image: "jane.jpg",
      description: "lorem ipsum ",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      image: "/images/Free Photo _ Desk with a laptop, a cup of coffee and a calendar.jpeg",
      description: "lorem ipsum ",
    },
    

    // Add more team members as needed
  ];

  return (
    <section className='management'>
      <h4>Meet our managing team</h4>
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
  );
};

export default Team;
