import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuws_Teaser = ({ blok }) => (
  <div className="sm:hidden pt-8" {...storyblokEditable(blok)}>
    <div className="px-4 md:pl-16 md:w-8/12">
      {/* Flex-container met responsive layout */}
      <div className="flex flex-col md:flex-row gap-4 pb-6 items-stretch">
        {/* Afbeelding container */}
        <div className="w-full md:w-2/5 flex-shrink-0">
          <img
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Tekst container */}
        <div className="flex-grow flex flex-col justify-between">
          {/* Mobiele versie: Auteur en tijd op dezelfde lijn */}
          <div className="flex pt-0 text-red font-normal md:hidden justify-between items-center pt-2 font-semibold text-label-desktop text-black">
            <span>{blok.auteur}</span>
            <span className="text-silver font-normal">{blok.tijd}</span>
          </div>

          {/* Titel */}
          <h2 className="text-lg md:text-p-large-desktop font-semibold text-black pb-2">
            {blok.titel}
          </h2>

          {/* Body */}
          <p className="text-sm md:text-paragraph font-serif text-black line-clamp-5">
            {blok.body}
          </p>

          {/* Lijn en "Lees meer" alleen op grotere schermen */}
          <div className="border-red border-t mt-4 md:mt-6 flex items-center justify-between text-label-mobile md:text-label-desktop text-black hidden md:flex">
            <span className="flex flex-col md:flex-row gap-1 pt-2 font-semibold">
              {blok.auteur} <span className="text-silver font-normal">{blok.tijd}</span>
            </span>
        <button className="group relative flex items-center text-sm font-semibold text-black">
          <span className="relative z-10">Lees Meer</span>
          <span className="ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-2 opacity-100 group-hover:opacity-0">
            →
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Nieuws_Teaser;