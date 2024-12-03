import { getStoryblokApi } from "@storyblok/react";
import Evenement from "@components/Evenement/Evenement";

export async function getData(slug: string) {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/evenementen/${slug}`, {
    version: "draft",
    cv: Date.now(),
  });
  console.log("Storyblok response:", response.data.story);
  return response.data.story;
}

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const story = await getData(slug);
  const blok = story.content;

  return (
    <div>
      <Evenement blok={blok} />
    </div>
  );
}
