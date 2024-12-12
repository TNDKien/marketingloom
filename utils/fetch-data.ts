import {
  getStoryblokApi,
  ISbStoriesParams,
  ISbResult,
} from "@storyblok/react/rsc";

interface FetchDataResponse {
  story: any; // Replace 'any' with the actual type of your story
}

interface FetchDataResult {
  data: FetchDataResponse;
  status: number;
}

console.log("dit is de fetch data bestand");

async function fetchData(slug?: string): Promise<FetchDataResult> {
  console.log(`${slug}`);
  const storyblokApi = getStoryblokApi();
  const sbParams: ISbStoriesParams = {
    version: "draft",
    resolve_links: "url",
    cv: Date.now(), // Use the current timestamp as a cache buster
  };
  try {
    // If Storyblok API is used
    const response: ISbResult = await storyblokApi.get(
      `cdn/stories${slug ? `/${slug}` : ""}`,
      sbParams,
      {
        cache: "no-store",
      }
    );
    console.log(sbParams);

    // Handle successful response
    return {
      data: response.data,
      status: 200, // Default status indicating success
    };
  } catch (error) {
    console.error("Error fetching data with Storyblok API:", error);

    // Fallback to fetch if Storyblok API fails
    try {
      console.log("Fallback to fetch...");
      const fallbackResponse = await fetch(
        `https://api.storyblok.com/v2/cdn/stories${
          slug ? `/${slug}` : ""
        }?version=draft`,
        {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your Storyblok access token
          },
          cache: "no-store", // Ensure no caching
        }
      );

      if (!fallbackResponse.ok) {
        throw new Error("Fallback fetch failed");
      }

      const fallbackData = await fallbackResponse.json();
      return {
        data: fallbackData,
        status: 200,
      };
    } catch (fallbackError) {
      console.error("Error with fallback fetch:", fallbackError);

      // Final return in case of failure
      return {
        data: {
          story: null,
        }, // Optionally provide default data in case of an error
        status: 404, // Indicate an error
      };
    }
  }
}

export default fetchData;
