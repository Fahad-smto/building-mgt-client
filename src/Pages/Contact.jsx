// src/components/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20 font-urbanist">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question, issue, or request? Reach out to us and we’ll get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-xl p-8 space-y-6 text-gray-700">
            <h3 className="text-2xl font-semibold text-blue-700">Our Office</h3>
            <p>
              <strong>Address:</strong><br />
              TowerTrack Building, 5th Floor, Block-B<br />
              Gulshan Avenue, Dhaka 1212, Bangladesh
            </p>
            <p>
              <strong>Phone:</strong><br />
              +880 1234-567890
            </p>
            <p>
              <strong>Email:</strong><br />
              support@towertrack.com
            </p>
            <p>
              <strong>Hours:</strong><br />
              Sunday – Thursday: 9 AM – 6 PM<br />
              Friday – Saturday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
