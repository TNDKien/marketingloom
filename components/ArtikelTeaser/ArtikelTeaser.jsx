import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const ArtikelTeaser = ({ article }) => {
  if (!article) {
    console.error("Article data is missing in ArtikelTeaser");
    return null;
  }

  console.log(article);

  return (
    <div className="" {...storyblokEditable(article)}>
      <div className="p-6 w-96">
        <img
          className="object-cover object-center w-full mb-8 h-48 rounded-xl"
          src={article.afbeelding?.filename || ""}
          alt={article.afbeelding?.alt || "Image"}
        />
        <h2 className="mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
          {article.titel || "Untitled"}
        </h2>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {article.subtitel || "No teaser available"}
        </div>
        <div className="mt-4">
          <Link
            href={`/${article.slug}`}
            className="inline-flex items-center mt-4 font-semibold text-rood lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            Lees meer »
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelTeaser;
