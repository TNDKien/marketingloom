import { storyblokEditable } from "@storyblok/react";

const Artikel_XS = ({ blok }) => (
  <div className="p-4 bg-black sm:bg-white" {...storyblokEditable(blok)}>
    {/* Artikel */}
    <div
      className="text-white mb-4 flex flex-row group cursor-pointer sm:bg-white sm:text-black sm:max-w-[360px] sm:min-h-[110px]"
      onClick={() => {
        window.location.href = blok["artikel_xs_link"];
      }}
    >
      {/* Afbeelding */}
      <img
        className="h-[110px] w-[110px] object-cover transition-opacity duration-300 group-hover:opacity-80 mr-4"
        src={blok["artikel_xs_image"]?.filename}
        alt={blok["artikel_xs_image"]?.alt || "Afbeelding"}
      />

      {/* Tekstcontainer */}
      <div className="flex flex-col justify-between max-w-full">
        {/* Titel */}
        <h1 className="text-label-desktop font-ser font-semibold text-red mb-1 group-hover:underline">
          {blok["artikel_xs_title"]}
        </h1>
        {/* Paragraaf */}
        <p className="text-label-desktop group-hover:underline">
          {blok["artikel_xs_paragraph"]}
        </p>
        {/* Label */}
        <span className="text-alt-desktop text-silver font-medium group-hover:underline">
          {blok["artikel_xs_label"]}
        </span>
      </div>
    </div>
  </div>
);

export default Artikel_XS;
