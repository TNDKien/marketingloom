import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import ArtikelTeaser from "../ArtikelTeaser/ArtikelTeaser";

const PopulaireArtikelen = ({ blok }) => {
  const [artikelen, setArtikelen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtikelen = async () => {
      if (!blok.artikelen || blok.artikelen.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const storyblokApi = getStoryblokApi();

        // Batch fetch the stories using their UUIDs
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft", // or 'published'
          by_uuids: blok.artikelen.join(","), // Join the UUIDs into a comma-separated string
        });

        // Format the fetched articles
        const formattedArtikelen = data.stories.map((article) => ({
          titel: article.content.titel || article.name,
          subtitel: article.content.subtitel || "",
          afbeelding: article.content.afbeelding || null,
          slug: article.full_slug,
        }));

        setArtikelen(formattedArtikelen);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtikelen();
  }, [blok.artikelen]);

  return (
    <section className="hidden sm:block p-6 lg:px-24" {...storyblokEditable(blok)}>
      {/* Render the headline */}
      <p className="text-h2-desktop font-bold mb-6">
        {blok.headline || "Populaire Artikelen"}
      </p>

      {/* Loading state */}
      {loading ? (
        <p className="text-gray-500">Artikelen laden...</p>
      ) : artikelen.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artikelen.map((artikel, index) => (
            <ArtikelTeaser
              key={index}
              article={artikel}
              className={
                index === 0
                  ? "lg:col-span-2 w-full h-full" // First article's container height
                  : "lg:col-span-1 w-full h-48" // Others' container height
              }
              imgClassName={index === 0 ? "h-96" : "h-48"} // Dynamically adjust image height
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Geen artikelen geselecteerd.</p>
      )}
    </section>
  );
};

export default PopulaireArtikelen;
