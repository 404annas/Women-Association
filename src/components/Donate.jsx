import { Play } from "lucide-react";
import chipImg from "../assets/Chip.png";

const Donate = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-100 to-cyan-50 min-h-screen pt-36">
      <div className="px-6 md:px-16 pb-10">
        {/* Top Left Content */}
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-sm text-gray-800 p-semibold bg-emerald-200 rounded-full px-4 w-fit tracking-wide">
            Donation
          </p>
          <h1 className="tim font-normal text-4xl md:text-6xl pt-4 max-w-3xl">
            Donate to <span className="cav font-extrabold">APWA</span>
          </h1>
          <p className="pb-2 pt-2 p-regular text-sm sm:text-base max-w-2xl text-gray-800">
            Help Pakistani Women On The Move to support newly arrived Pakistani
            women to thrive in Australia.
          </p>
          <a href="https://vimeo.com/1011616679">
            <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 mb-10 flex items-center gap-2 w-fit">
              Watch Event <Play size={15} />
            </button>
          </a>
        </div>

        {/* Divider */}
        <div className="border-b border-emerald-200 w-full mx-auto my-6" />

        {/* Donation Details */}
        <div className="px-0 md:px-16 py-10">
          <h1 className="tim text-3xl md:text-4xl text-gray-800 text-center">
            How To Donate?
          </h1>
          <p className="p-normal text-sm sm:text-base text-gray-700 text-center mb-10">
            Direct Deposit Into Our Bank Account
          </p>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-gray-700 to-emerald-700 px-6 sm:px-8 py-8 w-full max-w-md rounded-xl text-white flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="p-normal text-sm">BANK:</p>
                <p className="p-regular text-sm sm:text-base">
                  Australian Humanity Support Limited
                </p>
              </div>
              <img loading="lazy" className="w-12" src={chipImg} alt="Chip Image" />
              <p className="tel text-2xl">400 012 043</p>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
                <div className="flex flex-col">
                  <p className="p-normal text-sm">Holder:</p>
                  <p className="tel">73-663-953-508</p>
                </div>
                <div className="flex flex-col">
                  <p className="p-normal text-sm">BSB:</p>
                  <p className="tel">112-879</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-emerald-700 to-gray-700 px-6 sm:px-8 py-8 w-full max-w-md rounded-xl text-white flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="p-normal text-sm">BANK:</p>
                <p className="p-regular text-sm sm:text-base">
                  AusPak Women Association Incorporated APWA
                </p>
              </div>
              <img loading="lazy" className="w-12" src={chipImg} alt="Chip Image" />
              <p className="tel text-2xl">416 943 758</p>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
                <div className="flex flex-col">
                  <p className="p-normal text-sm">Holder:</p>
                  <p className="tel">79-783-248-602</p>
                </div>
                <div className="flex flex-col">
                  <p className="p-normal text-sm">BSB:</p>
                  <p className="tel">112-879</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="p-normal text-gray-700 text-sm mt-6">
          <span className="text-gray-800 p-regular text-base">• Note:</span>{" "}
          Donations for the APWA Safe Haven should be directed to the account of
          Australian Humanity Support Limited, as the program operates under its
          auspices.
        </p>
      </div>
    </section>
  );
};

export default Donate;
