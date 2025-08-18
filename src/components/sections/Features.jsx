import "../../styles/features.css";

const features = [
  {
    title: "Time Saving",
    description: "Automate repetitive tasks and save hours every week.",
    icon: "⏱️",
  },
  {
    title: "Fewer Mistakes",
    description: "Eliminate human errors in data entry and follow-ups.",
    icon: "✅",
  },
  {
    title: "More Sales",
    description: "Websites that convert and automations that follow up.",
    icon: "📈",
  },
  {
    title: "Simple Pricing",
    description: "Clear packages with measurable ROI.",
    icon: "💰",
  },
];

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <h2 className="section-title">Why Choose Our Solutions</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
