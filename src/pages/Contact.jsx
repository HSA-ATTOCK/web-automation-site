import { useRef, useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value || "", // optional
      business: e.target.business.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        "https://haider530.app.n8n.cloud/webhook/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to send");

      setStatusType("success");
      setStatusMessage(
        "✅ Thank you for your message! We’ll contact you soon."
      );
      formRef.current.reset();
    } catch (error) {
      console.error("❌ Error:", error);
      setStatusType("error");
      setStatusMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>
            Ready to automate your business? Contact us for a free consultation.
          </p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="business">Business Type *</label>
                  <input type="text" id="business" name="business" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How Can We Help? *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>

                {/* Inline Status Message */}
                {statusMessage && (
                  <div
                    className={`status-message ${
                      statusType === "success" ? "success" : "error"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <h3>Email</h3>
                <p>hello@autosolutions.com</p>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="info-item">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9am - 5pm EST</p>
              </div>
              <div className="info-item">
                <h3>Free Audit</h3>
                <p>
                  Book a 15-minute call to identify automation opportunities in
                  your business.
                </p>
                <a href="#" className="btn btn-outline">
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
