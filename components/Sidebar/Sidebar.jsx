import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react";

const Sidebar = ({ blok }) => {
  const [activeTab, setActiveTab] = useState("Net binnen");

  const artikelen =
    activeTab === "Net binnen"
      ? blok.artikelen_sidebar_netbinnen
      : blok.artikelen_sidebar_meestgelezen;

  return (
    <div
      className="fixed top-0 right-0 w-full sm:w-[400px] bg-black sm:bg-white text-white sm:text-black"
      {...storyblokEditable(blok)}
    >
      {/* Tabs */}
      <div className="relative flex items-center justify-between w-full h-[44px] px-4 bg-black sm:bg-white text-white sm:text-black">
        {/* Complete underline */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white sm:bg-black">
          {/* Rode overlay voor de actieve tab */}
          <div
            className="absolute h-full bg-red-400 transition-all duration-300 ease-in-out"
            style={{
              width: "50%",
              left: activeTab === "Net binnen" ? "0%" : "50%",
            }}
          ></div>
        </div>

        {/* Tab 1: Net binnen */}
        <button
          className={`relative flex-1 text-center font-bold px-3 py-3 ${
            activeTab === "Net binnen"
              ? "text-white sm:text-black"
              : "text-gray-300 hover:text-white sm:hover:text-black"
          }`}
          onClick={() => setActiveTab("Net binnen")}
        >
          Net binnen
        </button>

        {/* Tab 2: Meest gelezen */}
        <button
          className={`relative flex-1 text-center font-bold px-3 py-3 ${
            activeTab === "Meest gelezen"
              ? "text-white sm:text-black"
              : "text-gray-300 hover:text-white sm:hover:text-black"
          }`}
          onClick={() => setActiveTab("Meest gelezen")}
        >
          Meest gelezen
        </button>
      </div>

      {/* Content */}
      <div className="px-4 mb-4">
        {artikelen.map((artikel, index) => (
          <a
            key={index}
            href={artikel.link} // Zorg dat `artikel.link` de URL bevat
            className={`flex w-full h-[73px] sm:h-[69px] items-center mb-[24px] ${
              index === 0 ? "mt-[16px] sm:mt-[32px]" : ""
            } group hover:underline`}
            {...storyblokEditable(artikel)}
          >
            {/* Verticale lijn altijd 2px breed */}
            <div className="block sm:hidden w-[2px] bg-red-500 h-full"></div>

            {/* Afbeelding met hover-effect */}
            <img
              src={artikel.sidebar_image.filename}
              alt={artikel.sidebar_title}
              className="hidden sm:block min-w-[116px] h-[73px] sm:h-[69px] object-cover transition-opacity duration-300 group-hover:opacity-80"
            />

            <div className="pl-4">
              <h3 className="font-standaard text-sm sm:text-base lg:text-sm font-bold text-white sm:text-black group-hover:underline">
                {artikel.sidebar_title}
              </h3>
              <p className="font-standaard text-xs sm:text-sm lg:text-xs font-normal text-white sm:text-black group-hover:underline">
                {artikel.sidebar_paragraph}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Lees Meer Knop */}
      <div className="w-full h-[44px] px-4 flex items-center bg-black sm:bg-white">
        <button className="group relative flex items-center text-sm lg:text-base font-bold text-white sm:text-black">
          <span className="relative z-10">Lees Meer</span>
          <span className="ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-2 opacity-100 group-hover:opacity-0">
            →
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white sm:bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
