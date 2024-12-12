import { getStoryblokApi } from "@storyblok/react";
import Artikel from "@components/Artikel/Artikel";
import Sticky_Component from "@components/Sticky_Component/Sticky_Component";

export async function getData(slug: string) {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/artikelen/${slug}`, {
    version: "draft",
    cv: Date.now(),
  });
  console.log("Storyblok response:", response.data.story);
  return response.data.story;
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
      <div>
      <Artikel blok={blok} />
      </div>
    </div>
  );
}
