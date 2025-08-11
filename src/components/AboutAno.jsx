import { IoMdCall } from "react-icons/io";
import { HandHeart, Handshake, HandCoins } from "lucide-react";

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
    <div className="bg-gradient-to-b from-emerald-100 to-cyan-50 pt-36">
      {/* Header Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 pb-10">
        <p className="text-sm text-gray-800 p-semibold bg-emerald-200 rounded-full px-4 inline-flex items-center tracking-wide">
          ABOUT US
        </p>
        <h1 className="tim font-normal text-4xl sm:text-5xl lg:text-7xl pt-4">
          The story of <span className="cav font-bold">APWA</span>
        </h1>
        <p className="p-regular text-sm sm:text-base max-w-2xl text-gray-800 pt-2">
          AusPak Women Association is a community organization committed to
          empowering Pakistani women in Australia. We provide support,
          resources, and opportunities for growth, fostering a strong, inclusive
          network.
        </p>
        <p className="p-regular text-sm sm:text-base max-w-2xl text-gray-800 pt-2">
          At APWA we are committed to empowering women to achieve their full
          potential through active engagement in business, employment, learning,
          and community activities.
        </p>
        <a href="tel:+61 415724571">
          <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 flex items-center gap-2">
            Contact Us <IoMdCall />
          </button>
        </a>
      </div>

      {/* Timeline and Image Section */}
      <div className="flex items-center flex-col-reverse lg:flex-row gap-10 py-10 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        {/* Timeline */}
        <div className="relative flex-1 space-y-8 pl-4 sm:pl-6">
          <div className="absolute top-10 left-0 sm:left-2 w-[2px] h-[480px] sm:[h-300px] md:h-[350px] lg:h-[420px] bg-green-800" />
          {data.items.map((item, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div className="absolute top-1 left-[-25px] w-5 h-5 rounded-full border-2 border-green-800 bg-green-800" />
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

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            loading="lazy"
            className="rounded-xl max-w-full h-auto"
            src="https://www.apwa.org.au/images/about-banner.jpg"
            alt="About Us"
          />
        </div>
      </div>

      {/* Call-to-Action Cards */}
      <div className="py-20 px-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="tel text-2xl sm:text-3xl text-gray-800 font-bold">
          Be our part by ;
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-14">
          {[
            {
              icon: <HandHeart size={50} strokeWidth={1} />,
              title: "Make Donation",
              desc: "Help Pakistani Women On The Move to support newly arrived Pakistani women to thrive in Australia.",
            },
            {
              icon: <Handshake size={50} strokeWidth={1} />,
              title: "Become A Volunteer",
              desc: "Join us as a volunteer and make a lasting impact on the lives of women in need.",
            },
            {
              icon: <HandCoins size={50} strokeWidth={1} />,
              title: "Sponsorship",
              desc: "Become a sponsor and help empower women to build better, independent lives.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4 bg-white border border-emerald-300 rounded-xl px-6 py-6"
            >
              <div className="text-green-600">{card.icon}</div>
              <h2 className="tim text-xl sm:text-2xl text-gray-800">
                {card.title}
              </h2>
              <p className="p-normal text-sm sm:text-base text-gray-700">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Donor Section */}
      <div className="pt-10 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <h1 className="tim text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our Latest Donations
        </h1>
        <p className="p-regular text-sm sm:text-base text-gray-700 pt-2">
          Check out the most recent contributions that arel making a difference!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 max-w-6xl mx-auto">
          {[
            {
              name: "Subhash Nigam",
              amount: "$250",
              img: "https://www.apwa.org.au/images/profile_subhash.jpg",
            },
            {
              name: "Fabia Parveen",
              amount: "$300",
              img: "https://www.apwa.org.au/images/avatar-icon-female.jpg",
            },
            {
              name: "Neha Zaidi",
              amount: "$150",
              img: "https://www.apwa.org.au/images/avatar-icon-female.jpg",
            },
          ].map((donor, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gray-100 px-4 py-6 rounded-md shadow-sm"
            >
              <img
                loading="lazy"
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
                src={donor.img}
                alt={donor.name}
              />
              <div>
                <h2 className="tel text-lg sm:text-xl text-gray-800">
                  {donor.name}
                </h2>
                <p className="p-regular text-sm text-gray-700">
                  Donated <span className="text-green-600">{donor.amount}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAno;
