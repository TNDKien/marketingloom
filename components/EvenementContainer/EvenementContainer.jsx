import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import EvenementTeaser from "../EvenementTeaser/EvenementTeaser";
import { FaFilter, FaTimes, FaCalendarAlt } from "react-icons/fa";

const EvenementenContainer = ({ blok }) => {
  const [evenementen, setEvenementen] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Categorie");

  useEffect(() => {
    const fetchEvenementen = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft", // or 'published'
          starts_with: "evenementen/",
          is_startpage: false,
        });

        // Filter out the event with the name 'Home'
        const filteredEvents = data.stories.filter(
          (event) => event.name !== "home"
        );

        // Format the filtered events
        const formattedEvenementen = filteredEvents.map((event) => ({
          titel: event.content.titel || event.name,
          subtitel: event.content.subtitel || "",
          afbeelding: event.content.afbeelding || {
            filename: "/placeholder.png",
            alt: "Placeholder",
          },
          slug: event.full_slug,
          datum: event.content.datum || "Onbekend",
          tijden: event.content.tijden || "Niet gespecificeerd",
          locatie: event.content.locatie || "Onbekende locatie",
          slogan: event.content.slogan || "",
          intro: event.content.intro_tekst || "",
        }));

        setEvenementen(formattedEvenementen);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvenementen();
  }, []);

  return (
    <section className="p-4 lg:px-24" {...storyblokEditable(blok)}>
      {/* Filters Section */}
      <div className="flex flex-wrap items-center justify-between w-full py-4 ">
        <div className="flex gap-2 ">
          {/* Filters Button */}
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border-red border-2">
            <img src="/filter.svg" alt="" />
            Filters
          </button>

          {/* Selected Category */}
          <div className=" items-center gap-2 px-4 py-2 border-red border-2 hidden lg:flex">
            <span className="text-sm font-medium">{selectedCategory}</span>
            <button
              onClick={() => setSelectedCategory("Categorie")}
              className="text-gray-400 hover:text-red-500"
            >
              <FaTimes />
            </button>
          </div>

          {/* Filters Section */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-medium">Datum</button>
            <button className="text-sm font-medium">Prijs</button>
            <button className="text-sm font-medium">Indeling</button>
            <button className="text-sm font-medium">Taal</button>
            <button className="text-sm font-medium">Valuta</button>
          </div>
        </div>

        {/* Calendar Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium border-red border-2"
          title="Kalender"
        >
          <FaCalendarAlt className="" />
          Kalender
        </button>
      </div>

      {/* Event List */}
      <div className="grid gap-6 mt-6 sm:grid-cols-1">
        {evenementen.map((event) => (
          <EvenementTeaser
            key={event.slug}
            event={event}
            className="w-full h-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default EvenementenContainer;
