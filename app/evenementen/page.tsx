"use client";

import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";

export default async function EvenementenPage() {
  try {
    // Fetch the event data using fetchData
    const { data, status } = await fetchData("/evenementen/home");

    // Check if the data is valid
    if (status !== 200 || !data?.story) {
      throw new Error("Content not found.");
    }

    // Render the Storyblok story if content is available
    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (error) {
    console.error("Error loading the evenementen page:", error);

    // Render a fallback UI in case of errors
    return <div>Error loading content. Please try again later.</div>;
  }
}
