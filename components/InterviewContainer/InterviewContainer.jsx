import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import Interview_Teaser from "../Interview_Teaser/Interview_Teaser";

const InterviewContainer = ({ blok }) => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviews = async () => {
      if (!blok.interviews || blok.interviews.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const storyblokApi = getStoryblokApi();

        // Batch fetch the stories using their UUIDs
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft", // or 'published'
          by_uuids: blok.interviews.join(","), // Join the UUIDs into a comma-separated string
        });

        // Format the fetched interviews
        const formattedInterviews = data.stories.map((interview) => ({
          titel: interview.content.titel || interview.name,
          subtitel: interview.content.subtitel || "",
          afbeelding: interview.content.afbeelding || null,
          slug: interview.full_slug,
          datum: interview.content.datum,
          leestijd: interview.content.leestijd,
          categorie: interview.content.categorie,
          auteur: interview.content.auteur,

        }));

        setInterviews(formattedInterviews);
      } catch (error) {
        console.error("Failed to fetch interviews", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, [blok.interviews]);

  return (
    <section
      className="hidden sm:block p-6 lg:px-24"
      {...storyblokEditable(blok)}
    >
      {/* Render the headline */}
      <p className="text-h2-desktop font-bold mb-6">
        {blok.headline}
      </p>

      {/* Loading state */}
      {loading ? (
        <p className="text-gray-500">Interviews laden...</p>
      ) : interviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviews.map((interview, index) => (
            <Interview_Teaser
              key={index}
              interview={interview}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Geen interviews geselecteerd.</p>
      )}
    </section>
  );
};

export default InterviewContainer;