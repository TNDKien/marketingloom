import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuws_Topartikel = ({ blok }) => (
  <div className="bg-white py-8" {...storyblokEditable(blok)}>
    <div className="max-w-5xl mx-auto px-4">
      {/* Flex-container: afbeelding + tekst */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Afbeelding sectie */}
        <div className="w-full md:w-2/5">
          <img
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt || "Topartikel afbeelding"}
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Tekstsectie */}
        <div className="flex-grow">
          {/* Titel */}
          <h2 className="text-lg md:text-xl font-semibold text-black mb-3">
            {blok.titel}
          </h2>

          {/* Beschrijving */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-5">
            {blok.body}
          </p>

          {/* Auteur, tijd en knop */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between">
            {/* Auteur en tijd */}
            <div className="text-sm text-gray-500">
              <span className="font-medium text-black">{blok.auteur}</span> •{" "}
              <span>{blok.tijd}</span>
            </div>

            {/* Lees meer knop */}
            <a
              href={blok.leesMeerLink || "#"}
              className="mt-4 md:mt-0 text-red-600 font-semibold text-sm hover:underline"
            >
              Lees Meer
            </a>
          </div>
        </div>
      </div>

      {/* Onderste banner */}
      <div className="mt-8">
        <img
          src={blok.banner.filename}
          alt={blok.banner.alt || "Banner"}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
);

export default Nieuws_Topartikel;
