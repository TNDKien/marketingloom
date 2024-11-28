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
      // De hele sidebar container. Storyblok-editable wordt toegevoegd om content te beheren via Storyblok.
      className="fixed top-0 right-0 w-[400px] h-[682px] bg-wit text-white overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* Topbar */}
      {/* Hierboven staan twee tabs (Net binnen en Meest gelezen). De actieve tab krijgt een rode onderstreep. */}
      <div className="flex items-center justify-between w-full h-[44px] px-4 bg-wit">
        <button
          className={`flex-1 text-center font-bold text-black px-3 py-3 border-b-2 ${
            activeTab === "Net binnen" ? "border-red-400" : "border-gray-400"
          }`}
          // Klikken op deze knop maakt "Net binnen" actief.
          onClick={() => setActiveTab("Net binnen")}
        >
          Net binnen
        </button>
        <button
          className={`flex-1 text-center font-bold text-black px-3 py-3 border-b-2 ${
            activeTab === "Meest gelezen" ? "border-red-400" : "border-gray-400"
          }`}
          // Klikken op deze knop maakt "Meest gelezen" actief.
          onClick={() => setActiveTab("Meest gelezen")}
        >
          Meest gelezen
        </button>
      </div>

      {/* Content */}
      {/* Dynamische content op basis van welk tabblad actief is. De artikelen worden in een lijst weergegeven. */}
      <div className="h-[638px] overflow-y-auto">
        {artikelen.map((artikel, index) => (
          <div
            // Elk artikelblok.
            key={index} // Zorgt ervoor dat elk artikel een unieke sleutel heeft.
            className={`flex w-full h-[69px] items-center px-4 mb-[24px] ${
              index === 0 ? "mt-[32px]" : ""
            }`}
            {...storyblokEditable(artikel)}
          >
            {/* Afbeelding van het artikel */}
            <img
              src={artikel.sidebar_image.filename} // De afbeelding wordt vanuit Storyblok geladen.
              alt={artikel.sidebar_title} // Alternatieve tekst voor de afbeelding.
              className="w-[116px] h-[69px] object-cover"
            />

            {/* Titel en beschrijving van het artikel */}
            <div className="pl-4">
              <h3 className="font-bold text-black">{artikel.sidebar_title}</h3>
              <p className="text-xs text-black">{artikel.sidebar_paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lees Meer Knop */}
      {/* Onder de content staat een knop waarmee gebruikers naar meer artikelen kunnen gaan. */}
      <div className="flex items-center justify-center w-full h-[44px] border-t border-gray-700">
        <button className="text-sm font-bold text-blue-400">Lees Meer</button>
      </div>
    </div>
  );
};

export default Sidebar;
