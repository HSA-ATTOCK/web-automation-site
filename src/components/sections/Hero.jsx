import "../../styles/hero.css";
import heroImage from "../../images/hero-image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Automate Your Business, Grow Your Revenue</h1>
          <p>
            We help busy owners save time and get more sales by automating
            repetitive tasks and building websites that convert.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn btn-primary">
              Get Free Audit
            </a>
            <a href="#how-it-works" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Business automation illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
