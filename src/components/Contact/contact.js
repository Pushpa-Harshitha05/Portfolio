import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  const serviceID = 'service_hyz9flq';
  const templateID = 'template_zwj2ffw';
  const publicKey = 'GamezMnodaSIpdqMG';

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    title: "Contact Us Message", // matches {{title}} in your template
  };

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    });
};


  return (
    <section id="contact" className="contact-section">
      <div className="upper-text">
        <div className="contact-title">Contact Me</div>
        <p className="contact-description">
            Have questions or want to work together? Drop me a message below.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
