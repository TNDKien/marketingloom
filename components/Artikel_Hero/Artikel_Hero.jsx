import { storyblokEditable } from "@storyblok/react/rsc";
import { useState } from "react";

const SearchBlock = ({ blok, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Voor het bijhouden van de ingevoerde zoekterm

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm); // Roep de zoekfunctie aan
    }
  };

  return (
    <div className="mt-14 flex justify-end">
      <div className="w-1/4 flex justify-between border-red border-2 h-12 items-center rounded-lg overflow-hidden">
        {/* Zoekveld */}
        <input
          type="text"
          className="ml-6 flex-grow text-label-desktop font-semibold focus:outline-none placeholder-black"
          placeholder="Zoek interview..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Houdt de waarde bij
        />

        {/* Zoekknop */}
        <button
          className="mr-6 flex items-center justify-center focus:outline-none"
          onClick={handleSearch}
        >
          <img
            src={blok.search.filename}
            alt={blok.search.alt || "search"}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

const Artikel_Hero = ({ blok }) => (
  <div className="z-2 mx-24" {...storyblokEditable(blok)}>
    {/* Titel */}
    <div className="font-sans text-h1-desktop text-center pt-6">
      {blok.titel}
    </div>

    {/* Inleiding */}
    <div className="text-p-large-desktop text-center mt-8">
      {blok.inleiding}
    </div>

    {/* Zoekblok */}
    <SearchBlock
      blok={blok}
      onSearch={(term) => console.log(`Zoeken naar: ${term}`)}
    />

    {/* Artikel Content */}
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
