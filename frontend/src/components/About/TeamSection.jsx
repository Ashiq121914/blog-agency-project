import React, { useState, useEffect } from "react";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "John Doe",
      role: "Lead Developer",
      bio: "John is passionate about building scalable web applications.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      bio: "Jane loves crafting user-friendly designs and beautiful interfaces.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mark Johnson",
      role: "Backend Engineer",
      bio: "Mark specializes in creating powerful and efficient server-side applications.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sara Lee",
      role: "Project Manager",
      bio: "Sara ensures smooth project delivery and helps coordinate team efforts.",
      image:
        "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  //   useEffect(() => {
  //     // Example: Fetching team members data (this would be dynamic data from your backend or API)
  //     fetch("/api/team") // Replace with your actual API endpoint
  //       .then((response) => response.json())
  //       .then((data) => setTeamMembers(data))
  //       .catch((error) => console.error("Error fetching team data:", error));
  //   }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
          Meet Our Team
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-500">
              Loading...
            </div>
          ) : (
            teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={
                    member.image ||
                    "https://images.unsplash.com/photo-1593642634315-2488f3d564da"
                  } // fallback image from Unsplash
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-500">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
