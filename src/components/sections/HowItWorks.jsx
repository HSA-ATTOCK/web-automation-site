import "../../styles/howItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We identify your biggest time-wasters in a 15-minute call.",
    },
    {
      number: "2",
      title: "Custom Solution",
      description: "We design automations tailored to your specific needs.",
    },
    {
      number: "3",
      title: "Quick Implementation",
      description: "Your first automation goes live within 1 week.",
    },
    {
      number: "4",
      title: "Scale Up",
      description: "We add more automations as you see the results.",
    },
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
