import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const ArtikelTeaser = ({ article }) => {
  if (!article) {
    console.error("Article data is missing in ArtikelTeaser");
    return null;
  }

  return (
    <div className="column feature" {...storyblokEditable(article)}>
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
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
            href={`/artikelen/${article.slug}`}
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            Read More »
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelTeaser;
