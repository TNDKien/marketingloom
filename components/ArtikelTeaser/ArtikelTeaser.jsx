import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const ArtikelTeaser = ({ blok }) => {
  return (
    <div
      className="sm:mx-24 mx-4  sm:w-3/12  w-auto flex flex-col"
      {...storyblokEditable(blok)}
    >
      {/* Artikel Content */}
      <div className="mt-12">
        {/* Afbeelding */}
        <div>
          <img
            className="w-full h-auto"
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt || "Afbeelding"}
          />
        </div>

        {/* Datum en Leestijd */}
        <div className="flex justify-between text-red my-8">
          <div className="sm:text-label-desktop text-info-mobile font-regular">
            {blok.datum}
          </div>
          <div className="sm:text-label-desktop text-info-mobile font-regular">
            {blok.leestijd}
          </div>
        </div>

        {/* Categorie */}
        <div className="mt-8 sm:mt-0">
          <div className="w-fit text-label-desktop font-regular text-white bg-red px-4 py-1">
            {blok.categorie}
          </div>

          {/* Naam */}
          <div className="sm:text-p-large-desktop text-text-h1-mobile font-semibold mt-8">
            {blok.naam}
          </div>

          {/* Kopje Naam */}
          <div className="text-label-desktop text-regular sm:mt-2 mt-0 text-silver">
            {blok.kopje_naam}
          </div>

          {/* Tekst */}
          <div className="text-paragraph font-serif mt-6">{blok.tekst}</div>
        </div>
      </div>

      {/* Link */}
      <Link
        href={`/${blok.slug}`}
        className="inline-flex items-center mt-4 pb-4 font-semibold text-red lg:mb-0 hover:text-neutral-600"
        title="Lees meer"
      >
        Lees meer »
      </Link>
    </div>
  );
};

export default ArtikelTeaser;
