"use client";

import fetchData from "@utils/fetch-data"; // Update the path as per your project structure
import StoryblokStory from "@storyblok/react/story";

export default async function ArtikelenPage() {
  try {
    // Use fetchData to retrieve content
    const { data, status } = await fetchData("/artikelen/home");

    if (status !== 200 || !data?.story) {
      // Handle case where content is not found
      return <div>Content not found.</div>;
    }

    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (error) {
    console.error("Error loading the page:", error);

    // Render a fallback UI in case of an error
    return <div>Error loading content. Please try again later.</div>;
  }
}
