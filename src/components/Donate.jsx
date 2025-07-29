import { Play } from "lucide-react";
import chipImg from "../assets/Chip.png";

const Donate = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-100 to-cyan-50 min-h-screen pt-36">
      <div className="px-16 pb-10">
        <div className="flex flex-col w-1/2">
          <p className="text-sm text-gray-800 p-semibold bg-emerald-200 rounded-full px-4 w-fit tracking-wide">
            Donation
          </p>
          <h1 className="tim font-normal text-6xl pt-4 max-w-3xl">
            Donate to <span className="cav font-extrabold">APWA</span>
          </h1>
          <p className="pb-2 pt-2 p-regular text-md max-w-2xl text-gray-800">
            Help Pakistani Women On The Move to support newly arrived Pakistani
            women to thrive in Australia.
          </p>
          <a href="https://vimeo.com/1011616679">
            <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 mb-10 flex items-center gap-2">
              Watch Event{" "}
              <span>
                <Play size={15} />
              </span>
            </button>
          </a>
        </div>

        <div className="border-b border-emerald-200 w-full mx-auto" />

        <div className="px-16 py-10">
          <h1 className="tim text-3xl text-gray-800 text-center">
            How To Donate ?
          </h1>
          <p className="p-normal text-gray-700 text-center mb-10">
            Direct Deposit Into Our Bank Account
          </p>

          <div className="flex gap-8 justify-center">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-gray-700 to-emerald-700 px-8 py-8 w-[450px] rounded-xl text-white flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="p-normal text-sm">BANK :</p>
                <p className="p-regular">Australian Humanity Support Limited</p>
              </div>
              <div>
                <img className="w-12" src={chipImg} alt="Chip Image" />
              </div>
              <p className="tel text-2xl">400 012 043</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="p-normal text-sm">Holder :</p>
                  <p className="tel">73-663-953-508</p>
                </div>
                <div className="flex flex-col">
                  <p className="p-normal text-sm">BSB :</p>
                  <p className="tel">112-879</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-emerald-700 to-gray-700 px-8 py-8 w-[450px] rounded-xl text-white flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="p-normal text-sm">BANK :</p>
                <p className="p-regular">
                  AusPak Women Association Incorporated APWA
                </p>
              </div>
              <div>
                <img className="w-12" src={chipImg} alt="Chip Image" />
              </div>
              <p className="tel text-2xl">416 943 758</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="p-normal text-sm">Holder :</p>
                  <p className="tel">79-783-248-602</p>
                </div>
                <div className="flex flex-col">
                  <p className="p-normal text-sm">BSB :</p>
                  <p className="tel">112-879</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="p-normal text-gray-700 text-sm">
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
