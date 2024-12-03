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

        // Format the fetched events
        const formattedEvenementen = data.stories.map((event) => ({
          titel: event.content.titel || event.name,
          subtitel: event.content.subtitel || "",
          afbeelding: event.content.afbeelding || null,
          slug: event.full_slug,
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
      <div className="flex overflow-x-auto gap-6">
        {evenementen.map((event) => (
          <EvenementTeaser
            key={event.slug}
            event={event}
            className="w-72 h-auto flex-shrink-0"
            imgClassName="h-48"
          />
        ))}
      </div>
    </section>
  );
};

export default EvenementenContainer;
