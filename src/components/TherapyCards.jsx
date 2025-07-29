import { LazyLoadImage } from "react-lazy-load-image-component";

const TherapyCards = ({ cardImage, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-70 h-auto z-20 overflow-hidden">
        <LazyLoadImage
          src={cardImage}
          alt={title}
          className="group-hover:scale-110 transform transition-all duration-700 ease-in-out h-56 w-80 object-cover"
        />
      </div>
      <div className="w-90 group-hover:-translate-y-30 transform transition-all duration-700 ease-in-out -translate-y-20 bg-white">
        <div className="flex flex-col items-center px-4 justify-end -mt-8 h-full">
          {/* <LazyLoadImage src={icon} alt={`${title} icon`} className="w-12" /> */}
          <div className="pt-4 flex flex-col gap-5">
            <h1 className="text-center uppercase">
              {title}
            </h1>
            <p className="text-center text-primary/80">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyCards;
