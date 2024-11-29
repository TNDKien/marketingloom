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
      className="fixed top-0 right-0 w-[400px] h-[682px] bg-wit text-white overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* Tabs */}
      <div className="relative flex items-center justify-between w-full h-[44px] px-4 bg-wit">
        {/* Complete underline */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black">
          {/* Rode overlay voor de actieve tab */}
          <div
            className="absolute h-full bg-red-400 transition-all duration-300 ease-in-out"
            style={{
              width: "50%", // Rode helft is altijd de helft van de lijn
              left: activeTab === "Net binnen" ? "0%" : "50%", // Links of rechts
            }}
          ></div>
        </div>

        {/* Tab 1: Net binnen */}
        <button
          className={`relative flex-1 text-center font-bold px-3 py-3 ${
            activeTab === "Net binnen"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setActiveTab("Net binnen")}
        >
          Net binnen
        </button>

        {/* Tab 2: Meest gelezen */}
        <button
          className={`relative flex-1 text-center font-bold px-3 py-3 ${
            activeTab === "Meest gelezen"
              ? "text-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setActiveTab("Meest gelezen")}
        >
          Meest gelezen
        </button>
      </div>

      {/* Content */}
      <div className="h-[594px] overflow-y-auto px-4">
        {artikelen.map((artikel, index) => (
          <div
            key={index}
            className={`flex w-full h-[69px] items-center mb-[24px] ${
              index === 0 ? "mt-[32px]" : ""
            }`}
            {...storyblokEditable(artikel)}
          >
            <img
              src={artikel.sidebar_image.filename}
              alt={artikel.sidebar_title}
              className="min-w-[116px] h-[69px] object-cover transition-opacity duration-300 hover:opacity-80"
            />

            <div className="pl-4">
              <h3 className="font-standaard text-sm font-bold text-black">
                {artikel.sidebar_title}
              </h3>
              <p className="font-standaard text-xs font-normal text-black">
                {artikel.sidebar_paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lees Meer Knop */}
      <div className="w-full h-[44px] px-4 flex items-center">
        <button className="group relative flex items-center text-sm font-bold text-black">
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
