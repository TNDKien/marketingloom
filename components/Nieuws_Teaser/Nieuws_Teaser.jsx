import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuws_Teaser = ({ blok }) => (
  <div className="py-8" {...storyblokEditable(blok)}>
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
            <span className="text-silver">{blok.tijd}</span>
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
            <a href="#" className="pt-2 md:pt-3 font-semibold hover:underline">
              Lees meer →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Nieuws_Teaser;