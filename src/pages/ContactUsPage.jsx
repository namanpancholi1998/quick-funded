import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUsPage = () => {
  const [isExistingClient, setIsExistingClient] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
      {/* Left side - Contact Information and Map */}
      <div className="md:w-1/2 pr-8">
        <h2
          className="text-[60px] font-bold text-start bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4 -mx-20 ml-1"
        >
          Lets talk
        </h2>
        <p className="text-gray-600 mb-8">
          If you have any question about our challenges or are not sure which
          plan is right for you, contact our team and lets schedule a call.
        </p>

        <div className="flex mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center mr-4">
            <Phone className="w-4 h-4 mr-2" />
            Call us
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            Email us
          </button>
        </div>

        <div className="text-sm text-gray-500">+44 (0) 7307577966</div>
        <div className="text-sm text-gray-500 mb-8">
          support@quick-funded.io
        </div>

        <h3 className="text-xl font-semibold mb-2">Our office</h3>
        <div className="flex items-start mb-4">
          <MapPin className="w-5 h-5 mr-2 text-gray-400 mt-1" />
          <div>
            <p>128 City Road</p>
            <p>LONDON EC1V 2NX</p>
            <p>UNITED KINGDOM</p>
          </div>
        </div>

        {/* Map Image */}
        <div className="mt-4 rounded-lg overflow-hidden shadow-md">
          <img
            src="/api/placeholder/600/300"
            alt="Office Location Map"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="md:w-1/2 bg-[#99fb07] shadow-lg p-8 rounded-lg mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2">
              Are you an existing client?
            </label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  name="existingClient"
                  checked={isExistingClient}
                  onChange={() => setIsExistingClient(true)}
                  className="mr-2"
                />
                <span className="text-white">Yes</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="existingClient"
                  checked={!isExistingClient}
                  onChange={() => setIsExistingClient(false)}
                  className="mr-2"
                />
                <span className="text-white">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              placeholder="First and last name"
              className="w-full p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Phone Number</label>
            <div className="flex">
              <select className="p-2 rounded-l" style={{ width: "80px" }}>
                <option value="+91">🇮🇳 +91</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                placeholder="Enter your phone no."
                className="w-full p-2 rounded-r"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Message</label>
            <textarea
              placeholder="Write your message"
              className="w-full p-2 rounded"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-green-500 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
