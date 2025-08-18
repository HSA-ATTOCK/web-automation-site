import "../../styles/cta.css";

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Automate Your Business?</h2>
          <p className="cta-text">
            Stop wasting time on repetitive tasks. Let's build custom
            automations that save you hours each week.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Get Started Today
            </a>
            <a href="#how-it-works" className="btn btn-outline">
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
