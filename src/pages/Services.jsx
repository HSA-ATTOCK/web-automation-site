import "../styles/services.css";
import ServiceCard from "../components/common/ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Fast, mobile-friendly websites designed to convert visitors into customers.",
      features: [
        "Custom design",
        "SEO optimized",
        "Contact forms",
        "Booking systems",
        "2-week delivery",
      ],
      //   price: "$2,500+",
    },
    {
      id: 2,
      title: "Business Automation",
      description: "Automate repetitive tasks to save time and reduce errors.",
      features: [
        "Workflow analysis",
        // "n8n/Make integrations",
        "Custom scripts",
        "Data sync between apps",
        "1-week implementation",
      ],
      //   price: "$1,200+",
    },
    {
      id: 3,
      title: "Complete System",
      description:
        "Website + automations working together for maximum results.",
      features: [
        "Website development",
        "Lead capture automation",
        "Follow-up sequences",
        "CRM integration",
        "Analytics dashboard",
      ],
      //   price: "$3,500+",
    },
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            We offer complete solutions to save you time and grow your business.
          </p>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <h3>1. Discovery</h3>
              <p>
                We identify your biggest time-wasters in a free 15-minute call.
              </p>
            </div>
            <div className="step">
              <h3>2. Proposal</h3>
              <p>You receive a custom plan with clear ROI calculations.</p>
            </div>
            <div className="step">
              <h3>3. Implementation</h3>
              <p>Your first automation goes live within 1 week.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
