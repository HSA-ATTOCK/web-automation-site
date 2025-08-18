import "../../styles/serviceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h3>{service.title}</h3>
      <p className="description">{service.description}</p>
      <ul className="features">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="price">{service.price}</div>
      <a href="/contact" className="btn btn-outline">
        Get Started
      </a>
    </div>
  );
};

export default ServiceCard;
