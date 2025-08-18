import "../../styles/testimonials.css";
// import StarRating from '../common/StarRating';

// // In the testimonial card replace the rating div with:
// <StarRating rating={testimonial.rating} />

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Cafe Owner",
      content:
        "Automating our inventory and ordering saved us 15 hours a week! Now we can focus on our customers instead of spreadsheets.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Real Estate Agent",
      content:
        "The automated follow-up system has increased my lead conversion by 40%. Best investment I've made in my business.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Dental Clinic Manager",
      content:
        "No more missed appointments since implementing the automated reminders. Patients love the convenience too!",
      rating: 4,
    },
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
