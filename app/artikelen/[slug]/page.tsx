import { getStoryblokApi } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

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
    <article className="flex flex-col justify-center items-center min-h-screen p-4">
      <header className="container mx-auto m-8 max-w-[612px] text-center">
        <h1 className="text-3xl mb-6">{blok.titel}</h1>
        <p className="mb-12">{blok.teaser}</p>
      </header>
      <img src={blok.afbeelding.filename} alt={blok.afbeelding.alt} />
      <section className="prose max-w-[612px] mt-8">
        {render(blok.content)}
      </section>
    </article>
  );
}
