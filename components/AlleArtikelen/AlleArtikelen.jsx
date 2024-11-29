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

        const formattedArtikelen = data.stories.map((article) => ({
          content: article.content,
          slug: article.slug,
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (artikelen.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <section {...storyblokEditable(blok)}>
      <p className="text-3xl font-bold mb-6">{blok.Title}</p>
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4 lg:px-24 md:px-16">
        {artikelen.map((article) => (
          <ArtikelTeaser article={article.content} key={article.slug} />
        ))}
      </div>
    </section>
  );
};

export default AlleArtikelen;
