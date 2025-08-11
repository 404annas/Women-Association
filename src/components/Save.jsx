import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Faq from "./Faq";

const Save = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-100 to-cyan-50 min-h-screen pt-36">
      <div className="px-6 md:px-16 pb-10">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-base text-gray-800 font-extrabold cav bg-emerald-200 rounded-full px-4 w-fit tracking-wide">
            Home For Her
          </p>
          <h1 className="tim font-normal text-4xl md:text-6xl pt-4 max-w-3xl">
            Heaven Saved By <span className="cav font-extrabold">APWA</span>
          </h1>
          <p className="pb-2 pt-2 p-regular text-sm sm:text-base max-w-2xl text-gray-800">
            Providing safe, secure homes for women in need, offering them the
            chance to rebuild their lives with dignity and hope. Together, we
            create brighter futures and empower women to thrive in a nurturing
            and supportive environment.
          </p>
          <Link to="/donate">
            <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 mb-10 flex items-center gap-2 w-fit">
              Donate <FaHeart size={15} />
            </button>
          </Link>
        </div>
      </div>

      {/* Founder's Message Section */}
      <div className="bg-white px-6 md:px-16 py-10">
        <h1 className="tim text-3xl md:text-4xl text-gray-800 text-center">
          Founder's Message
        </h1>

        <div className="flex flex-col items-center lg:flex-row justify-between gap-y-10 lg:gap-20 pt-10">
          {/* Image + Name */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72">
              <div className="w-full h-full rounded-full bg-green-500 p-1 relative z-0">
                <div className="relative w-full h-full rounded-full bg-white p-1">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                    src="https://www.apwa.org.au/images/shafaq-jaffery.jpg"
                    alt="Shafaq Jaffery"
                  />
                </div>
              </div>
            </div>
            <h1 className="cav text-gray-700 text-2xl sm:text-3xl md:text-4xl text-center font-bold">
              Shafaq Jaffery
            </h1>
            <p className="text-sm text-center mt-2 p-medium text-green-600 rounded-full px-3 inline-block border border-green-400 bg-emerald-50">
              #TogetherWeWillRise
            </p>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="tel text-xl md:text-2xl text-gray-800">Dear,</h1>
            <p className="p-normal text-gray-700">
              I hope this message finds you well. I'm writing to share an
              important initiative we're undertaking: the establishment of APWA
              Save Haven dedicated to supporting Pakistani/Muslim victims of
              domestic violence. These havens will serve as safe spaces where
              individuals can find refuge, support, and resources to break free
              from abusive situations.
            </p>
            <p className="p-normal text-gray-700">
              Our mission is fueled by the belief that every person deserves to
              live free from fear and violence in their own home. Unfortunately,
              for far too many, this is not a reality.
            </p>
            <p className="p-normal text-gray-700">
              With APWA Save Haven, we aim to provide a lifeline to those in
              need — offering shelter, legal help, counseling and paths to
              empowerment.
            </p>
            <p className="p-normal text-gray-700">
              But we can't do it alone. Your support is essential. Your donation
              helps build safer communities and restore hope for survivors.
            </p>
            <p className="p-normal text-gray-700">
              Thank you for your solidarity. Let’s rise together.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="">
        <Faq />
      </div>
    </section>
  );
};

export default Save;
