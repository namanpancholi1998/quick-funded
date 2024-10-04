import React from "react";
import { FaDiscord } from "react-icons/fa";

function JoinCommunity() {
  return (
    <div className="max-w-[1428]  bg-gradient-to-r from-lime-400 to-green-600 rounded-3xl p-24 px-64 text-center text-white shadow-lg mb-10">
      <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
      <p className="mb-8 text-lg">
        Join our global trader community to share and gain market insights with
        traders worldwide
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-white text-green-600 px-6 py-3 rounded-full flex items-center font-semibold hover:bg-gray-100 transition-colors">
          <FaDiscord className="mr-2 text-xl" />
          Join Discord
        </button>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Buy Challenge
        </button>
      </div>
    </div>
    // </div>
  );
}

export default JoinCommunity;
