import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactMe from '../assets/icons/ContactMe'; // Assuming this is your Lottie animation component

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS details
    const serviceId = 'service_uev57th';
    const templateId = 'template_m0nc2s3';
    const userId = 'tyJPby7MQ_QBcrS6b';

    setIsSending(true); // Show a loading state

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset the form
          setIsSending(false); // Hide the loading state
        },
        (error) => {
          console.log(error)
          alert('Failed to send message. Please try again.');
          setIsSending(false); // Hide the loading state
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      {/* Lottie Animation Section */}
      <div className="flex items-center justify-center">
        <ContactMe style={{ width: '500px', height: '500px' }} />
      </div>

      {/* Contact Form Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name / Company Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
            disabled={isSending} // Disable button while sending
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
