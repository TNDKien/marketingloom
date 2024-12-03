import { storyblokEditable } from "@storyblok/react/rsc";
import { EventInfo } from "../EventInfo/EventInfo";

const Evenement = ({ blok }) => {
  return (
    <article
      className="flex flex-col relative w-full px-24 justify-center items-center"
      {...storyblokEditable(blok)}
    >
      {/* Banner */}
      <section className="relative w-full h-96 flex overflow-hidden">
        {/* Background Image */}
        <div className="absolute right-0 top-0 w-3/4 h-full z-0">
          <img
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt || "Background Image"}
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

          {/* Content */}
          <div className="relative px-8 lg:px-16 text-white z-20 max-w-[60%]">
            <h1 className="text-2xl lg:text-4xl font-bold">{blok.titel}</h1>
            <p className="mt-4 text-base lg:text-lg">{blok.slogan}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm lg:text-base">
              <span className="flex items-center gap-2">
                <img
                  src="/Date.svg"
                  alt="Red Banner"
                  className="h-4 w-4 object-contain"
                />
                {blok.datum}
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="/Time.svg"
                  alt="Red Banner"
                  className="h-4 w-4 object-contain"
                />
                {blok.tijden}
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="/Location.svg"
                  alt="Red Banner"
                  className="h-4 w-4 object-contain"
                />
                {blok.locatie}
              </span>
            </div>

            {/* Button */}
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className="flex ">
        <div className=" flex flex-col items-start justify-between w-1/2 py-8 pr-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-h2-desktop">{blok.intro_kopje}</h3>
            <p>{blok.intro_tekst}</p>
          </div>
          <button>hoi</button>
        </div>
        <img
          className="w-1/2 py-6"
          src={blok.intro_afbeelding.filename}
          alt={blok.intro_afbeelding.alt}
        />
      </section>
    </article>
  );
};

export default Evenement;
