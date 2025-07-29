import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is APWA Save Havens?",
      content:
        "APWA Save Havens is an initiative aimed at providing safe spaces and support services for Pakistani and Muslim victims of domestic violence. We offer shelter, emotional support, legal assistance, and pathways to empowerment.",
    },
    {
      title: "How can I access the services at APWA Save Havens?",
      content:
        "Individuals seeking help can contact us at apwa.org.au/contact for more information on how to access our services. We provide confidential support and can guide you through the process.",
    },
    {
      title: "Is there a cost to use the services?",
      content:
        "No, all services provided by APWA Save Havens are free of charge. Our aim is to ensure that every individual can access the support they need without any financial burden.",
    },
    {
      title: "How can I support APWA Save Havens?",
      content:
        "You can support our initiative by making a donation, volunteering your time, or spreading awareness about our services. Every contribution helps us provide essential support to those in need.",
    },
    {
      title: "Can I Bring My Family With Me On a Work Visa?",
      content:
        "To apply for a work visa, secure a job offer and submit required documents, such as proof of employment,qualifications, and financial stability, to the immigration office. Requirements may vary by country.",
    },
  ];

  return (
    <section className="px-2 sm:px-4 py-10 bg-gradient-to-b from-emerald-50 to-cyan-50">
      <div className="flex flex-col gap-4 items-center justify-center mb-12">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
          />
          <h1 className="text-gray-700 p-medium text-base sm:text-lg">FAQ's</h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl tim text-gray-800 flex gap-2 px-4">
          Common Questions Answered
        </h1>
      </div>

      <div className="w-full px-2 sm:px-6 md:px-10 my-10 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden border-emerald-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-6 sm:py-8 text-left font-semibold bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 flex justify-between items-center "
            >
              <span className="text-base sm:text-lg md:text-xl text-gray-800 p-regular">
                {item.title}
              </span>
              <span className="text-lg">
                {openIndex === index ? <ImCross /> : <FaPlus />}
              </span>
            </button>
            <div
              className={`transition-all duration-300 px-6 overflow-hidden bg-gray-50 ${
                openIndex === index ? "max-h-44 py-6 sm:py-8" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 p-normal text-sm sm:text-base mb-4">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
