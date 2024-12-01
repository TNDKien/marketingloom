import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import ArtikelTeaser from "../ArtikelTeaser/ArtikelTeaser";

const AlleArtikelen = ({ blok }) => {
  const [artikelen, setArtikelen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtikelen = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft", // or 'published'
          starts_with: "artikelen/",
          is_startpage: false,
        });

        // Filter out the article with the name 'Home'
        const filteredArticles = data.stories.filter(
          (article) => article.name !== "Home"
        );

        const formattedArtikelen = filteredArticles.map((article) => ({
          titel: article.content.titel || article.name,
          subtitel: article.content.subtitel || "",
          afbeelding: article.content.afbeelding || null,
          slug: article.full_slug, // Use the full_slug for correct linking
        }));

        setArtikelen(formattedArtikelen);
      } catch (error) {
        console.error("Error fetching artikelen:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtikelen();
  }, []);

  return (
    <section className="p-6 lg:px-24" {...storyblokEditable(blok)}>
      <p className="text-3xl font-bold mb-6">{blok.titel}</p>
      <div className="flex overflow-x-auto">
        {artikelen.map((article) => (
          <ArtikelTeaser article={article} key={article.slug} />
        ))}
      </div>
    </section>
  );
};

export default AlleArtikelen;
