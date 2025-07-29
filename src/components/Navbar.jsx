import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "APWA Save Heaven", path: "/save-heaven" },
    { name: "Donate", path: "/donate" },
    { name: "Events", path: "/events" },
    {
      name: "Volunteering",
      path: "https://apwa.org.au/resources/APWA-volunteer-form.pdf",
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-16 py-2 border-b border-gray-300 transition-colors duration-300 z-50 ${
        isScrolled ? "bg-gray-800" : "bg-gray-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          className="w-20"
          src="https://www.apwa.org.au/images/apwa-logo-circle.png"
          alt="Logo"
        />

        <div className="flex items-center gap-10 font-normal text-white text-base">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="cursor-pointer hover:text-green-400 transition-all duration-300 p-regular"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
