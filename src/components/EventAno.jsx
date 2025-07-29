import { useState } from "react";
import { Play } from "lucide-react";
import { eventsData } from "./eventsData";
import EventCard from "./EventCard";

const ITEMS_PER_PAGE = 12;

const EventAno = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(eventsData.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = eventsData.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="bg-gradient-to-b from-emerald-100 to-cyan-50 min-h-screen pt-36">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 pb-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-sm text-gray-800 p-semibold bg-emerald-200 rounded-full px-4 w-fit tracking-wide">
            <span className="cav font-extrabold">APWA&nbsp;</span>Events
          </p>
          <h1 className="tim font-normal text-4xl md:text-5xl lg:text-6xl pt-4 max-w-3xl">
            Here are some <span className="font-extrabold">Events</span> we want
            to share.
          </h1>
          <p className="pb-2 pt-2 p-regular text-sm sm:text-base max-w-2xl text-gray-800">
            Explore past & upcoming events
          </p>
          <a href="https://vimeo.com/1011616679">
            <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-white p-regular text-sm mt-4 flex items-center gap-2 w-fit">
              Watch Event <Play size={15} />
            </button>
          </a>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            className="rounded-md w-full h-auto"
            src="https://www.apwa.org.au/images/event-banner.jpg"
            alt="Event Banner"
          />
        </div>
      </div>

      {/* Cards & Pagination */}
      <div className="bg-white px-6 md:px-10 lg:px-16 py-10">
        <h1 className="tel text-xl text-center lg:text-left">All Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-10">
          {pageItems.map((evt) => (
            <EventCard key={evt.id} {...evt} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
          {/* <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded p-normal ${
              currentPage === 1
                ? "bg-gray-300 hover:cursor-not-allowed"
                : "bg-emerald-700 text-white"
            }`}
          >
            Previous
          </button> */}

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-2 rounded p-regular ${
                currentPage === i + 1
                  ? "bg-emerald-500 text-white"
                  : "bg-emerald-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded p-normal ${
              currentPage === totalPages
                ? "bg-gray-300 hover:cursor-not-allowed"
                : "bg-emerald-700 text-white"
            }`}
          >
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default EventAno;
