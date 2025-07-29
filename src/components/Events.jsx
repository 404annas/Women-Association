const Events = () => {
  const events = [
    {
      img: "https://www.apwa.org.au/images/womens-day-2025.jpg",
      title: "International Women's Day",
      mainDesc:
        "The AusPak Women’s Association (APWA), in collaboration with SCI",
      fullDesc:
        "Australian Humanity Private Limited, and co-sponsored by Penrith City Council, hosted a remarkable International Women’s Day event celebrating women’s achievements and resilience.",
      date: "16/03/2025",
      day: "Sydney",
      link: "https://www.facebook.com/story.php?story_fbid=609032502122206&id=100090463843342&mibextid=wwXIfr&rdid=b86CfocIQSMb8hDk#",
    },
    {
      img: "https://www.apwa.org.au/images/pink-stump.jpg",
      title: "Pink Stump Day",
      mainDesc: "Due to rain, the venue for Pink Stump Day 2024 is changed",
      fullDesc:
        "New venue: Play Point Blacktown, 2A Bessemer St, Blacktown NSW 2148. Event starts at 11am sharp.",
      date: "30/11/2024",
      day: "Blacktown",
      link: "https://www.facebook.com/photo.php?fbid=532145479810909&set=a.106342482391213&type=3&mibextid=wwXIfr&rdid=AhFF0Drs07ue51a7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EXAJeBGGQ%2F%3Fmibextid%3DwwXIfr#",
    },
    {
      img: "https://www.apwa.org.au/images/breast-cancer.jpg",
      title: "Breast Cancer Awareness",
      mainDesc:
        "SCI and APWA hosted a ceremony to celebrate their 2nd anniversary and Breast Cancer Day",
      fullDesc:
        "Guests included Senator Shoebridge, Councillor Pandey, and Consul General Qamar Zaman.",
      date: "04/10/2024",
      day: "Sydney",
      link: "https://www.facebook.com/story.php?story_fbid=490933003932157&id=100090463843342&mibextid=WC7FNe&rdid=9y4kg1cIwBllRKR2#",
    },
  ];

  return (
    <div className="px-16 pt-10 pb-10 min-h-screen bg-gradient-to-br from-cyan-50 to-green-50">
      <p className="p-bold">Moments</p>
      <h1 className="tim text-7xl font-extrabold tracking-wide py-4">
        Our Latest Events
      </h1>
      <p className="p-regular text-base pt-2">
        Explore a diverse range of past and upcoming events hosted by AusPak
        Women Association!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 flex flex-col h-full"
          >
            {/* Clickable Image */}
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-96 overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </a>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between grow group/card relative">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 tim">
                  {event.title}
                </h3>

                {/* Description section */}
                <p className="font-semibold text-black text-sm">
                  {event.mainDesc}
                </p>

                {/* Hovered full description appears only inside card content */}
                <p className="text-gray-700 text-sm mt-2 max-h-0 opacity-0 group-hover/card:max-h-40 group-hover/card:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  {event.fullDesc}
                </p>
              </div>

              {/* Always at bottom */}
              <div className="border-t pt-4 mt-4 text-sm text-gray-500 flex justify-between">
                <span>{event.date}</span>
                <span>{event.day}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
