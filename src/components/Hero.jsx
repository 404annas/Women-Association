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
      <div className="text-white max-w-4xl pl-16 pt-10">
      <p
        style={{ fontStyle: "italic" }}
        className="text-sm mb-6 p-medium text-green-600 rounded-full bg-white px-3 inline-block border border-green-200"
      >
        #TogetherWeWillRise
      </p>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 tim tracking-wide">
          Empowering Women,
        </h1>
        <h1 className="text-3xl md:text-6xl mb-6 leading-none bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-transparent bg-clip-text tim">
          breaking the silence.
        </h1>

        <p className="text-base mb-6 p-regular max-w-3xl tracking-wide">
          We empower Pakistani and multicultural women in Australia to achieve
          independence and <span className="font-extrabold text-gray-200">well-being across all aspects of life—physical,
          mental, spiritual, and financial.</span>
        </p>
        <Link to={"/donate"} className="bg-gradient-to-r from-green-500 to-slate-600 hover:from-green-600 hover:to-slate-700 transition-all duration-500 text-white px-6 py-3 rounded-md text-sm flex items-center gap-2 w-fit">
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
