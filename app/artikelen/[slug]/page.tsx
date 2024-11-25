import { getStoryblokApi } from "@storyblok/react"; // Adjust this import based on your setup

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
    <article>
      <h1>{content.Titel}</h1>
      <img src={content.Afbeelding.filename} alt={content.Titel} />
      <p>{content.Teaser}</p>
      <div dangerouslySetInnerHTML={{ __html: content.Content }} />
    </article>
  );
}
