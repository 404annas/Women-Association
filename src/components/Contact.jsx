import { FaHeart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-100 to-cyan-50 min-h-screen px-16 pt-36">
      <p className="flex items-center pb-2 text-4xl font-bold cav">
        <span className="text-green-700">
          <FaHeart />
        </span>
        APWA{" "}
      </p>
      <h1 className="tim text-7xl font-extrabold">Contact Us</h1>
      <p className="p-regular text-2xl max-w-2xl pt-4 text-gray-800">
        May it be{" "}
        <span className="text-gray-900 font-bold">
          feedback, ideas, or support…
        </span>
      </p>
      <p className="pb-2 pt-2 p-regular text-md max-w-2xl text-gray-800">
        We would love to hear from you! Get in touch by filling out the contact
        form or calling us on our office number.
      </p>
      <a href="tel:+61 415724571">
        <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 flex items-center gap-2">
          Make a Call{" "}
          <span>
            <IoMdCall />
          </span>
        </button>
      </a>

      {/* Contact Form Section */}
      <div className="mt-20 pb-10 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Form */}
        <form className="flex flex-col gap-3 w-full p-normal">
          <label className="font-medium text-gray-800">Name</label>
          <div className="flex">
            <span className="flex items-center px-3 text-sm text-gray-900 bg-emerald-200 border border-e-0 border-emerald-300 rounded-s-md">
              <svg
                className="w-5 h-5 text-emerald-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              className="w-full text-black border border-emerald-300 outline-none px-4 py-2 rounded-r-md bg-emerald-100"
              placeholder="John Doe"
            />
          </div>

          <label className="font-medium text-gray-800">Email</label>
          <div className="flex">
            <span className="flex items-center px-3 text-sm text-gray-900 bg-emerald-200 border border-e-0 border-emerald-300 rounded-s-md">
              <svg
                className="w-5 h-5 text-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.236l7.385 5.905a1 1 0 0 0 1.23 0L20 8.236V18H4Z" />
              </svg>
            </span>
            <input
              type="email"
              className="w-full text-black border border-emerald-300 outline-none px-4 py-2 rounded-r-md bg-emerald-100"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <label className="font-medium text-gray-800">Phone Number</label>
          <div className="flex">
            <span className="flex items-center px-3 text-sm text-gray-900 bg-emerald-200 border border-e-0 border-emerald-300 rounded-s-md">
              <svg
                className="w-5 h-5 text-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .56 2.57 2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6.09 6.09l1.51-1.11a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.56A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <input
              type="phone"
              className="w-full text-black border border-emerald-300 outline-none px-4 py-2 rounded-r-md bg-emerald-100"
              placeholder="+1 (555) 971 569"
            />
          </div>

          <label className="font-medium text-gray-800">Message</label>
          <textarea
            rows="5"
            placeholder="Hi, I want to Donate some Amount"
            className="text-black border border-emerald-300 outline-none px-4 py-2 rounded bg-emerald-100 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 transition-all duration-300 text-white py-2 px-4 rounded mt-2 flex items-center gap-2 w-fit text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
            Send Message
          </button>
        </form>

        {/* Right: Image */}
        <img
          src="https://www.apwa.org.au/images/contact-banner.jpg"
          alt="Contact illustration"
          className="w-full h-full object-cover rounded shadow-md"
        />
      </div>

      <hr />
      <div className="py-10">
        <h1 className="p-regular text-lg text-gray-700 max-w-2xl">
          We empower Pakistani and multicultural women in Australia to achieve
          independence and well-being across all aspects of life—physical,
          mental, spiritual, and financial.
        </h1>
        <div className="flex items-center justify-between pt-10 gap-10">
          <div className="flex flex-col items-center gap-2 w-1/3 bg-emerald-100 border border-emerald-300 px-4 py-4 rounded-xl h-56">
            <p className="text-4xl text-green-800">
              <MdEmail />
            </p>
            <h1 className="text-2xl font-bold text-gray-800 tim">Email</h1>
            <p className="p-normal text-center">
              Write us and we'll get back to you as soon as possible.
            </p>
            <a href="mailto:info@auspakwomenassociation.com">
              <p className="p-regular text-gray-800 text-center cursor-pointer">
                info@auspakwomenassociation.com
              </p>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/3 bg-emerald-100 border border-emerald-300 px-4 py-4 rounded-xl h-56">
            <p className="text-4xl text-green-800">
              <IoMdCall />
            </p>
            <h1 className="text-2xl font-bold text-gray-800 tim">Phone</h1>
            <p className="p-normal text-center">
              Give us a call and let's have a conversation.
            </p>
            <a href="tel:+61 415724571">
              <p className="p-regular text-gray-800 cursor-pointer">
                +61 415724571
              </p>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/3 bg-emerald-100 border border-emerald-300 px-4 py-4 rounded-xl h-56">
            <p className="text-4xl text-green-800">
              <IoLocation />
            </p>
            <h1 className="text-2xl font-bold text-gray-800 tim">Address</h1>
            <p className="p-normal text-center">
              7 Campfire Ct, Werrington Downs NSW 2747, Australia
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* Map Section */}
      <div className="mt-16 pb-10">
        <iframe
          title="APWA Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.009221171784!2d150.7406142!3d-33.7409119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b128516e1e3ffff%3A0x98e5ba6ba6012db0!2sAuspak%20Women%20Association!5e0!3m2!1sen!2sau!4v1689451096790!5m2!1sen!2sau"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
