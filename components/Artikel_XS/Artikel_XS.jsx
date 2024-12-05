import { storyblokEditable } from "@storyblok/react";

const Artikel_XS = ({ blok }) => (
  <div
    className="bg-white text-black p-4 mb-4 max-w-[360px] min-h-[110px] flex flex-row group cursor-pointer"
    {...storyblokEditable(blok)}
    onClick={() => {
      window.location.href = blok["artikel_xs_link"]; // Verwijst naar de gewenste URL
    }}
  >
    {/* Afbeelding */}
    <img
      className="h-[110px] w-[110px] object-cover transition-opacity duration-300 group-hover:opacity-80"
      src={blok["artikel_xs_image"]?.filename}
      alt={blok["artikel_xs_image"]?.alt || "Afbeelding"}
    />

    {/* Tekstcontainer */}
    <div className="ml-4 flex flex-col justify-between max-w-235">
      {/* Titel */}
      <h1 className="text-label-desktop font-ser text-red mb-1 group-hover:underline">
        {blok["artikel_xs_title"]}
      </h1>
      {/* Paragraaf */}
      <p className="text-label-desktop text-black max-w-235 group-hover:underline">
        {blok["artikel_xs_paragraph"]}
      </p>
      {/* Label */}
      <span className="text-alt-desktop text-silver max-w-235 font-medium bg-white group-hover:underline">
        {blok["artikel_xs_label"]}
      </span>
    </div>
  </div>
);

export default Artikel_XS;
