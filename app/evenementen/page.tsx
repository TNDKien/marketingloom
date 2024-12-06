"use client";

import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export async function getData(slug: string) {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: Date.now(),
  });

  return response.data;
}

export default async function EvenementenPage() {
  const data = await getData("evenementen/home");

  if (!data?.story) {
    return <div>Content not found.</div>;
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}
