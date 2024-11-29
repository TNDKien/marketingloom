import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react";

const Sidebar = ({ blok }) => {
  // Houdt bij welk tabblad momenteel actief is (standaard: "Net binnen").
  const [activeTab, setActiveTab] = useState("Net binnen");

  // Selecteer de juiste artikelen afhankelijk van het actieve tabblad.
  const artikelen =
    activeTab === "Net binnen"
      ? blok.artikelen_sidebar_netbinnen // Artikelen voor "Net binnen".
      : blok.artikelen_sidebar_meestgelezen; // Artikelen voor "Meest gelezen".

  return (
    <div
      // De hele sidebar container.
      className="fixed top-0 right-0 w-[400px] h-[682px] bg-wit text-white overflow-hidden md:w-[300px] sm:w-[240px] md:h-[600px] sm:h-[500px]"
      {...storyblokEditable(blok)}
    >
      {/* Tabs */}
      <div className="relative flex items-center justify-between w-full h-[44px] px-4 bg-wit md:px-3 sm:px-2">
        {/* De bewegende underline */}
        <span
          className={`absolute bottom-0 h-[2px] bg-red-400 transition-all duration-300 ease-in-out`}
          style={{
            left: activeTab === "Net binnen" ? "0%" : "50%",
            width: "50%",
          }}
        ></span>

        {/* Tab 1: Net binnen */}
        <button
          className={`flex-1 text-center font-bold px-3 py-3 ${
            activeTab === "Net binnen" ? "text-black" : "text-gray-500"
          } md:text-sm sm:text-xs`}
          onClick={() => setActiveTab("Net binnen")}
        >
          Net binnen
        </button>

        {/* Tab 2: Meest gelezen */}
        <button
          className={`flex-1 text-center font-bold px-3 py-3 ${
            activeTab === "Meest gelezen" ? "text-black" : "text-gray-500"
          } md:text-sm sm:text-xs`}
          onClick={() => setActiveTab("Meest gelezen")}
        >
          Meest gelezen
        </button>
      </div>

      {/* Content */}
      <div className="h-[594px] overflow-y-auto px-4 md:h-[500px] sm:h-[400px] md:px-3 sm:px-2">
        {artikelen.map((artikel, index) => (
          <div
            key={index}
            className={`flex w-full h-[69px] items-center mb-[24px] ${
              index === 0 ? "mt-[32px]" : ""
            } md:h-[60px] sm:h-[50px] md:mb-[16px] sm:mb-[12px]`}
            {...storyblokEditable(artikel)}
          >
            {/* Afbeelding van het artikel */}
            <img
              src={artikel.sidebar_image.filename}
              alt={artikel.sidebar_title}
              className="w-[116px] h-[69px] object-cover transition-opacity duration-300 hover:opacity-80 md:w-[90px] md:h-[60px] sm:w-[70px] sm:h-[50px]"
            />

            {/* Titel en beschrijving */}
            <div className="pl-4 md:pl-3 sm:pl-2">
              <h3 className="font-standaard text-lg font-bold text-black md:text-base sm:text-sm">
                {artikel.sidebar_title}
              </h3>
              <p className="font-standaard text-sm font-normal text-black md:text-xs sm:text-[10px]">
                {artikel.sidebar_paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lees Meer Knop */}
      <div className="w-full h-[44px] px-4 flex items-center md:px-3 sm:px-2">
        <button className="group relative flex items-center text-sm font-bold text-black md:text-xs sm:text-[10px]">
          <span className="relative z-10">Lees Meer</span>
          <span className="ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-2 opacity-100 group-hover:opacity-0">
            →
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
