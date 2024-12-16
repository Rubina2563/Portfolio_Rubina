import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import ContactMe from '../assets/icons/ContactMe'; // Assuming this is your Lottie animation component

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const zeroBounceApiKey = "99006f1cc1c24579a863a7877eddd2fc"; // Replace with your ZeroBounce API key

  setIsSending(true); // Show a loading state

  // Validate the email using ZeroBounce API
  try {
    const response = await fetch(
      `https://api.zerobounce.net/v2/validate?api_key=${zeroBounceApiKey}&email=${formData.email}`
    );
    const data = await response.json();

    if (data.status !== "valid") {
      toast.error('Invalid email address. Please check and try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSending(false); // Hide the loading state
      return; // Exit the function as the email is invalid
    }
  } catch (error) {
    console.error("Email validation error:", error);
    toast.error('Error validating email. Please try again later.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setIsSending(false); // Hide the loading state
    return;
  }

  // Proceed with sending the email using EmailJS
  emailjs
    .send(
      "service_uev57th", // Replace with your EmailJS service ID
      "template_m0nc2s3", // Replace with your EmailJS template ID
      formData, // The form data object
      "tyJPby7MQ_QBcrS6b" // Replace with your EmailJS user ID
    )
    .then(
      (response) => {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({ name: '', email: '', message: '' }); // Reset the form
        setIsSending(false); // Hide the loading state
      },
      (error) => {
        console.error(error);
        toast.error('Failed to send message. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsSending(false); // Hide the loading state
      }
    );
};


  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 items-center justify-center gap-8 p-8">
      {/* Lottie Animation Section */}
       <h1 className="text-3xl font-bold text-center text-white mb-8">
    Send me your message
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">  <div className="flex items-center justify-center">
        <ContactMe   style={{
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
  }}/>
      </div>

      {/* Contact Form Section */}
     <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 md:w-1/2">
  <h2 className="text-2xl font-bold mb-4 text-center text-white">
    Contact Me
  </h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name / Company Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      rows="4"
      required
    ></textarea>
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition w-full"
      disabled={isSending} // Disable button while sending
    >
      {isSending ? 'Sending...' : 'Send Message'}
    </button>
  </form>
</section> <ToastContainer /></div>
    

    </div>
  );
};

export default Contact;
