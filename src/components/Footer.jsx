import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import footerImg from "../assets/FooterLogo.png";

const Footer = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div className="bg-cyan-50 pt-10">
        <div className="bg-gradient-to-b from-emerald-700 to-slate-700 mx-4 sm:mx-10 lg:mx-20 px-6 sm:px-10 rounded-t-3xl flex flex-col md:flex-row items-center gap-6 md:gap-10 py-10">
          <div className="text-center md:text-left">
            <h1 className="tel text-white text-3xl sm:text-4xl md:text-5xl">
              Empowering Women,
            </h1>
            <h1 className="tel text-white text-2xl sm:text-3xl md:text-4xl pt-1">
              Breaking the Silence
            </h1>
            <p className="p-regular text-gray-200 text-sm sm:text-base pt-4 max-w-xl mx-auto md:mx-0">
              We empower Pakistani and multicultural women in Australia to achieve
              independence and well-being across all aspects of life—physical,
              mental, spiritual, and financial.
            </p>
          </div>
          <img
            className="w-60 sm:w-72 md:w-96 lg:translate-y-[71px] object-contain"
            src={footerImg}
            alt="Footer Logo"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-cyan-50 px-4 sm:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About + Social */}
          <div className="flex flex-col items-start gap-4">
            <img
              className="w-20 sm:w-24 shadow-xl rounded-full"
              src="https://www.apwa.org.au/images/apwa-logo-circle.png"
              alt="Logo"
            />
            <p className="p-normal text-gray-800 text-sm leading-relaxed">
              Our goal is to provide women with the tools, education, and support
              they need to overcome obstacles, unlock their potential, and lead
              fulfilling lives.
            </p>
            <div className="flex gap-3 text-xl text-gray-800">
              <a href="https://x.com/AusPakWomen" className="bg-cyan-100 p-2 rounded-full">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/auspak-women-association/" className="bg-cyan-100 p-2 rounded-full">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/apwapromotions" className="bg-cyan-100 p-2 rounded-full">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/auspakwomen/" className="bg-cyan-100 p-2 rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:justify-center gap-3 text-gray-800 p-regular text-sm sm:text-base">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "APWA Save Heaven", path: "/save-heaven" },
              { name: "Donate", path: "/donate" },
              { name: "Events", path: "/events" },
              {
                name: "Volunteering",
                path: "https://apwa.org.au/resources/APWA-volunteer-form.pdf",
                external: true,
              },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path, external }) =>
              external ? (
                <a
                  key={name}
                  href={path}
                  className="hover:text-green-600 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className="hover:text-green-600 transition-all duration-300"
                >
                  {name}
                </Link>
              )
            )}
          </div>

          {/* Recent Events */}
          <div className="flex flex-col md:justify-center gap-5">
            {[
              {
                title: "International Women's Day",
                date: "Mar.16.2025",
                image: "https://www.apwa.org.au/images/womens-day-2025.jpg",
                link: "https://www.facebook.com/story.php?story_fbid=609032502122206&id=100090463843342",
              },
              {
                title: "Pink Stump Day",
                date: "Nov.30.2024",
                image: "https://www.apwa.org.au/images/pink-stump.jpg",
                link: "https://www.facebook.com/photo.php?fbid=532145479810909",
              },
              {
                title: "Breast Cancer Awareness",
                date: "Oct.04.2024",
                image: "https://www.apwa.org.au/images/breast-cancer.jpg",
                link: "https://www.facebook.com/story.php?story_fbid=490933003932157",
              },
            ].map(({ title, date, image, link }) => (
              <div key={title} className="flex gap-3 items-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={title} className="w-20 h-20 object-cover rounded-md" />
                </a>
                <div>
                  <h3 className="tim text-gray-800 text-sm sm:text-base font-semibold">{title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 p-normal">{date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-4 text-sm sm:text-base text-gray-800 p-normal">
            <div className="flex gap-2 items-start">
              <IoLocation className="text-2xl" />
              <p>7 Campfire Ct, Werrington Downs NSW 2747, Australia</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoMdCall className="text-xl" />
              <a href="tel:+61415724571">+61 415 724 571</a>
            </div>
            <div className="flex gap-2 items-center">
              <MdEmail className="text-xl" />
              <a href="mailto:info@auspakwomenassociation.com">info@auspakwomenassociation.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-cyan-50 text-gray-800 text-sm px-4 sm:px-8 lg:px-16 py-5 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-2 text-center p-normal">
        <p>© 2025 All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
        <p>Designed & Developed by Techxudo</p>
      </div>
    </>
  );
};

export default Footer;
