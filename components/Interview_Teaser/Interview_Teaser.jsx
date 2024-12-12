import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const InterviewTeaser = ({ interview, className, imgClassName }) => {
  if (!interview) {
    console.error("Interview data is missing in InterviewTeaser");
    return null;
  }

  return (
    <Link
    href={`/${interview.slug}`}
  >
    <article
      className={`relative bg-white overflow-hidden flex flex-col ${className}`}
      {...storyblokEditable(interview)}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          className={`w-full h-full object-cover object-center ${imgClassName}`}
          src={interview.afbeelding?.filename || "https://via.placeholder.com/800x600"}
          alt={interview.afbeelding?.alt || "Image"}
        />
        {/* Optional Banner Overlay */}
        {interview.highlight && (
          <div className="absolute inset-y-0 left-0 w-1/3 bg-pink-600 flex flex-col justify-center items-start p-4">
            <span className="text-white font-semibold text-lg">
              {interview.highlight}
            </span>
          </div>
        )}
      </div>

      {/* Meta Info: Date & Reading Time */}
      <div className="flex items-center justify-between pt-4 text-sm text-red">
        <span>{interview.datum.split(" ")[0]}</span>
        {interview.leestijd && (
          <div className="flex items-center gap-1">
            <svg
              className="h-4 w-4 text-red"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor"></circle>
              <path stroke="currentColor" d="M12 6v6l4 2"></path>
            </svg>
            <span>{interview.leestijd}</span>
          </div>
        )}
      </div>

      {/* Text Content: Category, Title, Author, and Description */}
      <div className="pr-4 py-4 flex flex-col space-y-2">
        {interview.categorie && (
          <span className="inline-block bg-red text-white text-xs font-semibold px-3 py-2 w-max">
            {interview.categorie}
          </span>
        )}
        <h2 className="text-lg font-semibold text-gray-900">
          {interview.auteur || "Untitled"}
        </h2>
        {interview.auteur && (
          <p className="text-sm text-gray-500 font-medium">
            {interview.titel}
          </p>
        )}
        <p className="text-sm text-gray-700">
          {interview.subtitel}
          </p>
      </div>
    </article>
    </Link>
  );
};

export default InterviewTeaser;