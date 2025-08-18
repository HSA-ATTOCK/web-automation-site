import "../styles/about.css";
import TeamMember from "../components/common/TeamMember";

const About = () => {
  //   const teamMembers = [
  //     {
  //       id: 1,
  //       name: "Alex Johnson",
  //       role: "Automation Specialist",
  //       bio: "8+ years building business automations that save thousands of hours.",
  //       image: "/images/team-alex.jpg",
  //     },
  //     {
  //       id: 2,
  //       name: "Sarah Chen",
  //       role: "Web Developer",
  //       bio: "Creates high-converting websites that work seamlessly with automations.",
  //       image: "/images/team-sarah.jpg",
  //     },
  //     {
  //       id: 3,
  //       name: "Mike Rodriguez",
  //       role: "Customer Success",
  //       bio: "Ensures every client gets maximum value from our solutions.",
  //       image: "/images/team-mike.jpg",
  //     },
  //   ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>We Believe in the Power of Automation</h1>
          <p>
            Our mission is to help small businesses compete by automating
            repetitive tasks and building effective digital systems.
          </p>
        </div>
      </section>

      <section className="our-story section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p>
              Founded in 2018, we started by automating our own agency's
              workflows. After seeing how much time we saved, we began offering
              these solutions to clients.
            </p>
            <p>
              Today, we've helped over 200 businesses reclaim more than 50,000
              hours of lost productivity through smart automation.
            </p>
            <p>
              We're not just tech experts - we're business owners who understand
              your challenges.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="team section">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default About;
