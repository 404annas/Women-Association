import { IoMdCall } from "react-icons/io";
import { HandHeart } from "lucide-react";
import { Handshake } from "lucide-react";
import { HandCoins } from "lucide-react";

const AboutAno = () => {
  const data = {
    items: [
      {
        title: "Provide Crisis Support",
        description:
          "Offering immediate assistance and counseling to women affected by domestic violence.",
      },
      {
        title: "Facilitate Safe Housing",
        description:
          "Helping women find safe and secure shelter away from abusive environments.",
      },
      {
        title: "Empowerment Programs",
        description:
          "Offering workshops and training to help women rebuild their lives, gain confidence, and achieve independence.",
      },
      {
        title: "Community Outreach",
        description:
          "Raising awareness about domestic violence within communities and promoting prevention strategies.",
      },
      {
        title: "Advocacy and Policy Influence",
        description:
          "Working to influence laws and policies that protect women from violence and ensure their well-being.",
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-emerald-100 to-cyan-50 min-h-screen pt-36">
      <div className="px-16 pb-10">
        <p className="text-sm text-gray-800 p-semibold bg-emerald-200 rounded-full px-4 inline-flex items-center tracking-wide">
          ABOUT US
        </p>
        <h1 className="tim font-normal text-7xl pt-4">
          The story of <span className="cav font-bold">APWA</span>
        </h1>
        <p className="pb-2 pt-2 p-regular text-md max-w-2xl text-gray-800">
          AusPak Women Association is a community organization committed to
          empowering Pakistani women in Australia. We provide support,
          resources, and opportunities for growth, fostering a strong, inclusive
          network.
        </p>
        <p className="pb-2 pt-2 p-regular text-md max-w-2xl text-gray-800">
          At APWA we are committed to empowering women to achieve their full
          potential through active engagement in business, employment, learning,
          and community activities.
        </p>
        <a href="tel:+61 415724571">
          <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 flex items-center gap-2">
            Contact Us{" "}
            <span>
              <IoMdCall />
            </span>
          </button>
        </a>
      </div>

      <div className="flex gap-10 py-10 px-16 bg-white">
        <div className="relative flex-1 space-y-8 pl-4 sm:pl-6 md:pl-8">
          {/* Timeline Vertical Line */}
          <div className="absolute top-10 sm:top-10 md:top-10 lg:top-10 left-1 sm:left-3 md:left-[19px] lg:left-5 w-[2px] h-[580px] sm:h-[470px] md:h-[670px] lg:h-[420px] bg-green-800" />

          {data.items.map((item, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              {/* Timeline Dot */}
              <div className="absolute top-2 sm:top-2 left-[-20px] sm:left-[-22px] w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-green-800 bg-green-800" />

              {/* Service Content */}
              <div>
                <h2 className="text-lg sm:text-xl text-green-800 tim uppercase">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-sm mt-1 p-regular font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            className="rounded-xl"
            src="https://www.apwa.org.au/images/about-banner.jpg"
            alt="About Us"
          />
        </div>
      </div>

      <div className="py-20 px-16">
        <h1 className="tel text-3xl text-gray-800 font-bold">
          Be our part by ;
        </h1>
        <div className="flex justify-between gap-10 pt-14">
          <div className="flex flex-col items-center gap-4 w-1/3 bg-emerald-100 border border-emerald-300 rounded-xl px-4 py-4">
            <p className="text-green-600">
              <HandHeart size={50} strokeWidth={1} />
            </p>
              <h1 className="tim text-2xl text-gray-800">Make Donation</h1>
              <p className="p-normal text-base text-gray-700 text-center">
                Help Pakistani Women On The Move to support newly arrived
                Pakistani women to thrive in Australia.
              </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-1/3 bg-emerald-100 border border-emerald-300 rounded-xl px-4 py-4">
            <p className="text-green-600">
              <Handshake size={50} strokeWidth={1} />
            </p>
              <h1 className="tim text-2xl text-gray-800">Become A Volunteer</h1>
              <p className="p-normal text-base text-gray-700 text-center">
                Join us as a volunteer and make a lasting impact on the lives of women in need.
              </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-1/3 bg-emerald-100 border border-emerald-300 rounded-xl px-4 py-4">
            <p className="text-green-600">
              <HandCoins size={50} strokeWidth={1} />
            </p>
              <h1 className="tim text-2xl text-gray-800">Sponsorship</h1>
              <p className="p-normal text-base text-gray-700 text-center">
                Become a sponsor and help empower women to build better, independent lives.
              </p>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-20 px-16 bg-white">
        <h1 className="tim text-4xl font-bold text-gray-800">
          Our Latest Donations
        </h1>
        <p className="p-regular text-base text-gray-700 pt-2">
          Check out the most recent contributions that are making a difference!
        </p>
        <div className="flex justify-between mx-auto max-w-5xl gap-10 pt-10">
          <div className="flex items-center gap-4 bg-gray-100 px-4 py-8 rounded-md w-1/3 shadow-sm">
            <img
              className="w-28 h-28 object-cover rounded-full"
              src="https://www.apwa.org.au/images/profile_subhash.jpg"
              alt="First Donator"
            />
            <div className="flex flex-col gap-2">
              <h1 className="tel text-xl text-gray-800">Subhash Nigam</h1>
              <p className="p-regular text-sm text-gray-700">
                Donated <span className="text-green-600">$250</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 px-4 py-8 rounded-md w-1/3 shadow-sm">
            <img
              className="w-28 h-28 object-cover rounded-full"
              src="https://www.apwa.org.au/images/avatar-icon-female.jpg"
              alt="Second Donator"
            />
            <div className="flex flex-col gap-2">
              <h1 className="tel text-xl text-gray-800">Fabia Parveen</h1>
              <p className="p-regular text-sm text-gray-700">
                Donated <span className="text-green-600">$300</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 px-4 py-8 rounded-md w-1/3 shadow-sm">
            <img
              className="w-28 h-28 object-cover rounded-full"
              src="https://www.apwa.org.au/images/avatar-icon-female.jpg"
              alt="Third Donator"
            />
            <div className="flex flex-col gap-2">
              <h1 className="tel text-xl text-gray-800">Neha Zaidi</h1>
              <p className="p-regular text-sm text-gray-700">
                Donated <span className="text-green-600">$150</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAno;
