import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Faq from "./Faq";

const Save = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-100 to-cyan-50 min-h-screen pt-36">
      <div className="px-16 pb-10">
        <div className="flex flex-col w-1/2">
          <p className="text-base text-gray-800 font-extrabold cav bg-emerald-200 rounded-full px-4 w-fit tracking-wide">
            Home For Her
          </p>
          <h1 className="tim font-normal text-6xl pt-4 max-w-3xl">
            Heaven Saved By <span className="cav font-extrabold">APWA</span>
          </h1>
          <p className="pb-2 pt-2 p-regular text-md max-w-2xl text-gray-800">
            Providing safe, secure homes for women in need, offering them the
            chance to rebuild their lives with dignity and hope. Together, we
            create brighter futures and empower women to thrive in a nurturing
            and supportive environment.
          </p>
          <Link to="/donate">
            <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 mb-10 flex items-center gap-2">
              Donate{" "}
              <span>
                <FaHeart size={15} />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white px-16 py-10">
        <h1 className="tim text-4xl text-gray-800 text-center">
          Founder's Message
        </h1>
        <div className="flex justify-between gap-20 pt-10">
          <div className="w-1/2 flex flex-col gap-2">
            <div className="relative w-80 h-80">
              <div className="w-full h-full rounded-full bg-green-500 p-1 relative z-0">
                <div className="relative w-full h-full rounded-full bg-white p-1">
                  <img
                    style={{ transform: "scaleX(1)" }}
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                    src="https://www.apwa.org.au/images/shafaq-jaffery.jpg"
                    alt="Shafaq Jaffery"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center flex-col">
              <h1 className="cav text-gray-700 text-4xl text-center font-bold">
                Shafaq Jaffery
              </h1>
              <p
                style={{ fontStyle: "italic" }}
                className="text-sm text-center mt-4 p-medium text-green-600 rounded-full px-3 inline-block border border-green-400 bg-emerald-50"
              >
                #TogetherWeWillRise
              </p>{" "}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="tel text-2xl text-gray-800">Dear,</h1>
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
              for far too many, this is not a reality. Domestic violence
              continues to affect individuals and families across our community,
              leaving behind deep scars and profound trauma.
            </p>
            <p className="p-normal text-gray-700">
              With APWA Save Haven, we aim to provide a lifeline to those in
              need. These havens will offer not only physical shelter but also
              emotional support, legal assistance, counseling services, and
              pathways to independence and empowerment.
            </p>
            <p className="p-normal text-gray-700">
              However, we cannot achieve this vision alone. We need the support
              of compassionate individuals like you to bring APWA Save Haven to
              fruition. Your financial contribution will play a crucial role in
              our efforts to create safer communities for everyone.
            </p>
            <p className="p-normal text-gray-700">
              Thank you for considering our cause and for your willingness to
              stand with us in solidarity with domestic violence survivors.
              Together, we can make a tangible difference in the lives of those
              who need it most. Below is the tax-deductible account information
              for your contribution.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Faq />
      </div>
    </section>
  );
};

export default Save;
