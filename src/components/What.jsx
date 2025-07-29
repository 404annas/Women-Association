import React from "react";
import { FaUsers } from "react-icons/fa";

const What = () => {
  return (
    <div className="bg-white px-16 py-10 flex items-center">
      <div className="w-1/2">
        <img className="rounded-3xl"
          src="https://www.apwa.org.au/images/fb-post-1.jpg"
          alt="What We Do"
        />
      </div>
      <div className="w-1/2 pl-10">
        <h1 className="tim text-4xl font-extrabold text-[#413C3A]">
          What APWA Do?
        </h1>
        <p className="p-regular text-base text-gray-700 py-10">
          At APWA we are committed to{" "}
          <span className="text-gray-800 font-semibold">
            empowering women to achieve
          </span>{" "}
          their full potential through active engagement in business,
          employment, learning, and community activities.
        </p>
        <p className="p-regular text-base text-gray-700 pb-10">
          To fulfil our mission, we strive to provide a safe space for women to
          openly discuss their challenges, offering opportunities and platforms
          for skill and knowledge development. Through strategic initiatives,
          mentorship programs, and collaborative partnerships, we aim to
          dismantle barriers hindering their progress.
        </p>
        <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-4 py-2 rounded p-regular text-white flex items-center justify-center gap-3">
          Join Us{" "}
          <span>
            <FaUsers />
          </span>
        </button>
      </div>
    </div>
  );
};

export default What;
