"use client";

import fetchData from "@utils/fetch-data"; // Adjusted import path for fetchData
import StoryblokStory from "@storyblok/react/story";

export default async function InterviewsPage() {
  try {
    // Fetch the interviews home data using fetchData
    const { data, status } = await fetchData("/interviews/home");

    // Check if the data is valid
    if (status !== 200 || !data?.story) {
      throw new Error("Content not found.");
    }

    // Render the StoryblokStory component with the fetched story
    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (error) {
    console.error("Error loading the interviews page:", error);

    // Render a fallback UI in case of errors
    return <div>Error loading content. Please try again later.</div>;
  }
}
