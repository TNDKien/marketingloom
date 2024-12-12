import fetchData from "@utils/fetch-data";
import Interview from "@components/Interview/Interview";

export default async function InterviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const { data, status } = await fetchData(`/interviews/${slug}`);

    if (status !== 200 || !data?.story) {
      throw new Error(`Interview with slug "${slug}" not found.`);
    }

    const blok = data.story.content;

    return (
      <div>
        <Interview blok={blok} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering the interview page:", error);

    return <div>Error loading the interview. Please try again later.</div>;
  }
}
