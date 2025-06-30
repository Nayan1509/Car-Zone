import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { path: "/", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
  { path: "/login", display: "Login" },
  { path: "/register", display: "Register" },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("hidden");
  };

  return (
    <header className="w-full bg-white shadow">
      {/* Header Middle */}
      <div className="py-4 border-b">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
              <i className="ri-car-line text-2xl"></i>
              <span>
                CarZone
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <i className="ri-earth-line text-xl text-blue-600"></i>
              <div>
                <h4 className="text-md font-medium">India</h4>
                <p className="text-sm text-gray-600">New Delhi</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <i className="ri-time-line text-xl text-blue-600"></i>
              <div>
                <h4 className="text-md font-medium">Mon - Sun</h4>
                <p className="text-sm text-gray-600">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-slate-900">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">

          <nav ref={menuRef} className="hidden sm:flex gap-6 items-center">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-white hover:text-blue-600"
                }
              >
                {item.display}
              </NavLink>
            ))}
          </nav>

          <div className="hidden sm:flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 outline-none text-sm text-white"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
