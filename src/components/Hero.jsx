import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="bg-cover min-h-screen flex items-center mt-10"
      style={{
        backgroundImage: "url('https://apwa.org.au/images/home-banner.jpg')",
      }}
    >
      <div className="text-white px-6 sm:px-10 md:px-16 py-20 max-w-6xl w-full">
        <p
          style={{ fontStyle: "italic" }}
          className="text-xs sm:text-sm mb-6 p-medium text-green-600 rounded-full bg-white px-3 inline-block border border-green-200"
        >
          #TogetherWeWillRise
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide tim">
          Empowering Women,
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-transparent bg-clip-text tim">
          breaking the silence.
        </h1>

        <p className="text-sm sm:text-base mb-6 max-w-3xl tracking-wide p-regular">
          We empower Pakistani and multicultural women in Australia to achieve
          independence and{" "}
          <span className="font-extrabold text-gray-200">
            well-being across all aspects of life—physical, mental, spiritual,
            and financial.
          </span>
        </p>

        <Link
          to={"/donate"}
          className="bg-gradient-to-r from-green-500 to-slate-600 hover:from-green-600 hover:to-slate-700 transition-all duration-500 text-white px-5 py-2.5 sm:px-4 sm:py-3 rounded-md text-xs sm:text-sm flex items-center gap-2 w-fit p-normal"
        >
          Donate Now{" "}
          <span className="text-white">
            <IoMdHeart />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
