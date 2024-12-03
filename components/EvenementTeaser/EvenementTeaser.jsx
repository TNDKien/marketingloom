import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const EvenementTeaser = ({ event, className, imgClassName }) => {
  if (!event) {
    console.error("Event data is missing in EvenementTeaser");
    return null;
  }

  return (
    <div className={`mr-6 ${className}`} {...storyblokEditable(event)}>
      <img
        className={`object-cover object-center w-full mb-8 ${imgClassName}`}
        src={event.afbeelding?.filename || ""}
        alt={event.afbeelding?.alt || "Image"}
      />
      <h2 className="h-12 mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-black">
        {event.titel || "Untitled"}
      </h2>
      <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-3">
        {event.subtitel || "No teaser available"}
      </div>
      <div className="mt-4">
        <Link
          href={`/${event.slug}`}
          className="inline-flex items-center mt-4 font-semibold text-red lg:mb-0 hover:text-neutral-600"
          title="read more"
        >
          Lees meer »
        </Link>
      </div>
    </div>
  );
};

export default EvenementTeaser;
