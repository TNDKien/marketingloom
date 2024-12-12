import fetchData from "@utils/fetch-data";
import Evenement from "@components/Evenement/Evenement";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const { data, status } = await fetchData(`/evenementen/${slug}`);

    if (status !== 200 || !data?.story) {
      throw new Error(`Event with slug "${slug}" not found.`);
    }

    const blok = data.story.content;

    return (
      <div>
        <Evenement blok={blok} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering the event page:", error);

    return (
      <div>
        <p>Error loading the event. Please try again later.</p>
      </div>
    );
  }
}
