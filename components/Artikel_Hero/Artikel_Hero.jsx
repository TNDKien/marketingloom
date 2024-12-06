import { storyblokEditable } from "@storyblok/react/rsc";

const Artikel_Hero = ({ blok }) => (
  <div className="z-2 mx-24" {...storyblokEditable(blok)}>
    <div className="font-sans text-h1-desktop text-center pt-6">
      {blok.titel}
    </div>
    <div className="text-p-large-desktop text-center mt-8">
      {blok.inleiding}
    </div>

    {/* Searchbar */}
    <div className="mt-14 flex justify-end">
      <div className="w-1/4 flex justify-between border-red border-2 h-12 items-center ">
        <span className="ml-6 text-label-desktop font-semibold">
          Zoek interview..
        </span>
        <img
          className="mr-6"
          src={blok.search.filename}
          alt={blok.search.alt || "search"}
        />
      </div>
    </div>

    <div className="flex mt-6">
      <div>
        <img
          className=""
          src={blok.artikel_afbeelding.filename}
          alt={blok.artikel_afbeelding.alt || "Speaker"}
        />
      </div>

      <div className="ml-8">
        <div className="w-fit text-label-desktop font-regular text-white bg-red px-4 py-1 ">
          {blok.categorie}
        </div>
        <div className="text-h3-desktop font-semibold mt-4">{blok.kopje}</div>
        <div className="text-label-desktop text-regular mt-2 text-silver">
          {blok.kopje_inleiding}
        </div>
        <div className="text-paragraph font-serif mt-6">{blok.tekst}</div>

        <div className="flex justify-between text-red width-2 mt-6">
          <div className="text-label-desktop font-regular mt-8">
            {blok.datum}
          </div>
          <div className="text-label-desktop font-regular mt-8">
            {blok.leestijd}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Artikel_Hero;
