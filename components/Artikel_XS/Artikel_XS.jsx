import { storyblokEditable } from "@storyblok/react";


const Artikel_XS = ({ blok }) => (
  <div
    className="bg-white text-black p-4 mb-4 max-w-[360px] min-h-[110px] flex flex-row"
    {...storyblokEditable(blok)}
  >
    {/* Afbeelding */}
    <img
      className="h-[110px] w-[110px] object-cover"
      src={blok["artikel_xs_image"]?.filename}
      alt={blok["artikel_xs_image"]?.alt || "Afbeelding"}
    />

    {/* Tekstcontainer */}
    <div className="ml-4 flex flex-col justify-between max-w-235 flex-grow">
      {/* Titel */}
      <h1 className="text-xl text-red font-bold mb-1 truncate">
        {blok["artikel_xs_title"]}
      </h1>
      {/* Paragraaf */}
      <p className="text-sm text-black max-w-235 ">
        {blok["artikel_xs_paragraph"]}
      </p>
      {/* Label */}
      <span className="text-xs text-black max-w-235 font-medium bg-white px-2">
        {blok["artikel_xs_label"]}
      </span>
    </div>
  </div>
);

export default Artikel_XS;
