import { getStoryblokApi } from "@storyblok/react";
import Artikel from "@components/Artikel/Artikel";

export async function getData(slug: string): Promise<any> {
  const storyblokApi = getStoryblokApi();
  try {
    const response = await storyblokApi.get(`cdn/stories/artikelen/${slug}`, {
      version: "draft",
      cv: Date.now(),
    });
    console.log("Storyblok response:", response.data.story);
    return response.data.story;
  } catch (error) {
    console.error("Error fetching data from Storyblok:", error);
    throw new Error(`Could not fetch the article with slug: ${slug}`);
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const story = await getData(slug);
  const blok = story.content;

  return (
    <div>
      <Artikel blok={blok} />
    </div>
  );
}
