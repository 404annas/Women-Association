import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 pt-20 pb-10 min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="tim font-extrabold text-2xl sm:text-4xl text-[#413C3A]">
            Serving the Pakistani community
          </h1>
          <p className="p-regular text-gray-700 text-sm sm:text-base py-4 sm:py-6">
            <span className="text-gray-800 p-medium">Shafaq Jaffery</span> has
            been serving the Pakistani community in Australia for over 14 years
            in various capacities. She has housed and supported victims of
            family domestic violence using a wholistic approach within her own
            home. She is the founder and CEO of Pehchan TV and Public Officer of
            the Australian Humanity Support Group. She is a journalist and
            social activist and has worked across community and stakeholder
            engagement, event management, and cross-cultural community support.
          </p>
          <p className="p-regular text-gray-700 text-sm sm:text-base pb-4 sm:pb-6">
            She is a strong advocate of the empowerment of women. Shafaq’s dream
            and vision is to create an organisation for Pakistani women and men
            to achieve their full potential. By meeting the cultural and
            linguistic (CALD) needs of this demographic and as a result
            empowering the whole community. Through this association she aims to
            provide a platform where women can thrive and succeed.
          </p>
          <p className="p-regular text-gray-700 text-sm sm:text-base pb-6">
            Join us and raise the{" "}
            <span className="text-gray-800 font-semibold">
              slogan #TogetherWeWillRise
            </span>
          </p>
          <h1 className="cav text-3xl sm:text-4xl lg:text-5xl text-gray-800">
            Shafaq Jaffery
          </h1>
          <p className="p-medium text-sm sm:text-base pt-2 text-gray-800">
            Founder & CEO
          </p>
        </div>

        {/* Image + Social Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96">
            <div className="w-full h-full rounded-full bg-green-500 p-1 relative z-0">
              <div className="relative w-full h-full rounded-full bg-white p-1 sm:p-2">
                <img
                  className="w-full h-full object-cover rounded-full border-4 border-white scale-x-100 md:scale-x-[-1] transition-transform duration-300"
                  src="https://www.apwa.org.au/images/shafaq-jaffery.jpg"
                  alt="Shafaq Jaffery"
                />
              </div>
            </div>
          </div>

          <p
            style={{ fontStyle: "italic" }}
            className="text-sm my-6 p-medium text-green-600 rounded-full bg-white px-3 inline-block border border-green-200"
          >
            #TogetherWeWillRise
          </p>

          <div className="flex items-center gap-4 text-2xl sm:text-3xl">
            <a
              className="hover:text-blue-600 transition-all duration-300"
              href="https://x.com/shafaqpaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-purple-700 transition-all duration-300"
              href="https://www.instagram.com/shafaqarifjaffery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-blue-700 transition-all duration-300"
              href="https://www.facebook.com/shafaq.jaffery.3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
