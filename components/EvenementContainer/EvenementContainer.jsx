import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import EvenementTeaser from "../EvenementTeaser/EvenementTeaser";

const EvenementenContainer = ({ blok }) => {
  const [evenementen, setEvenementen] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <section className="p-6 lg:px-24" {...storyblokEditable(blok)}>
      <p className="text-h2-desktop font-bold mb-6">
        {blok.titel || "Evenementen"}
      </p>
      <div className="flex flex-col gap-6">
        {evenementen.map((event) => (
          // console.log(event),
          <EvenementTeaser
            key={event.slug}
            event={event}
            className="w-1/2 h-48 flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default EvenementenContainer;
