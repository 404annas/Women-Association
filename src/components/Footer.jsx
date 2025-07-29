import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import footerImg from "../assets/FooterLogo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-cyan-50 pt-10">
        <div className="bg-gradient-to-b from-emerald-700 to-slate-700 mx-20 px-10 rounded-t-3xl flex items-center gap-10">
          <div>
            <h1 className="tel text-white text-5xl">Empowering Women,</h1>
            <h1 className="tel text-white text-4xl pt-1">
              Breaking the Silence
            </h1>
            <p className="p-regular text-gray-200 max-w-xl pt-4">
              We empower Pakistani and multicultural women in Australia to
              achieve independence and well-being across all aspects of
              life—physical, mental, spiritual, and financial.
            </p>
          </div>
          <img
            className="w-96 translate-y-[31px]"
            src={footerImg}
            alt="Footer Logo"
          />
        </div>
      </div>

      <div className="bg-cyan-50 px-16 py-10 flex items-center justify-between">
        <div className="flex flex-col items-start gap-6">
          <img
            className="w-28 shadow-xl rounded-full"
            src="https://www.apwa.org.au/images/apwa-logo-circle.png"
            alt="Logo"
          />
          <p className="p-normal text-gray-800 text-sm max-w-xs leading-relaxed">
            Our goal is to provide women with the tools, education, and support
            they need to overcome obstacles, unlock their potential, and lead
            fulfilling lives.
          </p>
          <div className="flex flex-row items-center gap-4 text-2xl text-gray-800">
            <a href="https://x.com/AusPakWomen">
              <p className="bg-cyan-100 rounded-full p-3">
                <FaTwitter />
              </p>
            </a>
            <a href="https://www.linkedin.com/company/auspak-women-association/">
              <p className="bg-cyan-100 rounded-full p-3">
                <FaLinkedin />
              </p>
            </a>
            <a href="https://www.facebook.com/apwapromotions">
              <p className="bg-cyan-100 rounded-full p-3">
                <FaFacebook />
              </p>
            </a>
            <a href="https://www.instagram.com/auspakwomen/">
              <p className="bg-cyan-100 rounded-full p-3">
                <FaInstagram />
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 text-gray-800 p-normal">
          <Link
            to={"/"}
            className="cursor-pointer hover:text-green-600 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="cursor-pointer hover:text-green-600 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to={"/save-heaven"}
            className="cursor-pointer hover:text-green-600 transition-all duration-300"
          >
            APWA Save Heaven
          </Link>
          <Link
            to={"/donate"}
            className="cursor-pointer hover:text-green-600 transition-all duration-300"
          >
            Donate
          </Link>
          <Link
            to={"/events"}
            className="cursor-pointer hover:text-green-600 transition-all duration-300"
          >
            Events
          </Link>
          <Link
            to={"https://apwa.org.au/resources/APWA-volunteer-form.pdf"}
            className="cursor-pointer hover:text-green-600 transition-all duration-300"
          >
            Volunteering
          </Link>
          <Link
            to={"/contact"}
            className="cursor-pointer hover:text-green-600 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-row items-center gap-2">
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/story.php?story_fbid=609032502122206&id=100090463843342&mibextid=wwXIfr&rdid=b86CfocIQSMb8hDk#"
            >
              <img
                className="w-20 h-20 object-cover"
                src="https://www.apwa.org.au/images/womens-day-2025.jpg"
                alt="Event 1"
              />
            </a>
            <div className="flex flex-col text-gray-800">
              <h1 className="tim text-lg p-normal">
                International Women's Day
              </h1>
              <p className="text-sm">Mar.16.2025</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/photo.php?fbid=532145479810909&set=a.106342482391213&type=3&mibextid=wwXIfr&rdid=AhFF0Drs07ue51a7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EXAJeBGGQ%2F%3Fmibextid%3DwwXIfr#"
            >
              <img
                className="w-20 h-20 object-cover"
                src="https://www.apwa.org.au/images/pink-stump.jpg"
                alt="Event 2"
              />
            </a>
            <div className="flex flex-col text-gray-800">
              <h1 className="tim text-lg p-normal">Pink Stump Day</h1>
              <p className="text-sm">Nov.30.2024</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/story.php?story_fbid=490933003932157&id=100090463843342&mibextid=WC7FNe&rdid=9y4kg1cIwBllRKR2#"
            >
              <img
                className="w-20 h-20 object-cover"
                src="https://www.apwa.org.au/images/breast-cancer.jpg"
                alt="Event 3"
              />
            </a>
            <div className="flex flex-col text-gray-800">
              <h1 className="tim text-lg p-normal">Breast Cancer Awarness</h1>
              <p className="text-sm">Oct.04.2024</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-xs text-gray-800 p-normal">
          <div className="flex flex-row gap-2">
            <p className="text-xl">
              <IoLocation />
            </p>
            <p className="text-sm">
              7 Campfire Ct, Werrington Downs NSW 2747, Australia
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-xl">
              <IoMdCall />
            </p>
            <a href="tel:+61 415724571">
              <p className="text-sm">+61 415 724 571</p>
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-xl">
              <MdEmail />
            </p>
            <a href="mailto:+info@auspakwomenassociation.com">
              <p className="text-sm">info@auspakwomenassociation.com</p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between bg-cyan-50 px-16 pb-5">
        <p className="p-normal text-md text-gray-800">
          © 2025 All rights reserved.
        </p>
        <p className="p-normal text-md text-gray-800">
          Terms of Service | Privacy Policy
        </p>
        <p className="p-normal text-md text-gray-800">
          Designed & Developed by Techxudo
        </p>
      </div>
    </>
  );
};

export default Footer;
