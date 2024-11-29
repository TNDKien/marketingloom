"use client";

import { getStoryblokApi } from "@storyblok/react";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  use,
} from "react";
import { render } from "storyblok-rich-text-react-renderer";
import AlleArtikelen from "@components/AlleArtikelen/AlleArtikelen";

export async function getData() {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get("cdn/stories/", {
    version: "draft",
    starts_with: "artikelen/",
    cv: Date.now(),
  });

  console.log("Storyblok response:", response.data.stories);
  return response.data.stories;
}

export default async function ArtikelenPage() {
  const stories = await getData();

  return (
    <div>
      <AlleArtikelen blok={{}} />
    </div>
  );
}
