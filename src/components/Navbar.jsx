import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "APWA Save Heaven", path: "/save-heaven" },
    { name: "Donate", path: "/donate" },
    { name: "Events", path: "/events" },
    {
      name: "Volunteering",
      path: "https://apwa.org.au/resources/APWA-volunteer-form.pdf",
      external: true,
    },
    { name: "Contact", path: "/contact" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-4 sm:px-8 lg:px-16 py-2 border-b border-gray-700 transition-colors duration-300 z-50 bg-gray-800`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            className="w-16 sm:w-18 lg:w-20"
            src="https://www.apwa.org.au/images/apwa-logo-circle.png"
            alt="Logo"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-white text-sm sm:text-base">
            {navItems.map(({ name, path, external }) =>
              external ? (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-all duration-300 p-regular"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className="hover:text-green-400 transition-all duration-300 p-regular"
                >
                  {name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white"
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Overlay (Full screen) */}
      <div
        className={`fixed top-0 right-0 h-screen w-[60%] bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-2 py-[30px] border-b border-gray-700">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white"
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 mt-6 text-sm sm:text-base">
          {navItems.map(({ name, path, external }) =>
            external ? (
              <a
                key={name}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition duration-300 p-regular"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ) : (
              <Link
                key={name}
                to={path}
                className="hover:text-green-400 transition duration-300 p-regular"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
