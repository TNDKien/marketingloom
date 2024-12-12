import fetchData from "@utils/fetch-data"; // Update the path as per your project structure
import Artikel from "@components/Artikel/Artikel";
import Sticky_Component from "@components/Sticky_Component/Sticky_Component";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const { data, status } = await fetchData(`/artikelen/${slug}`);
    if (status !== 200 || !data.story) {
      throw new Error(`Article with slug "${slug}" not found`);
    }

    const blok = data.story.content;

    return (
      <div>
        <Artikel blok={blok} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering the article page:", error);

    // You could handle the error with a fallback UI or redirect
    return (
      <div>
        <p>Error loading the article. Please try again later.</p>
      </div>
    );
  }
}
