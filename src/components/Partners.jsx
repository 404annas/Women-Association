import Marquee from "react-fast-marquee";

const logos = [
  "https://www.apwa.org.au/images/logo-best-disability-services.png",
  "https://www.apwa.org.au/images/auburn-radiology.png",
  "https://www.apwa.org.au/images/liongroup.png",
  "https://www.apwa.org.au/images/oasis-logo.png",
  "https://www.apwa.org.au/images/logo-broadsafe.png",
  "https://www.apwa.org.au/images/logo-sada-e-watan.png",
  "https://www.apwa.org.au/images/logo-smash-repairs.png",
  "https://www.apwa.org.au/images/pehchan-media-logo.png",
];

const Partners = () => {
  return (
    <div className="bg-white pt-10 pb-10 overflow-hidden px-4 sm:px-6 lg:px-12">
      <h1 className="pb-10 sm:pb-14 tim font-bold text-2xl sm:text-3xl md:text-4xl text-center">
        Our Partners & Supporters
      </h1>
      <Marquee speed={150} gradient={false} pauseOnHover={false}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="mx-10 sm:mx-16 w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
