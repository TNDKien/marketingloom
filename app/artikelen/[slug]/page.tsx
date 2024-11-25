import { getStoryblokApi } from "@storyblok/react"; // Adjust this import based on your setup
import fetchData from "@utils/fetch-data";

export async function getData(slug: string) {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/artikelen/${slug}`, {
    version: "draft", // Use "published" in production
  });
  return response.data.story;
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const story = await getData(slug); // Fetch the article data from Storyblok
  const { content } = story; // Content fields (e.g., Titel, Afbeelding, Teaser, Content)

  return (
    <article className="flex flex-col justify-center text-center">
      <h1 className="flex text-3xl max-w-[612px]">{content.titel}</h1>
      <img src={content.Afbeelding.filename} alt={content.Afbeelding.alt} />
      <p>{content.teaser}</p>
    </article>
  );
}
