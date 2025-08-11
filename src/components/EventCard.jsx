const EventCard = ({
  image,
  location,
  title,
  description,
  date,
  time,
  link,
}) => (
  <div className="flex flex-col bg-emerald-50">
    <a href={link}>
      <img
        loading="lazy"
        className="w-full h-60 object-cover"
        src={image}
        alt={title}
      />
    </a>
    <div className="px-4 py-6 flex flex-col gap-4">
      <div className="bg-emerald-100 w-fit px-4 py-2 tel rounded-md text-sm">
        {location}
      </div>
      <h3 className="tim text-2xl">{title}</h3>
      <p className="p-normal text-sm">{description}</p>
      <div className="flex items-center justify-between bg-emerald-100 px-4 py-2 p-normal text-xs sm:text-sm rounded-md">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  </div>
);

export default EventCard;
