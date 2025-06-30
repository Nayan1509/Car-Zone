import React from "react";

const PageBanner = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center h-48 sm:h-54 md:h-62 lg:h-50 flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Title Text */}
      <h1 className="relative text-3xl md:text-4xl font-bold text-center z-10">
        {title}
      </h1>
    </div>
  );
};

export default PageBanner;
