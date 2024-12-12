import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const EvenementTeaser = ({ event, className, imgClassName }) => {
  if (!event) {
    console.error("Event data is missing in EvenementTeaser");
    return null;
  }

  return (
    <div
      className={`flex flex-col lg:flex-row w-full ${className}`}
      {...storyblokEditable(event)}
    >
      <section className="relative lg:w-1/2 h-48 flex overflow-hidden">
        {/* Background Image */}
        <div className="absolute right-0 top-0 w-3/4 h-full z-0">
          <img
            src={event.afbeelding.filename}
            alt={event.afbeelding.alt || "Background Image"}
            className="w-full h-full object-cover scale-110" // Scales the image slightly for wider effect
          />
        </div>

        {/* Red Banner and Content */}
        <div className="absolute left-0 top-0 w-8/12 h-full z-10 flex items-center">
          {/* SVG Banner */}
          <img
            src="/Banner.svg"
            alt="Red Banner"
            className="absolute w-full h-full object-cover"
          />

          {/* White Title Text */}
          <div className="relative z-20 px-6 w-64">
            <h2 className="text-white text-3xl font-bold leading-tight">
              {event.titel}
            </h2>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-2 justify-between lg:w-1/2 my-2 lg:ml-6">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-label-mobile lg:text-base">
          <span className="flex items-center gap-2">
            <span
              className="h-4 w-4 bg-black mask"
              style={{
                WebkitMaskImage: "url(/Date.svg)",
                maskImage: "url(/Date.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            ></span>
            {event.datum.split(" ")[0]}
          </span>
          <span className="flex items-center gap-2">
            <span
              className="h-4 w-4 bg-black mask"
              style={{
                WebkitMaskImage: "url(/Time.svg)",
                maskImage: "url(/Time.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            ></span>
            {event.tijden}
          </span>
          <span className="flex items-center gap-2">
            <span
              className="h-4 w-4 bg-black mask"
              style={{
                WebkitMaskImage: "url(/Location.svg)",
                maskImage: "url(/Location.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            ></span>
            {event.locatie}
          </span>
        </div>
        <article className="flex flex-col gap-2">
          <h2 className=" text-h2-desktop font-semibold leading-none tracking-tighter text-black">
            {event.titel}
          </h2>
          <p className=" font-serif leading-relaxed line-clamp-2">
            {event.intro}
          </p>
        </article>
        <div className="">
          <Link
            href={`/${event.slug}`}
            className="inline-flex items-center mt-4 font-semibold text-red lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            Meld je nu aan! »
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EvenementTeaser;
